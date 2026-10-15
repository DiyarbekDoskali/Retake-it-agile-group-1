# Wearlane — Sprint 2 verification

Date: 15 October 2026. Execution: automated checks in the development workspace, with visual inspection of generated screenshots. These are not teammates' personal test records or Product Owner acceptance.

## Tested version and environment

- Baseline: `6ff5e11eda5111963b47f1e7b755689d2d3e1753`, plus the local Sprint 2 working changes.
- Source fingerprints, actual browser version and final execution time: [machine-readable browser results](sprint-2-evidence/browser-results.json).
- Production previews: `http://127.0.0.1:5175/` and a second build using the actual repository URL path at `http://127.0.0.1:5176/Retake-it-agile-group-1/`. These are local previews, not the deployed GitHub Pages website.
- Chromium headless; desktop 1440 × 1000 and mobile-sized viewport 360 × 800. Mobile viewport testing is not a physical-phone test.
- Fictional accounts and addresses in an isolated browser context; no real payment or personal browser data used.

## Results

| Check | Observed result |
| --- | --- |
| Node logic/regression suite | 77 passed, 0 failed: 33 existing checks and 44 new checkout checks |
| Browser scenarios | 18 passed, 0 failed; see results JSON for each scenario and execution time |
| Production build | Successful for both the default local base and `/Retake-it-agile-group-1/` Pages base |
| Desktop/mobile screenshots | Inspected: form, review, confirmation and narrow layout remain readable |
| Live release, professor permissions, personal team reviews | Not verified by this local run |

The unit suite covers valid/invalid carts, selected sizes, trusted catalogue prices, shared totals and shipping boundaries, delivery validation, session changes, safe return routes, payment decline, save failures, retries, reference collisions and confirmation ownership. Raw output is saved in [unit test results](sprint-2-evidence/unit-tests.tap).

## Browser scenarios

| ID | Expected and observed successful behaviour |
| --- | --- |
| B01 | Direct guest checkout requires sign-in |
| B02 | Register from the cart and return to checkout with the selected size intact |
| B03 | Blank delivery fields show errors and move focus to the error summary |
| B04 | Review shows entered details and EUR 20.90 for one EUR 18 tee plus delivery |
| B05 | Simulated decline keeps the cart and saves no order |
| B06 | Successful submission and repeat click save one order and clear the cart |
| B07 | Confirmation refresh shows the same order without creating another |
| B08 | Empty-cart checkout is blocked |
| B09 | Sign-out blocks a confirmation; correct login returns to that confirmation |
| B10 | Mobile menu Escape closes the menu and restores focus to its toggle |
| B11 | Checkout review fits the mobile viewport without horizontal overflow |
| B12 | Another tab's quantity change blocks submission of the old review |
| B13 | Sign-out in another tab removes checkout access |
| B14 | A different demo account cannot view the earlier confirmation |
| B15 | Hoodie filtering and the sold-out product remain correct |
| B16 | No uncaught application error was observed in the main test page |
| B17 | Injected order-storage failure keeps the cart; restoring storage allows retry |
| B18 | Clearing browser data in another tab updates the visible cart and session |

## Selected screenshots

- [Desktop delivery form](sprint-2-evidence/desktop-delivery.png)
- [Invalid delivery errors](sprint-2-evidence/delivery-errors.png)
- [Desktop order review](sprint-2-evidence/desktop-review.png)
- [Declined payment](sprint-2-evidence/payment-declined.png)
- [Saved confirmation](sprint-2-evidence/confirmation.png)
- [Mobile checkout review](sprint-2-evidence/mobile-checkout.png)
- [Order-storage failure](sprint-2-evidence/storage-failure.png)
- [Mobile confirmation](sprint-2-evidence/mobile-confirmation.png)
- [Mobile homepage after Escape retest](sprint-2-evidence/mobile-home-menu-retest.png)

## Corrections made during verification

Delivery-field labels initially included inline error text in their accessible names. Explicit label references now keep the names stable while errors remain described. The same label pattern is used for account fields. Clearing storage in another tab now updates cart state as well as session state. Order warnings are tied to the affected order reference. Checkout reuses the existing cart-total helper to prevent calculation drift.

An initial sold-out-button selector was too exact because the button includes an arrow; the test selector was corrected. That was a test locator issue, not a sold-out purchasing defect.

## Reproduce and remaining checks

Use the commands in the root README. Browser tests need a running production preview and the pinned Playwright dependency/browser. This workspace used direct Node/Vite commands because pnpm's default script execution attempted a sandbox-restricted store relink. Locked dependency installation and the direct test/build commands succeeded.

Still needed: team-member execution records, a real-phone check if available, cross-browser testing beyond Chromium, Product Owner review, and a smoke test of the published Sprint 2 URL. Automated results do not establish that all accessibility requirements or every possible storage/concurrency failure have been covered.
