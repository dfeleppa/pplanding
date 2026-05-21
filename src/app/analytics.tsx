import Script from "next/script";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export function Analytics() {
  if (!GA_ID) return null;
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}', { anonymize_ip: true });`}
      </Script>
      <Script id="ga4-conversions" strategy="afterInteractive">
        {`document.addEventListener('click', function(e) {
  var t = e.target;
  var el = t && t.closest ? t.closest('[data-track], a') : null;
  if (!el) return;
  var trackKey = el.getAttribute && el.getAttribute('data-track');
  if (trackKey) {
    gtag('event', 'landing_cta_click', {
      event_category: 'conversion',
      track_key: trackKey,
      page_path: location.pathname
    });
  }
  var a = el.tagName === 'A' ? el : (el.closest ? el.closest('a') : null);
  if (!a || !a.href) return;
  var href = a.href;
  var text = (a.innerText || '').trim().slice(0, 80);
  if (href.indexOf('tel:') === 0) {
    gtag('event', 'phone_click', {
      event_category: 'conversion',
      phone_number: href.replace('tel:', ''),
      link_text: text,
      page_path: location.pathname
    });
    return;
  }
  if (href.indexOf('leadconnectorhq.com') !== -1) {
    gtag('event', 'cta_click', {
      event_category: 'conversion',
      link_url: href,
      link_text: text,
      page_path: location.pathname
    });
  }
}, { passive: true });`}
      </Script>
    </>
  );
}
