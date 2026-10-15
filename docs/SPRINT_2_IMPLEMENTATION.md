# Wearlane — Sprint 2 implementation

Prepared 15 October 2026. Review deadline supplied by the course: **17 October 2026**. Confirm the exact submission time and channel with the course.

## Goal and current status

A signed-in demo customer can take a valid cart through delivery details and simulated payment to a saved order confirmation. This is the implemented increment, not a claim that the team has completed its review, retrospective or presentation.

Work began from a separate clean copy of shared commit `6ff5e11eda5111963b47f1e7b755689d2d3e1753`. Older local working copies and their uncommitted changes were not overwritten. Publication was requested on 15 October; see the root README for the latest deployment verification. Jira and Confluence updates are separate follow-up work.

## Implemented features

- Cart-to-checkout navigation, with a helpful empty-cart screen.
- Guest sign-in gate and a safe internal return route after login or registration.
- Shared local session state: sign-out/account changes in another tab are reflected before ordering.
- Delivery form with required-field errors, German/international postal-code rules and fictional-data consent.
- Order review with catalogue prices, product names, selected sizes and quantities.
- Shared integer-cent cart totals: delivery EUR 2.90 below EUR 35, free at or above EUR 35.
- Explicit simulated success/decline choices; no card fields or payment service.
- Saved order reference, customer ID, timestamp, item snapshot, totals and delivery details.
- Save the order before clearing the cart. Failure to save leaves the cart intact.
- Repeat-click guard and saved intent identifiers. Retrying the same saved order does not duplicate it.
- Confirmation reload reads the saved order. Another demo account cannot retrieve it through the app.
- Mobile layout, labelled form errors, focus on errors/review, and an actual browser retest of the existing mobile Escape handler.
- Cross-tab cart changes block a stale review; clearing browser data refreshes the visible cart/session.

## Source map

| File | Responsibility |
| --- | --- |
| `src/main.jsx` | Routes, cart/account integration, cross-tab updates, order submission and confirmation lookup |
| `src/Checkout.jsx` | Sign-in gate, delivery form, order review, simulated payment, confirmation |
| `src/checkout.js` | Strict cart/delivery checks, current user, safe return routes, saved intent/order and recovery |
| `src/checkout.css` | Checkout and confirmation layout, including narrow screens |
| `src/domain.js` | Existing shared money display, cart totals and account helpers, reused by checkout |
| `tests/checkout.test.js` | Checkout logic and failure-path tests |
| `tests/browser/sprint2.mjs` | Isolated desktop/mobile browser checks and generated evidence |

## Routes and state

`#/cart` → `#/checkout` → sign in/register if needed → delivery form → review/payment → `#/confirmation/WL-<reference>`.

The delivery and review steps share the checkout route. Only approved internal return destinations are accepted. Submitting checks the current session and persisted cart again rather than trusting an old screen.

Existing cart and account storage keys are retained to preserve Sprint 1 data. The new session key is `wearlane.session.v2`; orders use `wearlane.orders.v1`, and the current order intent uses `wearlane.checkout.intent.v1`. Old tab-only sessions are not migrated: sign in again. No plaintext password is stored in an order.

Order placement is wrapped in a named Web Lock where supported. A reference-based warning is attached only to the affected confirmation. If order saving succeeds but cart cleanup fails, the confirmation warns the user instead of pretending the order failed. A retry must not remove different, newly added cart items.

## Deliberate limits

This is a local-browser simulation, not secure commerce. There is no server, payment gateway, order email, inventory reservation, order-history screen or cross-device database. The app does not decrement the mock catalogue's stock after purchase. Stock limits are per selected size, matching Sprint 1.

Browser storage is editable and can be deleted. UI ownership checks are not a security boundary. Web Locks improve cross-tab coordination where available; the fallback click guard does not promise server-grade transactions or complete concurrent-tab protection. Do not enter real personal data or payment details.

Refreshing before submission discards unsaved delivery fields; it retains the saved cart/account. A successfully saved confirmation persists in the same browser until its data is removed. Country/postal-code checks are basic demo validation, not address verification.

## Still required before claiming Sprint 2 complete

1. Team members personally review/test the implemented areas and record what they actually did. Resolve observed defects.
2. Product Owner reviews acceptance criteria and records acceptance or remaining work.
3. Update actual Jira task statuses and link real source/test evidence. Do not copy local test results as another person's execution.
4. Publish the reviewed changes, verify the deployment and professor access, and record the final commit/version.
5. Record real review/retrospective outcomes and the next backlog priorities.
6. All five members personally appear and present in the Sprint 2 recording; total recording must not exceed 30 minutes. Submit using the course instructions.
