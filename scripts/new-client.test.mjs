import test from 'node:test';
import assert from 'node:assert/strict';
import { parseIntake, buildLeadRequest } from '../src/lib/new-client.ts';
import { readFileSync } from 'node:fs';
import ts from 'typescript';

const valid = () => ({ firstName: 'Test', lastName: 'Inquiry', phone: '(516) 555-0100', email: 'TEST@example.com',
  pets: [{ name: 'Demo Pup', breed: 'Mixed Breed', type: 'DOG' }], services: ['Daycare'],
  marketingConsent: false, submissionId: '11111111-1111-4111-8111-111111111111', attribution: { utm_source: 'facebook' } });

test('normalizes contact information and accepts optional consent', () => {
  const data = parseIntake(valid());
  assert.equal(data.phone, '+15165550100'); assert.equal(data.email, 'test@example.com');
  const request = buildLeadRequest(data, 'company', 'resort');
  assert.deepEqual(request.complianceConfig.marketingCampaignsChannels.channels, []);
  assert.equal(request.complianceConfig.isConsented, false);
  assert.match(request.lead.pets[0].notes[0].content, /Services: Daycare/);
  assert.match(request.lead.pets[0].notes[0].content, /utm_source: facebook/);
});
test('requires explicit marketing consent and retains evidence', () => {
  const request = buildLeadRequest(parseIntake({ ...valid(), marketingConsent: true }), 'company', 'resort');
  assert.equal(request.complianceConfig.marketingCampaignsChannels.channels.length, 2);
  assert.match(request.lead.pets[0].notes[0].content, /Consent wording:/);
  assert.throws(() => parseIntake({ ...valid(), marketingConsent: 'true' }));
});
test('rejects invalid contact data, missing pets, invalid services and oversized pet arrays', () => {
  for (const patch of [{ phone: '123' }, { email: 'invalid' }, { pets: [] }, { services: ['Unknown service'] },
    { pets: [{ name: ' ', type: 'DOG', breed: 'Mixed' }] }, { pets: Array(11).fill(valid().pets[0]) }]) {
    assert.throws(() => parseIntake({ ...valid(), ...patch }));
  }
});
test('preserves multiple pets, limits attribution to supported keys', () => {
  const data = parseIntake({ ...valid(), pets: [...valid().pets, { name: 'Second Pup', breed: 'Poodle', type: 'DOG' }],
    attribution: { utm_campaign: 'a'.repeat(800), unexpected: 'discard' } });
  assert.equal(data.pets.length, 2); assert.equal(data.attribution.utm_campaign.length, 500);
  assert.equal(data.attribution.unexpected, undefined);
});

test('submission route confirms saves, handles retries and fails closed', async () => {
  const originalFetch = globalThis.fetch;
  const env = { ...process.env };
  const asModule = source => 'data:text/javascript;base64,' + Buffer.from(ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 }
  }).outputText).toString('base64');
  const libUrl = asModule(readFileSync(new URL('../src/lib/new-client.ts', import.meta.url), 'utf8'));
  const routeUrl = asModule(readFileSync(new URL('../src/app/api/new-client/route.ts', import.meta.url), 'utf8')
    .replace('"../../../lib/new-client"', JSON.stringify(libUrl)));
  const { POST } = await import(routeUrl);
  let ip = 0;
  const request = (origin = 'https://example.test') => new Request('https://example.test/api/new-client/', {
    method: 'POST', headers: { origin, 'content-type': 'application/json', 'x-vercel-forwarded-for': `test-${ip++}` }, body: JSON.stringify(valid())
  });
  try {
    delete process.env.MOEGO_API_KEY;
    assert.equal((await POST(request())).status, 503);
    assert.equal((await POST(request('https://unrelated.test'))).status, 403);
    Object.assign(process.env, { MOEGO_API_KEY: 'test-key', MOEGO_COMPANY_ID: 'test-company', MOEGO_BUSINESS_ID: 'test-resort' });
    const calls = [];
    globalThis.fetch = async (url, options) => {
      calls.push({ url, body: JSON.parse(options.body) });
      if (url.endsWith('leads:list')) return Response.json({ leads: [] });
      if (url.endsWith('/notes')) return Response.json({ notes: JSON.parse(options.body).notes });
      return Response.json({ id: 'test-lead', pets: [{ ...valid().pets[0], id: 'test-pet', customerId: 'test-customer' }] });
    };
    const result = await POST(request());
    assert.equal(result.status, 200); assert.equal((await result.json()).eventId, valid().submissionId);
    assert.equal(calls.length, 3); assert.equal(calls[1].body.lead.preferredBusinessId, 'test-resort');
    assert.equal(calls[1].body.complianceConfig.isConsented, false);
    globalThis.fetch = async url => Response.json(url.endsWith('notes:list') ? { notes: [{ content: `Submission: ${valid().submissionId}` }] } : { leads: [{ phone: '+15165550100', pets: [{ id: 'test-pet', customerId: 'test-customer' }] }] });
    assert.equal((await POST(request())).status, 200);
    globalThis.fetch = async () => Response.json({ leads: [{ phone: '+15165550100' }] });
    assert.equal((await POST(request())).status, 409);
    globalThis.fetch = async () => Response.json({ error: 'upstream denied' }, { status: 403 });
    assert.equal((await POST(request())).status, 502);
  } finally { globalThis.fetch = originalFetch; process.env = env; }
});
