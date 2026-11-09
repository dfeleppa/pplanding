# Accessibility remediation and verification plan

Status: active; compliance is not yet established.

## Current public-site execution record (supersedes historical portal notes)

Source is dfeleppa/pplanding at C:/Users/DFele/work/pplanding. Scope is public pages and customer journeys only, including MoeGo/LeadConnector forms, maps, videos and linked documents. The employee portal is excluded. Most browser, assistive-technology and content-quality checks remain open; changes are local and not deployed. See ACCESSIBILITY-AUDIT.md for exact evidence and limitations.

New York applicability research: Executive Law section 296(2) addresses discrimination in public accommodations; the Division of Human Rights explains business obligations including reasonable modifications. Review these alongside ADA Title III. Do not assume NYC agency website standards or government Title II deadlines apply to this private Nassau County business. Legal applicability remains unconfirmed.

Additional primary sources:
- https://www.nysenate.gov/legislation/laws/EXC/296
- https://dhr.ny.gov/obligations-business-owners-public-accommodations
- https://www.ada.gov/topics/title-iii/

Public workflow acceptance gates: service discovery; contact and booking; new-client service selection and all dog profiles; required-field and server errors; busy and success states; third-party forms; media and documents; error recovery. Verify keyboard and screen-reader operation, contrast, zoom/reflow, text spacing, target size, reduced motion and forced colors. Production verification and legal applicability review remain required. A support page does not substitute for accessible complete workflows.

## Confirmed scope correction

The user confirmed this project covers only the public customer website, not the employee app. The public URL is https://www.planet-pooch.com/ (confirmed by this repository's website-attribution origins and the live business listing). Its published address is Franklin Square, New York. Portal-specific findings below are historical discovery, not remediation scope. The initial progress-bar change was reverted after this clarification. Locate the public website source and hosting before implementation. Audit public navigation, service pages, contact/booking journeys, media, policies, forms, and third-party customer integrations. Employee routes and roles are excluded from the execution sequence below.

## Scope and legal applicability

Audit the Planet Pooch repository and all deployed user journeys. Confirm whether the public customer website is a separate property and include it if in scope. Confirm operating jurisdictions, public-facing versus employment use, third-party booking/payment services, and any applicable contractual accessibility requirements before concluding legal applicability.

DOJ guidance says ADA obligations extend to web services of covered businesses. It does not prescribe a single detailed Title III website technical standard. Government Title II rules must not be assumed to apply to a private business. Use WCAG 2.2 Level A and AA as the engineering acceptance target; technical conformance alone does not establish every legal obligation. Obtain qualified legal review of jurisdiction-specific applicability before claiming full legal compliance.

Sources reviewed November 8, 2026:
- https://www.ada.gov/resources/web-guidance/
- https://www.w3.org/TR/WCAG22/

## Execution sequence

1. Inventory every route, role, reusable component, interaction state, document, video, integration, and complete process. Record test access and third-party ownership.
2. Establish baseline automated browser scans and keyboard checks. Inspect existing accessibility tests for actual coverage. Create a criterion-by-criterion WCAG A/AA evidence matrix, recording applicability and failures.
3. Repair shared navigation, landmarks, skip links, page titles, focus visibility/order, dialogs, tabs, form labels/errors/status announcements, table semantics, contrast, responsive reflow, motion, and target sizes.
4. Audit and repair every route and complete workflow, including authentication, onboarding, uploads, scheduling, reporting, editing, drag/drop alternatives, and error/recovery states. Include accessible alternatives for images, documents, charts, and media.
5. Verify with automated checks plus keyboard-only use, screen reader checks, 200% zoom, 320 CSS-pixel reflow, text spacing overrides, forced colors, and reduced motion. Test desktop and mobile; record browser, assistive technology, route, role, state, result, and date.
6. Verify deployed changes and third-party journeys. Publish an accurate accessibility/help statement with a verified support channel. Establish regression checks, content authoring guidance, and a process for accessibility reports.
7. Close only when all applicable criteria and complete processes have direct evidence, remaining external dependencies are resolved, and legal applicability is reviewed. Never use a clean automated scan as proof of full compliance.

## Initial evidence

- Repository main was clean at 7c877df when the audit began.
- This repository is an operations/people/reporting portal; public website scope is pending confirmation.
- Root document declares English.
- Existing tests cover shared label/error associations, static dialog semantics, and tab order markup. They do not demonstrate browser keyboard operation or site-wide conformance.
- Global focus styling currently targets the app content region; navigation and authentication require separate inspection.

## Remaining gates

All seven execution steps remain open. No accessibility conformance or legal compliance claim is authorized by this initial plan.
