# Wearlane Sprint 2 — published verification

Verified 15 October 2026. This report records release checks, not personal teammate reviews or academic acceptance.

- Website: https://diyarbekdoskali.github.io/Retake-it-agile-group-1/
- Merged release: https://github.com/DiyarbekDoskali/Retake-it-agile-group-1/pull/1
- Application commit: `4ec7fd6ae3b68e8ebf5cbbf98f68d397f1744ac8`.
- Successful build and deployment: https://github.com/DiyarbekDoskali/Retake-it-agile-group-1/actions/runs/38797147327
- Baseline preserved: `6ff5e11eda5111963b47f1e7b755689d2d3e1753`. All 24 uploaded changed files matched the verified local version byte for byte before merging.

## Actual checks

The 77 Node tests passed again before publication. The build succeeded for the repository URL base. GitHub subsequently reported both build and deploy jobs successful.

After deployment, the existing browser suite was run against the **public website**, not localhost, using a fresh isolated Chromium context, fictional accounts/addresses and no real payment. **All 18 scenarios passed.** This did not alter the user's personal browser data or create backend accounts/orders: Wearlane remains a browser-local demo.

The run covered guest access, registration/login return, required delivery errors, totals, declined/successful simulated payment, repeated clicks, saved confirmation refresh, empty cart, ownership checks, cross-tab cart/session changes, mobile layout/menu Escape, catalogue regression and an injected order-storage failure with retry. No uncaught application error was observed in the main test page.

The exact run time, public target URL, browser version, viewport sizes, source fingerprints and per-scenario results are recorded in [browser-results.json](browser-results.json). Source was read from a clean clone of the merged application commit; the application was served by GitHub Pages.

- [Live desktop review screenshot](desktop-review.png)
- [Live mobile confirmation screenshot](mobile-confirmation.png)

## Scope and follow-up

The screenshots and results here are automated release evidence, not evidence that each team member personally tested the project. Original local test evidence remains in `docs/sprint-2-evidence/`.



