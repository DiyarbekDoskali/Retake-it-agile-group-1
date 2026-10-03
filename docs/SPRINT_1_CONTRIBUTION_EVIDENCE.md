# Wearlane — Sprint 1 contribution evidence

Compiled 3 October 2026. This is a traceability index, not a declaration of equal contributions, personal authorship of all code, or assessment acceptance. Original contributor reports remain intact.

## Evidence rules

- Assigned ownership describes responsibility, not proof of implementation.
- A GitHub document commit proves the account uploaded/edited that document, not that it authored the feature or personally ran every test.
- Submitted test claims, screenshot review and agent-executed checks are labelled separately.
- Each person must explain their own contribution, assistance received, implementation, integration and tests. Their confirmation cannot be supplied by another member.

## People, modules and evidence

| Member / role | Responsibility and Jira | Traceable work already present | Evidence boundary / next confirmation |
| --- | --- | --- | --- |
| Amal Ashok — Scrum Master; GitHub `Devildon625` | Storefront/navigation; [CC-1](https://ue-germany-team-st01y82u.atlassian.net/browse/CC-1), [CC-2](https://ue-germany-team-st01y82u.atlassian.net/browse/CC-2), [CC-3](https://ue-germany-team-st01y82u.atlassian.net/browse/CC-3) | Shared source upload [3b7ffb3](https://github.com/DiyarbekDoskali/Retake-it-agile-group-1/commit/3b7ffb3); navigation evidence [7c99f10](https://github.com/DiyarbekDoskali/Retake-it-agile-group-1/commit/7c99f10); assisted Escape fix [bd1bafc](https://github.com/DiyarbekDoskali/Retake-it-agile-group-1/commit/bd1bafcd05c2899b7d4cfffcd8d51376564ab340) and tests [d06a674](https://github.com/DiyarbekDoskali/Retake-it-agile-group-1/commit/d06a6748229aae58f7b33f5d805fbf4c46f0a9a3) |  attribution. CC-1 records group/Jira coordination, but actual discussion dates, participant responses, decisions and acceptance still need source evidence. |
| Xiaoshan Zhou — Product Owner; GitHub `XiaoshanZhou718` | Accounts and PO priorities/acceptance; [CC-4](https://ue-germany-team-st01y82u.atlassian.net/browse/CC-4), [CC-8](https://ue-germany-team-st01y82u.atlassian.net/browse/CC-8) | [Account report](REGISTRATION_LOGIN_TESTS_.md), five screenshots; report revision [04dfffc](https://github.com/DiyarbekDoskali/Retake-it-agile-group-1/commit/04dfffc87fb036bc169b30357457a979134b2198), image upload [4c7f8ea](https://github.com/DiyarbekDoskali/Retake-it-agile-group-1/commit/4c7f8ea) | Report identifies Xiaoshan as tester on 2 October. These are documentation/testing commits; they do not establish account-code authorship. Record actual technical contribution and PO decisions separately. |
| Diyarbek Doskali — GitHub `DiyarbekDoskali` | Catalogue/search/details; [CC-5](https://ue-germany-team-st01y82u.atlassian.net/browse/CC-5) | [Catalogue report](catalogue-test-results.md), [PDF evidence](Wearlane_Catalogue_Test_Results.pdf); report commit [a26f623](https://github.com/DiyarbekDoskali/Retake-it-agile-group-1/commit/a26f623), PDF update [ca9f847](https://github.com/DiyarbekDoskali/Retake-it-agile-group-1/commit/ca9f847) | Report records 25 passing cases, including screenshot-reviewed mobile results. Personal desktop verification/review/demo are still labelled pending in the report. Reconcile these with the Jira self-report and identify actual source changes. |
| Lourdes Bibang — GitHub `l3874` | Cart; [CC-6](https://ue-germany-team-st01y82u.atlassian.net/browse/CC-6) | [Cart report](Cart%20Quantities%2C%20Sizes%20and%20Totals%20Test%20Results.md), six images; report [7eb9ae7](https://github.com/DiyarbekDoskali/Retake-it-agile-group-1/commit/7eb9ae7), personal verification update [9aa96be](https://github.com/DiyarbekDoskali/Retake-it-agile-group-1/commit/9aa96be) | Report explicitly attributes desktop checks to Codex and phone evidence to supplied screenshots; it says no code changes. Its personal verification Done is Lourdes's submitted statement, not independent certification. Technical implementation contribution and review remain to be evidenced. |
| Stanley / Chidi Ohakaba — GitHub `Sanestan` | Checkout/orders; [CC-7](https://ue-germany-team-st01y82u.atlassian.net/browse/CC-7) | [Original ODT](Basic%20checkout%20functionality.odt) uploaded in [8148c8d](https://github.com/DiyarbekDoskali/Retake-it-agile-group-1/commit/8148c8d) | Two embedded images show product/size/cart only. Textual checkout and 34-test claims are not verified by those images or reviewed main. Full checkout is Sprint 2; confirm the agreed Sprint 1 baseline and actual implemented progress. [Review](CHECKOUT_INTEGRATION_REVIEW.md). |

Names/account mapping follow the user's group information and visible repository records; Stanley and Chidi were confirmed by Amal to be the same person. No private email addresses are reproduced.

## Shared implementation and verification

The reviewed source baseline was uploaded under Amal's account with explicit AI-assistance wording. Do not reattribute its modules to other uploaders simply because they later added reports. This does not rule out work on another branch/computer; such work needs a source link and integration record.

The latest reviewed source includes homepage/navigation, catalogue/search/details, cart and browser-local accounts. Full checkout is not implemented. See [technical setup](TECHNICAL_SETUP.md).

The [readiness review](SPRINT_1_READINESS_REVIEW.md) records 33 automated tests and a successful production build performed by Codex on 3 October. [Deployment run 33](https://github.com/DiyarbekDoskali/Retake-it-agile-group-1/actions/runs/37114199535) succeeded for `9070c3e`. These shared checks are not five separate students' personal tests.

## Individual confirmation to add after reviewing

Each member should supply a short record with:

1. Their name, date and Jira issue.
2. Specific implemented change, source commit/branch and assistance received; or an explicit statement that implementation is still pending.
3. Integration/dependency work and reviewer feedback.
4. Tests they personally executed: IDs, version/URL, device/browser, actual outcomes and evidence.
5. Defects/remaining work and what they can demonstrate.
6. Their own Confluence page or section link.

No member confirmation is prefilled here. Do not rewrite commit authors, invent activity or backdate records to fill these gaps.
