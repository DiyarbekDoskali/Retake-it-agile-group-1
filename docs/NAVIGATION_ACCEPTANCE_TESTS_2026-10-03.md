# Wearlane — additional homepage and navigation checks

Date: 3 October 2026 (Europe/Berlin). Jira: CC-2 and CC-3.

Tested site: https://diyarbekdoskali.github.io/Retake-it-agile-group-1/

Executed by Codex browser automation at Amal's request. This is assistant-assisted test evidence, not a claim that another student personally ran these tests. Tested the live site in the Codex in-app browser, at its desktop size and an emulated 360 × 800 mobile viewport. No physical phone or screen reader was used. The live deployment's source revision was not independently verified during this run.

## Results

Eight checks passed; one additional Escape-key behaviour check did not meet the proposed expectation. These checks supplement, and do not replace, the earlier homepage/navigation report.

| ID | Action and expected result | Observed result | Outcome |
| --- | --- | --- | --- |
| N01 | Tab to header links; focus should be visible and Enter should navigate. | Logo and Shop essentials received visible orange focus outlines; Enter on Shop essentials opened the catalogue. | Pass |
| N02 | Activate Skip to content; move focus to main content without leaving the page. | Skip link became visible on keyboard focus; Enter focused `main` and preserved the homepage route. | Pass |
| N03 | Navigate Home to catalogue, Back, Forward and Reload; preserve correct destinations. | Back restored the homepage, Forward restored the catalogue, and Reload preserved the catalogue. | Pass |
| N04 | Open `#/qa-missing-page`; offer recovery to a working page. | Helpful missing-page heading appeared. Enter on Explore clothing opened the catalogue. | Pass |
| N05 | Add one Everyday heavyweight tee, size M; navigate Home then Cart and reload. | Item, size M and quantity 1 persisted. Item price €18.00, delivery €2.90 and total €20.90 remained correct. | Pass |
| N06 | Create a fictional local demo account; navigate and reload while signed in, then sign out. | Sign out remained available after navigation/reload. Signing out restored Sign in and retained the cart item. | Pass |
| N07 | At 360 × 800, Tab to the labelled menu toggle and use Enter/Space; open and close states should match. | Toggle had visible focus. Enter opened and closed it; Space reopened it. `aria-expanded` matched each state. | Pass |
| N08 | In the open mobile menu, Tab through Home to Shop essentials and activate it. | Catalogue opened; menu closed (`aria-expanded=false`); focus moved to `main`. | Pass |
| N09 | With mobile menu open and toggle focused, press Escape; proposed expectation: menu closes. | Menu remained open and `aria-expanded=true`. Enter still closed it, so keyboard users were not trapped. | Improvement identified |

## Finding: mobile menu Escape support

Reproduction: set a 360 × 800 viewport, focus Toggle navigation, press Enter, then Escape.

Expected enhancement: Escape closes the expanded navigation and leaves/returns focus on its toggle. Actual: navigation stays expanded. Record for CC-3 review; this finding alone is not a claim of a formal accessibility-standard violation. No source or production fix was made during this test-only run.

## Evidence and cleanup

- [Visible desktop keyboard focus](Wearlane_Keyboard_Focus.jpg)
- [Mobile menu still open after Escape](Wearlane_Mobile_Escape_Observation.jpg)
- [Earlier functional and responsive checks](HOMEPAGE_NAVIGATION_LIVE_TESTS.md)

Only fictional demo credentials were used. The test session was signed out and the single test cart item was removed using the UI, leaving the cart empty. The fictional account remains in this browser's local mock-account store; no real account or payment service was used. The temporary viewport override was reset.

## Completion boundary

This is targeted browser testing, not a full accessibility audit or certification of every acceptance criterion. It does not establish team agreement, individual student reviews, Confluence evidence, or presentation readiness. CC-2 and CC-3 should not be marked Done solely on this report. Review the finding and outstanding process evidence first.
