# Wearlane · Sprint 3 shopping flow

On 31 October 2026, two fictional shoppers completed the journey from the catalogue to a saved order in the corrected local production build. The desktop shopper ordered one size M tee for **€20.90** including delivery. The mobile-width shopper ordered two for **€36.00** with free delivery. The cart count returned to zero after each successful order.

**Build and scope.** The preview at `http://127.0.0.1:4173/` served `index-BCQDKoBV.js`. Both runs used the same in-app browser on Windows. The mobile run used a 390 × 844 viewport. The desktop run used 1280 × 800. These are assisted browser checks. The automated build check also passed all 77 existing tests.

| Check | Steps and expected behaviour | Observed on desktop | Observed at mobile width |
| --- | --- | --- | --- |
| Catalogue count | Open Shop, search for an unknown string, then search for Everyday heavyweight tee. The count should follow the results. | `18 styles` → `0 styles` → `1 style` | Same three counts |
| Cart count | Select size M, add a tee, then increase its quantity. The accessible cart label and visible subtotal should agree. | `Cart, 1 item` and `Subtotal (1 item)` changed to `2 items` at quantity two. Reducing the quantity restored the singular. | Singular for one tee and plural for two. The two-tee cart stayed in place for checkout. |
| Register and sign in | Open checkout as a guest, register with fictional details, sign out, and sign back in from the cart. Checkout should resume with the same items. | Checkout resumed with one size M tee. | Checkout resumed with two size M tees. |
| Delivery validation | Try reviewing the order with missing delivery fields, then supply fictional details. | The form asked for corrections. Valid details opened review. | Same result |
| Order review | Compare the final total and item count with the cart. | One tee at €18.00 plus €2.90 delivery, total €20.90 | Two tees at €18.00 each, free delivery, total €36.00 |
| Payment decline and retry | Choose a simulated decline, check that the cart survives, then retry with simulated success. | Decline kept the item. Retry showed the confirmation and emptied the cart. | Decline kept both items. Retry showed the confirmation and emptied the cart. |
| Confirmation and logout | Reload the saved confirmation, then sign out and revisit the same address. | Refresh kept the reference. Reopening after logout required sign-in. | Same result |
| Mobile navigation | Open the menu, press Escape, then reopen it to visit the catalogue. | Mobile-only check | Escape closed the menu and returned keyboard focus to its toggle. |

The page width fit the viewport at all 23 recorded checkpoints. Physical handset and cross-browser coverage remain open. The [separate cross-tab logout retest](SPRINT_3_SESSION_RETEST.md) covers the earlier CC-10 report.

| Evidence | Desktop | Mobile width |
| --- | --- | --- |
| One-item cart | [Cart](sprint-3-shopping-evidence/desktop-cart-one.jpg) | [Cart](sprint-3-shopping-evidence/mobile-cart-one.jpg) |
| Order review | [€20.90 review](sprint-3-shopping-evidence/desktop-checkout-review.jpg) | [€36.00 review](sprint-3-shopping-evidence/mobile-checkout-review.jpg) |
| Saved confirmation | [Desktop receipt](sprint-3-shopping-evidence/desktop-confirmation.jpg) | [Mobile receipt](sprint-3-shopping-evidence/mobile-confirmation.jpg) |

The [recorded checkpoints](sprint-3-shopping-evidence/observations.json) include routes, viewport dimensions and measured content widths. Each demo account was signed out after testing.
