# Wearlane — clothing store, Sprint 1

A React + Vite learning prototype for Group 1's IT Agile Development retake. It uses fictional clothing, AI-generated photo-style imagery and browser-only mock data. It cannot take real orders or payments.

## Run the website

Use Node.js 22.12 or later and pnpm. In this folder:

```sh
pnpm install --frozen-lockfile
pnpm test
pnpm build
pnpm preview --port 5173 --strictPort
```

Open http://127.0.0.1:5173/ and keep the terminal running. This address works only on the computer running the preview, not teammates' computers. Each teammate needs a local copy and the same setup, or a separately arranged deployment.

For editing, `pnpm dev` normally provides live updates. In the current restricted Windows environment, dependency optimization hit a parent-directory permission error. The verified workaround is the build-and-preview workflow above; rebuild and refresh after changes. Do not disable system security settings.

## Implemented increment

- Responsive homepage, navigation and three clothing categories.
- Eighteen fictional products, search, category filtering, price/name sorting and product details.
- Required XS–XL size selection and sold-out protection.
- Size-specific cart quantities, removal, totals and browser persistence.
- Mock registration, sign-in, invalid-credential handling and sign-out.
- Thirty automated tests (27 logic tests and 3 branding/asset checks); browser verification recorded in `docs/TEST_RESULTS.md`.

Checkout, address validation, simulated payment and order references are NOT implemented in Sprint 1. They are proposed Sprint 2 work, subject to the team's actual planning.

## Routes

| Page | URL suffix |
| --- | --- |
| Home | `/#/` |
| Catalogue | `/#/products` |
| Product example | `/#/products/everyday-tee` |
| Cart | `/#/cart` |
| Registration | `/#/register` |
| Sign-in | `/#/login` |

## Mock-data limitations

Use only made-up email addresses and unique test passwords. Accounts and salted password hashes are stored in localStorage; the signed-in account reference is in sessionStorage. This demonstrates UI behaviour, not secure authentication: browser data can be altered, there is no trusted server, and accounts do not synchronize between devices. Never use real credentials or customer data.

Each size has simulated stock of ten; the Studio cropped hoodie is sold out. Stock is not reserved across customers. Prices are integer cents; delivery is EUR 2.90 below EUR 35, otherwise free. All product, material and delivery statements are fictional.

## Source map

- `src/main.jsx`: shared layout, routing, catalogue, cart and account forms.
- `src/ProductDetail.jsx`: product details and size selection.
- `src/ClothingArt.jsx`: local catalogue photo-style images (AI-generated).
- `src/products.js`: fictional catalogue.
- `src/domain.js`: filtering, cart calculations, input validation and mock password hashing.
- `src/style.css`: desktop and mobile layouts.
- `tests/domain.test.js`: automated logic tests.

See `docs/SPRINT_1_HANDOVER.md` for the demonstration sequence and remaining course obligations. This AI-assisted implementation is not evidence of individual student contributions; record authorship and actual work honestly.

## Wearlane rename and imagery

The current website, package name, local project folder and current documentation use Wearlane. Jira's project is Wearlane - Group 1; the existing CC issue keys and URLs are deliberately unchanged. Homepage and navigation story text has been rebranded without changing status, ownership or acceptance criteria.

Legacy browser-storage keys remain internal so existing demo accounts and carts are preserved. The older Word plan and historical screenshots are retained locally as earlier records, not current branded deliverables. The shared GitHub repository is [Retake-it-agile-group-1](https://github.com/DiyarbekDoskali/Retake-it-agile-group-1); its neutral name is unchanged.

`public/images/` contains 18 unique AI-generated catalogue images and a model hero, compressed to WebP. Original PNGs are preserved in the uploader's local workspace, outside this repository. All assets needed to run the website are included here. Prompts and provenance are in `docs/IMAGE_ASSETS.md`.
