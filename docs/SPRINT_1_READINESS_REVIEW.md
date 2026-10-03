# Wearlane — Sprint 1 readiness review

Review date: 3 October 2026. Baseline: shared main `04dfffc87fb036bc169b30357457a979134b2198`.

Scope correction, 3 October: full checkout/payment/confirmation are planned for Sprint 2, as clarified by Amal. They are not automatically Sprint 1 blockers. The unresolved Sprint 1 question is each member's actual implemented contribution, including the baseline to be agreed under CC-7. The earlier recommendation to integrate the full checkout before Sprint 1 was too broad and is superseded here.

Documentation hub: [project and process records](SPRINT_1_PROJECT_DOCUMENTATION.md), [contribution evidence](SPRINT_1_CONTRIBUTION_EVIDENCE.md), [technical setup](TECHNICAL_SETUP.md), [test-record index](SPRINT_1_TEST_REGISTER.md). These documents distinguish observed facts, submitted claims and proposed working agreements; they are not fabricated meeting minutes or PO approval.

Publication update: a [Wearlane Confluence hub](https://ue-germany-team-st01y82u.atlassian.net/wiki/spaces/E/pages/34766850/Wearlane+-+Sprint+1+documentation+and+evidence) is now published in ecsz, the space linked by Jira's Docs tab. The earlier space-name search did not establish this connection. Existing draft content was preserved. Actual discussion sources, individual confirmations and PO/review/retro decisions remain pending.

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
| Stanley/Chidi — CC-7 | [Checkout review](CHECKOUT_INTEGRATION_REVIEW.md) | ODT uploaded; its two images show product/cart, not checkout. Full checkout is Sprint 2. Actual Sprint 1 baseline/contribution evidence still needs confirmation. |

Earlier Jira check: CC-4 and its account-testing subtask CC-8 were In Progress; CC-8 contained Xiaoshan's record and five attachments. Diyarbek's CC-5 comment contained a placeholder outcome needing owner confirmation. Follow-up check on 3 October: CC-1, CC-4, CC-5, CC-6 and CC-7 are visible as In Progress in Sprint 1. CC-7 is no longer To Do. The sprint still offers Add dates and Start sprint; 0 estimate points are displayed. These checks do not change task states or prove acceptance. GitHub showed main `9070c3e`, no README and zero version tags before this documentation update.

## Before recording / submission

- Confirm Stanley's actual Sprint 1 baseline and technical contribution with source/evidence links. Full checkout remains Sprint 2. Every student's Sprint 1 segment must demonstrate meaningful implemented progress, not just a plan or tests of another person's code.
- PO/team records actual scope, Product Goal, priorities and acceptance/remaining gaps. No approval is inferred from this document.
- Use actual sprint dates/goals, capacity, estimates and selected work. Do not backdate Jira events or reconstruct fictitious history.
- Reports, team/module mapping, proposed DoR/DoD, technical setup and risks are now linked/summarised in Confluence. Still add actual planning/check-ins/refinement/review/retrospective notes, team adoption/PO decisions, and each member's own work confirmation. Proposals are not historical process evidence.
- The assignment requires a README with setup instructions or a Confluence link. Amal explicitly requested on 3 October that it remain deleted for now. It has not been restored; the requirement remains unmet even though a separate technical setup guide now exists.
- Create a Sprint 1 version tag on the final reviewed shared commit, identifying only the actual increment and known limitations; a tag does not imply all final-project features are complete.
- Record all five members personally presenting with webcams on for their segments. Keep the video within 30 minutes. Submit through the lecturer's actual channel by 3 October; exact time/channel is not verified here.

## Proposed recording order (not a claim a recording exists)

1. Amal: actual Sprint Goal, planned/completed/unfinished work, homepage/navigation and Scrum coordination evidence.
2. Xiaoshan: Product Goal/priorities, actual acceptance decision, accounts implementation and tests.
3. Diyarbek: catalogue/search/filter/detail contribution, tests and GitHub/Jira evidence.
4. Lourdes: cart/size/quantity/totals contribution, calculation example and tests.
5. Stanley: actual agreed Sprint 1 contribution and its evidence, plus checkout work planned for Sprint 2. Do not demonstrate unavailable functionality as completed.
6. Team: actual review findings, retrospective actions with owners, Sprint 2 changes and risks.

Suggested allocation: about 4 minutes per member plus 4 minutes shared wrap-up, leaving buffer below 30 minutes. This review is not a guarantee of assessment success.
