# Sprint 1 verification record

Date: 2 October 2026. Environment: Windows, Node 24.19.0; production preview on 127.0.0.1:5173;. All data is fictional.

## Automated checks

`pnpm test` / `node --test tests/*.test.js`: 27 tests passed, 0 failed. Coverage includes catalogue integrity, combined filtering and sorting, malformed cart data, size variants, stock/quantity bounds, removal, integer-cent totals, registration validation, duplicate email checks, salted hashes and unavailable/corrupt storage handling. These are logic tests, not a coverage-percentage claim or a full browser regression suite.

Production build: `pnpm build` / `node node_modules/vite/bin/vite.js build --configLoader native` passed.

## Browser cases actually executed

| ID | Action / precondition | Expected | Observed result |
| --- | --- | --- | --- |
| B01 | Open homepage at desktop size | Clothing theme and links render | Pass: clothing homepage rendered with original garment illustrations |
| B02 | Open Everyday heavyweight tee; add without selecting size | Validation; no item added | Pass: select-size error and unchanged empty cart |
| B03 | Add that tee in M and L | Separate size variants | Pass: M x1 and L x1, subtotal/total EUR 36, free delivery |
| B04 | Increase M once; refresh cart | Quantity and variants persist | Pass: M x2, L x1, total EUR 54 |
| B05 | Remove M with L still present | Only M removed; totals recalculate | Pass: L x1 remains; EUR 18 + EUR 2.90 = EUR 20.90 |
| B06 | Remove the remaining L | Useful empty-cart view | Pass: empty-cart message and browse link |
| B07 | Submit blank registration | Display input validation | Pass: name, email and password errors displayed |
| B08 | Register Demo Student with fictional email and matching test passwords | Demo account created and signed in | Pass: catalogue, Sign out control and success message |
| B09 | Sign out; attempt same email with wrong password | Sign out works; login rejected | Pass: signed-out homepage and incorrect-credentials error |
| B10 | Enter correct test password; refresh | Sign in; session persists within tab | Pass: Sign out control remained after refresh; subsequently signed out |
| B11 | Catalogue: Hoodies category plus search studio | One matching hoodie | Pass: Studio cropped hoodie only, marked sold out |
| B12 | Open sold-out hoodie | Purchasing disabled | Pass: out-of-stock message and disabled Sold out button |
| B13 | Mobile: enter zzznomatch, then Clear filters | Empty results; then all products restored | Pass: no-styles message, then 18 styles |
| B14 | Choose price low to high | Ascending price order | Pass: initial products EUR 15, 18, 19, 20 in order; full sorting also tested in unit suite |
| B15 | Mobile: expand menu, navigate to catalogue | Menu opens and navigation succeeds | Pass: menu exposed links and closed on navigation |
| B16 | At 360 x 800: inspect home, product detail and populated cart | No horizontal overflow | Pass: document scroll width 345 vs viewport 360 on these pages; homepage and cart screenshots visually checked |
| B17 | Mobile: choose S on tee and add, then view cart | Selected size/price retained | Pass: S x1, total EUR 20.90; removed test item afterwards |
| B18 | Inspect browser warning/error console after tested flows | No application errors | Pass: returned log list empty |

## Limits / remaining checks

- No production-security, accessibility-compliance, real-device or cross-browser certification.
- Registration duplicate handling is unit-tested, not separately exercised in the browser in this record.
- Blocked-storage behaviour is unit-tested, not reproduced by changing browser privacy settings.
- Unknown-route handling, cross-tab cart synchronization and stock limits need additional browser checks.
- Checkout tests are not applicable to this Sprint 1 increment; checkout is not implemented.
- Students must repeat relevant tests and record their own actual results. Do not attribute this record to them.

The test cart was left empty and the demo account signed out. No real purchases or messages were made.

## Wearlane branding and photo update

Executed on 2 October 2026 30 tests passed (the original 27 plus local image availability and brand consistency checks), and the production build passed. The homepage model image and catalogue photography were inspected in the browser. The bomber product was added in size M and verified in the cart at EUR 68 with free demo delivery; the test item was removed afterwards. Homepage and populated cart at 360 x 800 had scroll width 345, less than viewport width 360. The browser-storage keys were retained to preserve previous demo data.

Jira project name, CC-2 summary/description and CC-3 description were updated to Wearlane and visibly verified. No work statuses, sprint membership, estimates or ownership were changed. Earlier B01 imagery observations describe the earlier illustration version; the current imagery is AI-generated photo-style content.
