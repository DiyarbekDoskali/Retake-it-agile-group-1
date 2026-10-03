# Wearlane — Sprint 1 test-record index

Compiled 3 October 2026. This index organises existing execution records; it is not a new test run and does not attribute agent work to students. For full steps/results/evidence, follow the source report. Cases with missing metadata remain incomplete records until the executor supplies it. Publish/link this register in Confluence; a GitHub-only index is not Confluence publication.

## Existing records and traceability

| Record / cases | Jira | Executor/date as recorded | Environment / evidence | Result and limits |
| --- | --- | --- | --- | --- |
| [Initial browser cases B01–B18](TEST_RESULTS.md) | CC-2/3/4/5/6, mapped here by feature | Codex, 2 October | Windows/Node 24.19.0, production preview, Codex browser; steps/expected/actual in source | 18 recorded passes; not personal student execution. B01 predates photo update; later section records imagery recheck. |
| [Homepage/navigation report](HOMEPAGE_NAVIGATION_LIVE_TESTS.md) | CC-2/3 | See original executor/date declaration | Linked desktop/mobile evidence in source | Retain source scope; do not combine overlapping cases into a new pass count. |
| [Navigation acceptance checks](NAVIGATION_ACCEPTANCE_TESTS_2026-10-03.md) | CC-3 | See source | Keyboard screenshots and mobile Escape observation | Original Escape finding subsequently fixed; responsive browser retest remains pending. |
| [Catalogue CAT-01–CAT-25](catalogue-test-results.md) | CC-5 | Diyarbek's uploaded report, dated 2 October; personal desktop verification still pending in report | Desktop Chrome; mobile screenshot review; companion PDF | Report records 25 passes. Verify actual executor where not explicit; screenshot review is not direct phone execution. |
| [Cart CART-01–CART-13](Cart%20Quantities%2C%20Sizes%20and%20Totals%20Test%20Results.md) | CC-6 | Desktop Codex; supplied phone screenshots; 2 October | Desktop 1363x936 and reported iPhone 16 Pro Max/Safari evidence | 13 listed passes in report. Personal verification Done is contributor's statement; report explicitly says no code changes. |
| [Account scenarios](REGISTRATION_LOGIN_TESTS_.md) | CC-4/8 | Xiaoshan, 2 October | PC Chrome, five uploaded screenshots | Submitted Pass for valid/duplicate registration, login errors and logout. Report has no stable per-case IDs; add them on the next personal execution rather than inventing old execution data. |
| [QA-01–QA-06 review](SPRINT_1_READINESS_REVIEW.md) | CC-3/4/6 and shared quality | Codex, 3 October | Local production preview; invalid-registration screenshot; cart screenshot review | QA-01–05 Pass within stated scope; QA-06 Blocked due to viewport tooling. QA-01 is one suite execution of 33 tests, not 33 browser checks. |
| [Stanley's original ODT](Basic%20checkout%20functionality.odt) | CC-7 | Text names Stanley, 2 October | Two embedded product/cart images reviewed on 3 October | Full checkout/34-test claims not verified. Treat images only as product/cart evidence. Full checkout testing is future Sprint 2 work. |

## Ten-case minimum: existing detailed cases, not new results

The following twelve already-executed cases are directly traceable to [TEST_RESULTS.md](TEST_RESULTS.md). Executor/date for all: Codex, 2 October 2026. Environment: Windows production preview, Codex in-app browser. These are agent checks, not each student's own tests. Exact source commit at execution was not recorded; preserve that limitation rather than guessing.

| ID / Jira | Preconditions and steps | Expected | Recorded actual/result | Evidence / bug |
| --- | --- | --- | --- | --- |
| B02 / CC-5 | Empty cart; open tee and add without selecting size | Reject missing size | Size error; cart unchanged — Pass | Source B02; no bug recorded |
| B03 / CC-5/6 | Tee details; add size M and L | Separate variants | M x1, L x1; EUR 36 free delivery — Pass | Source B03; no bug recorded |
| B04 / CC-6 | B03 cart; increase M then refresh | Quantity persists | M x2, L x1; EUR 54 — Pass | Source B04; no bug recorded |
| B05 / CC-6 | B04 cart; remove M | Keep only L, correct totals | EUR 18 + 2.90 = 20.90 — Pass | Source B05; no bug recorded |
| B06 / CC-6 | Remove remaining L | Useful empty state | Empty-cart message and browse link — Pass | Source B06; no bug recorded |
| B07 / CC-4/8 | Signed out; submit blank registration | Field validation | Name/email/password errors — Pass | Source B07; no bug recorded |
| B08 / CC-4/8 | Fictional new account and matching passwords | Register and sign in | Catalogue, Sign out and success notice — Pass | Source B08; no bug recorded |
| B09 / CC-4/8 | Sign out then submit wrong password | Reject credentials | Signed out; incorrect-credentials error — Pass | Source B09; no bug recorded |
| B10 / CC-4/8 | Existing fictional account; correct password then refresh | Session remains in tab | Sign out control persisted; tester signed out — Pass | Source B10; no bug recorded |
| B11 / CC-5 | Catalogue; Hoodies plus search studio | One match | Studio cropped hoodie only, sold out — Pass | Source B11; no bug recorded |
| B12 / CC-5 | Open sold-out hoodie | Prevent purchase | Stock message; disabled button — Pass | Source B12; no bug recorded |
| B15 / CC-3 | Mobile layout; expand menu and select catalogue | Navigate and close menu | Links exposed; menu closed after navigation — Pass | Source B15; no bug recorded |

## Defects, retests and next-sprint coverage

- Escape menu behaviour: tracked in CC-3 evidence. Assisted source fix and three unit regression tests published; full responsive browser retest pending. This is not marked verified Done by this register.
- Broken report image links and cart case-count error: corrected in documentation commit `9070c3e`; these were evidence defects, not newly executed feature tests.
- Full checkout validation, guest-order prevention, simulated payment, confirmation and integrated order journey are Sprint 2/final coverage. Not executed in current Sprint 1 implementation; do not mark Pass or represent the planned absence as an unexpected defect.
- Existing reports may not record exact browser version/source commit or unique image per case. Executors should add known facts or rerun; never fabricate historical metadata.

For each new execution capture: ID; Jira feature; source commit/URL; preconditions; steps; expected/actual; Pass/Fail (or Not run/Blocked); tester; actual date/time; device/browser; evidence; bug/retest link where applicable. A reviewer records acceptance separately.
