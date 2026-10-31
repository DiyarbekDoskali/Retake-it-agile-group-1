# WEARLANE — Group 1

IT Agile Development clothing-store prototype. The **Sprint 3** version retains the integrated demo shopping flow and improves singular/plural counts in the catalogue, cart and checkout. It includes desktop/mobile-width verification and a separate cross-tab logout retest. There are no real payments.

## Professor and team links

| Resource | Link |
| --- | --- |
| Published website | [Open Wearlane](https://diyarbekdoskali.github.io/Retake-it-agile-group-1/) |
| Shared source repository | [GitHub — Group 1](https://github.com/DiyarbekDoskali/Retake-it-agile-group-1) |
| Jira board | [Group 1 backlog and sprints](https://ue-germany-team-st01y82u.atlassian.net/jira/software/projects/CC/boards/35/backlog) |
| Existing documentation hub | [Confluence — Sprint 1 documentation and evidence](https://ue-germany-team-st01y82u.atlassian.net/wiki/spaces/E/pages/34766850/Wearlane+-+Sprint+1+documentation+and+evidence) |
| Sprint 2 implementation and limits | [Implementation notes](docs/SPRINT_2_IMPLEMENTATION.md) |
| Sprint 2 verification | [Test report](docs/SPRINT_2_TEST_RESULTS.md) |
| Sprint 2 team actions | [Review and presentation handover](docs/SPRINT_2_TEAM_HANDOVER.md) |
| Sprint 3 shopping flow | [Desktop and mobile-width checks, 31 October](docs/SPRINT_3_SHOPPING_FLOW.md) |
| Sprint 3 account retest | [Cross-tab logout and checkout, 30 October](docs/SPRINT_3_SESSION_RETEST.md) |

**Historical release — 15 October 2026:** Sprint 2 was published and verified. [Pull request #1](https://github.com/DiyarbekDoskali/Retake-it-agile-group-1/pull/1) was merged as `4ec7fd6ae3b68e8ebf5cbbf98f68d397f1744ac8`. The [GitHub Pages build and deployment succeeded](https://github.com/DiyarbekDoskali/Retake-it-agile-group-1/actions/runs/38797147327). All 77 Node tests passed before publication, and all 18 isolated browser scenarios passed against the published website. See [live verification and evidence](docs/sprint-2-live-evidence/release-verification.md). Jira/Confluence updates, personal contribution records, Product Owner acceptance and the five-member recording remain separate; publication does not establish that these activities occurred.

The professor may need permission to access Jira and Confluence. The team must verify access with the professor's actual account; a link alone does not grant permission. The recording/submission link is not available in this package.

## Sprint 3 review status

Sprint 3 tasks are assigned in Jira: [Amal — CC-14](https://ue-germany-team-st01y82u.atlassian.net/browse/CC-14), [Xiaoshan — CC-15](https://ue-germany-team-st01y82u.atlassian.net/browse/CC-15), [Diyarbek — CC-16](https://ue-germany-team-st01y82u.atlassian.net/browse/CC-16), [Lourdes — CC-17](https://ue-germany-team-st01y82u.atlassian.net/browse/CC-17), and [Stanley — CC-18](https://ue-germany-team-st01y82u.atlassian.net/browse/CC-18). Each task lists acceptance checks and evidence requirements. Assignment and publication do not establish personal contribution or Product Owner acceptance.

The 31 October local verification passed 77 automated tests and recorded 23 desktop/mobile-width browser checkpoints. The updated browser-test locator was syntax-checked; the complete browser automation script was not rerun. The earlier reported session failure was not reproduced in the separate 30 October retest; its original report remains intact for reconciliation. Final individual reviews, recording and submission remain separate. Check [GitHub Actions](https://github.com/DiyarbekDoskali/Retake-it-agile-group-1/actions) for the deployment status of the commit being reviewed.

## Run the project

Use Node.js 22.12 or later and pnpm. Open a terminal in this project folder. To obtain the shared version, clone the GitHub repository and use the main branch for the latest merged source. Confirm its publication in the repository Actions tab before sharing the live site.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Open the address printed in the terminal. A localhost address works only on your computer; share the published website after its deployment has been verified.

```sh
pnpm test
pnpm build
pnpm preview --port 5175 --strictPort
```

For browser checks, keep the preview running. In a second terminal:

```sh
pnpm exec playwright install chromium
pnpm test:browser
```

The browser checks use `http://127.0.0.1:5175` by default, isolated browser data and fictional accounts. Set `PREVIEW_URL` to test a different preview. They replace only generated evidence in `docs/sprint-2-evidence/`. Do not run them against a real shop or a production payment system.

If pnpm's sandbox/store policy prevents running scripts in this particular workspace, the successfully tested direct commands are:

```sh
node --test tests/*.test.js
node node_modules/vite/bin/vite.js build --configLoader native
node node_modules/vite/bin/vite.js preview --configLoader native --host 127.0.0.1 --port 5175 --strictPort
node tests/browser/sprint2.mjs
```

## Demo walkthrough

1. Open Shop essentials, choose an available product and size, and add it to the cart.
2. Select Continue to checkout. Sign in or register using a fictional email and a test-only password.
3. Enter fictional details, for example Demo Student, Example Street 12, Berlin, 10115, Germany. Confirm the demo checkbox.
4. Select Review demo order. Check the items, sizes, quantity and delivery total.
5. Try the declined-payment option: no order is created and the cart remains.
6. Choose the successful-payment option. The saved confirmation displays a reference and summary; the cart clears after saving.
7. Refresh the confirmation. It displays the same saved order, not a new payment.

## Important limits

- Educational frontend only: no backend, real payment, shipping or email delivery.
- Accounts, session, cart and orders are saved in this browser's local storage. They do not transfer between devices. Use fictional details only.
- The shared Sprint 2 session supports sign-out across tabs. Existing Sprint 1 accounts and cart remain compatible, but users must sign in again after the update.
- Browser-local sign-in and ownership checks are not production security. A person with access to the browser can inspect or alter local data.
- Existing Sprint 1 documents remain historical records. Use the Sprint 2 implementation notes for the underlying checkout and the Sprint 3 reports for the new checks. Historical screenshots retain the release labels visible when captured.
- Clothing imagery is AI-generated demo content; see [image information](docs/IMAGE_ASSETS.md).

The deployment workflow tests and builds for the repository's GitHub Pages address. Do not upload credentials, real customer information or `node_modules`.
