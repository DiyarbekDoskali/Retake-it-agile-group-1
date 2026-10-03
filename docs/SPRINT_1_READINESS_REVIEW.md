# Wearlane — Sprint 1 readiness review

Review date: 3 October 2026. Reviewer: Codex assisting Amal. Baseline: shared main `04dfffc87fb036bc169b30357457a979134b2198`.

This is a current review, not retrospective meeting minutes or approval by the Product Owner. It supersedes the older handover's statements that the app was only local and had not been pushed. The shared repository and GitHub Pages site now exist.

## Corrections made

- Repaired eleven broken screenshot links across the older cart and accounts reports, including `Refresh` versus `Refreshing`.
- Linked six existing screenshots from the newer cart report and corrected its summary to 13 listed cases (CART-01–13). No new personal execution was invented.
- Linked catalogue and cart reports to their Jira tasks and retained historical records.
- Added the checkout integration review, preserving the original ODT document.
- Added Escape-to-close handling for the expanded navigation, restoring toggle focus and removing the handler when closed.

## Verification in this review

| ID | Preconditions / steps | Expected | Actual | Result / evidence |
| --- | --- | --- | --- | --- |
| QA-01 | Current source; run `node --test tests/*.test.js`. | All tests pass. | 33 passed, 0 failed: 30 original plus 3 new keyboard-handler regression tests. | Pass; test source is in `tests/navigation.test.js`. |
| QA-02 | Install locked dependencies, run `pnpm run build`. | Production build succeeds. | Vite production bundle built successfully. | Pass. |
| QA-03 | Local production preview, signed out, empty registration form; submit. | Reject blank required fields without creating an account. | Name, email and password validation messages displayed; remained on registration. | Pass; [screenshot](Registration_Invalid_Input_Retest.jpg). |
| QA-04 | Same preview; enter name QA Demo, malformed email, short password and mismatched confirmation; submit. | Reject invalid email, short password and mismatch. | All three errors displayed; remained on registration. | Pass; Codex browser execution, 3 October. |
| QA-05 | Review existing cart-total screenshot. | Displayed amounts agree. | €20 + €62 + €38 = €120; delivery free above €35; total €120. | Pass, screenshot review only; [evidence](Wearlane_QA_Cart_Total.jpg.png). |
| QA-06 | Attempt 360 × 800 browser retest of the menu fix. | Mobile viewport applies, then Escape closes menu and restores focus. | Browser viewport tool did not change the actual 1280 × 720 viewport. | Browser retest blocked; not counted as Pass. Automated handler tests pass, but a real mobile-size retest remains required. |

The tested preview was `http://127.0.0.1:5174/`, using a fresh production build. This address is local, not a shareable team website. Invalid-input checks did not create an account. The temporary viewport override was reset. The development-server dependency optimizer encountered a local filesystem access error; production build/preview worked, so no production defect is inferred from that tooling error.

## Evidence index

| Owner / Jira | Evidence | Review boundary |
| --- | --- | --- |
| Amal — CC-1/2/3 | [Homepage](HOMEPAGE_NAVIGATION_LIVE_TESTS.md), [navigation](NAVIGATION_ACCEPTANCE_TESTS_2026-10-03.md), this retest | Test assistance does not establish all Scrum records or personal demonstration readiness. |
| Xiaoshan — CC-4/8 | [Accounts](REGISTRATION_LOGIN_TESTS_.md), five screenshots and CC-8 | Account work is now present. PO priorities, acceptance decision and technical contribution still need their own evidence. |
| Diyarbek — CC-5 | [Catalogue](catalogue-test-results.md), [PDF](Wearlane_Catalogue_Test_Results.pdf) | Report records 25 passed cases. Its personal verification/reviewer/demo pending entries require owner follow-up. |
| Lourdes — CC-6 | [Expanded cart report](Cart%20Quantities%2C%20Sizes%20and%20Totals%20Test%20Results.md) | Records 13 passing cases; personal verification Done is preserved as the contributor's statement. Reviewer/demo entries still pending. |
| Stanley/Chidi — CC-7 | [Checkout review](CHECKOUT_INTEGRATION_REVIEW.md) | Actual checkout source/tests are missing from shared main. Integration must happen before claiming a working checkout. |

Latest Jira check: CC-4 and its new account-testing subtask CC-8 are In Progress. CC-8 has Xiaoshan's test description, report link and five attachments. CC-5 is In Progress and Diyarbek has posted his own test summary/report link; the comment still contains the placeholder “Pass/Fail based on your checks,” which he should replace with his actual result. CC-6 is In Progress and CC-7 is To Do. Existing statuses and teammate-authored comments are preserved by this review.

## Before recording / submission

- Obtain and integrate Stanley's missing checkout code; otherwise show the unfinished state honestly. Every student's Sprint 1 segment must demonstrate meaningful implemented progress, not just a plan or tests of another person's code.
- PO/team records actual scope, Product Goal, priorities and acceptance/remaining gaps. No approval is inferred from this document.
- Use actual sprint dates/goals, capacity, estimates and selected work. Do not backdate Jira events or reconstruct fictitious history.
- Link the reports in Confluence. Required records also include team/module ownership, DoR/DoD, technical setup, actual planning/check-ins/refinement/review/retrospective notes and a risk register. Each member documents their own work.
- The assignment requires a README with setup instructions or a Confluence link; it is currently absent after the requested deletion. Restoration needs the user's resolution of that earlier instruction.
- Create a Sprint 1 version tag on the final reviewed shared commit; do not tag an unverified checkout integration as accepted.
- Record all five members personally presenting with webcams on for their segments. Keep the video within 30 minutes. Submit through the lecturer's actual channel by 3 October; exact time/channel is not verified here.

## Proposed recording order (not a claim a recording exists)

1. Amal: actual Sprint Goal, planned/completed/unfinished work, homepage/navigation and Scrum coordination evidence.
2. Xiaoshan: Product Goal/priorities, actual acceptance decision, accounts implementation and tests.
3. Diyarbek: catalogue/search/filter/detail contribution, tests and GitHub/Jira evidence.
4. Lourdes: cart/size/quantity/totals contribution, calculation example and tests.
5. Stanley: actual integrated checkout progress, tests and remaining gaps.
6. Team: actual review findings, retrospective actions with owners, Sprint 2 changes and risks.

Suggested allocation: about 4 minutes per member plus 4 minutes shared wrap-up, leaving buffer below 30 minutes. This review is not a guarantee of assessment success.
