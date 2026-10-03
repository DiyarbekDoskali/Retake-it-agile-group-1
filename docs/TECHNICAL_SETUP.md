# Wearlane — technical design and setup

Recorded 3 October 2026 from the shared project. This is a technical guide, not a claim of prior team agreement. The README remains deleted at Amal's explicit request; this guide does not remove the assignment's separate README requirement.

## Links and current scope

- [Live website](https://diyarbekdoskali.github.io/Retake-it-agile-group-1/)
- [Shared repository](https://github.com/DiyarbekDoskali/Retake-it-agile-group-1)
- [Jira board](https://ue-germany-team-st01y82u.atlassian.net/jira/software/projects/CC/boards/35/backlog)
- Confluence destination: not yet confirmed.

Sprint 1 has clothing storefront/navigation, catalogue/search/filter/sort/details, size-aware cart and registration/login/logout. Checkout, simulated payment and order confirmation are planned for Sprint 2. This is an educational prototype, not a production shop.

## Technologies and structure

React renders the interface; Vite builds the static application; pnpm uses the committed lockfile. The project uses mock product data, browser storage and hash-based navigation. GitHub Actions builds/tests and publishes to GitHub Pages. This describes the implemented choice; the team's original selection discussion is not available yet.

| Location | Responsibility |
| --- | --- |
| `src/main.jsx` | App state, routes, storefront, catalogue, cart and account screens |
| `src/ProductDetail.jsx` | Product details, size selection and add-to-cart interaction |
| `src/products.js` | Mock product data and product lookup |
| `src/domain.js` | Filtering, cart validation/totals, account validation and storage/hash helpers |
| `src/navigation.js` | Escape-key navigation close handler |
| `src/style.css` | Shared styling and responsive layout |
| `src/ClothingArt.jsx`, `public/images/` | Clothing imagery/component and local assets |
| `tests/` | Node test-runner logic/regression checks |
| `.github/workflows/deploy-pages.yml` | Automated test/build and Pages deployment |
| `docs/` | Reports, evidence, contribution index and process documentation |

Integration boundaries: catalogue passes product ID and selected size into the cart; cart lines are keyed by product and size, not just product. Money is calculated in integer cents. Delivery is EUR 2.90 below EUR 35 and free from EUR 35; empty carts incur no delivery. Accounts/session are browser-local. Future checkout must consume the existing cart/account state, prevent guest orders, and clear the cart only after successful simulated completion.

## Run locally

Prerequisites: Node.js 22.12 or later, Git and pnpm available. Clone the shared repository or use an existing clean checkout; do not overwrite teammates' uncommitted changes.

```text
git clone https://github.com/DiyarbekDoskali/Retake-it-agile-group-1.git
cd Retake-it-agile-group-1
pnpm install --frozen-lockfile
pnpm dev
```

Open the local URL printed by Vite, normally `http://127.0.0.1:5173/`. A localhost address works only on that computer; send teammates the live website link instead.

```text
pnpm test
pnpm run build
pnpm run preview
```

Use the preview URL printed by Vite. Production files are generated in `dist/`. The deployment workflow handles the repository URL base; do not upload `node_modules` or secrets. The 3 October review successfully installed locked dependencies, built and ran 33 tests. The development optimizer encountered a local filesystem-permission issue in the review environment; production build/preview worked. Report environment errors rather than treating an unrun test as passed.

## Data and limitations

- Use fictional account details and a password not used elsewhere. Browser-only accounts are not production authentication, even though password hashing is present.
- Data is not shared across users/devices like a backend database. Browser storage can be cleared/unavailable; record the tested browser and version.
- Imagery is AI-generated photo-style content; see [image attribution](IMAGE_ASSETS.md).
- No real payments, checkout or order service exists in Sprint 1.
- Automated logic checks do not replace browser, keyboard, responsive or personal demonstration checks.
- No environment secrets or real customer data are needed for this prototype.

## Verification and versioning

Use [test register](SPRINT_1_TEST_REGISTER.md) and [readiness review](SPRINT_1_READINESS_REVIEW.md). Record the exact commit tested and check its deployment result. At the last repository check before this documentation update, `main` was `9070c3e` and there were zero tags. The team must identify and tag the reviewed Sprint 1 increment; this guide does not create or approve a tag.
