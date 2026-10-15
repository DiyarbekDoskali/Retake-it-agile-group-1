# WEARLANE — Group 1

IT Agile Development clothing-store prototype. Sprint 2 adds a complete **demo** checkout: sign in, enter fictional delivery details, review the order, choose a simulated payment result and view the saved confirmation.

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

**Release candidate, 15 October 2026:** Sprint 2 was prepared and locally tested on top of shared commit `6ff5e11eda5111963b47f1e7b755689d2d3e1753`. Publication has been requested. Check the repository's Actions result before treating the website as the Sprint 2 release; deployment and live verification are pending in this candidate. Jira and Confluence were not changed by this implementation. This status will be updated after the actual release is verified.

The professor may need permission to access Jira and Confluence. The team must verify access with the professor's actual account; a link alone does not grant permission. The recording/submission link is not available in this package.

## Run the project

Use Node.js 22.12 or later and pnpm. Open a terminal in this project folder. To obtain the shared version, clone the GitHub repository and select the published Sprint 2 commit or branch.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Open the address printed in the terminal. A localhost address works only on your computer; share the published website after its Sprint 2 deployment has been verified.

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
- Existing Sprint 1 documents remain historical records. Use the Sprint 2 notes for the current local implementation.
- Clothing imagery is AI-generated demo content; see [image information](docs/IMAGE_ASSETS.md).

The deployment workflow tests and builds for the repository's GitHub Pages address. Do not upload credentials, real customer information or `node_modules`.
