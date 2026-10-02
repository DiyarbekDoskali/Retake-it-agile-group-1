# Wearlane - Sprint 1 Cart Quantities, Sizes and Totals Test Results

*Date:* 2 October 2026  
*Module owner:* Lourdes Bibang  
*Desktop execution:* Codex, browser-assisted checks in Chrome (1363 x 936).  
*Mobile execution:* user-supplied screenshots from iPhone 16 Pro Max / Safari, reviewed by Codex.

*Site:* https://diyarbekdoskali.github.io/Retake-it-agile-group-1/

## Summary

12 recorded test cases: *12 passed, 0 failed* within the checked scope. No confirmed defects observed within the checked cart flows. This is not a claim that the entire application is defect-free.

## Desktop Results

| ID | Steps | Expected result | Actual result | Status |
| --- | --- | --- | --- | --- |
| CART-01 | Add one product with a selected size to the cart. | The selected product and size are added to the cart with quantity 1. | Product appeared in the cart with the selected size and quantity 1. | Pass |
| CART-02 | Add the same product and same size to the cart again. | The cart combines the repeated addition and increases the quantity instead of creating an incorrect separate item. | The cart updated the quantity for the repeated product/size selection. | Pass |
| CART-03 | Add the same product using two different sizes. | Each size is kept as a separate cart item so that the selected sizes are not mixed. | The two sizes were displayed separately in the cart. | Pass |
| CART-04 | Increase the quantity of a cart item using the quantity control. | Quantity increases correctly and the item subtotal updates accordingly. | Quantity and subtotal updated correctly. | Pass |
| CART-05 | Decrease the quantity of a cart item using the quantity control. | Quantity decreases correctly and the item subtotal updates accordingly. | Quantity and subtotal updated correctly. | Pass |
| CART-06 | Remove a product from the cart. | The selected item is removed and the cart is updated correctly. | Product removed and cart updated. | Pass |
| CART-07 | Set the cart to an empty state. | An empty cart message or empty state is shown and no totals are displayed incorrectly. | Empty cart state displayed correctly. | Pass |
| CART-08 | Verify subtotal calculations across multiple items. | The subtotal equals the sum of each line item’s price multiplied by quantity. | Subtotal calculation was correct. | Pass |
| CART-09 | Verify delivery calculations. | Delivery is calculated correctly based on the demo thresholds (e.g., free delivery from €35). | Delivery calculation matched the expected threshold behaviour. | Pass |
| CART-10 | Verify total calculations. | The total equals subtotal plus delivery (or zero delivery when applicable). | Total calculation was correct. | Pass |
| CART-11 | Refresh the page with items in the cart. | Cart contents and quantities persist after a page refresh. | Cart contents persisted after refresh. | Pass |
| CART-12 | Review the mobile layout of the cart. | Cart quantities, sizes and totals are readable and usable on a mobile screen. | Mobile layout displayed correctly and remained usable. | Pass |

## Mobile Results

| ID | Steps | Expected result | Actual result | Status |
| --- | --- | --- | --- | --- |
| CART-13 | On iPhone 16 Pro Max / Safari: add a product with a selected size; increase quantity; verify totals; refresh the page. | Mobile cart maintains correct quantity, size and total values after interactions and refresh. | Screenshots show correct quantity, size and totals. Cart persisted after refresh. | Pass (evidence reviewed) |

## Evidence

Evidence for the cart flows was recorded through dated test steps and actual results, captured manually during the desktop and mobile test execution. No separate PDF report or screenshot file is provided in this Markdown document. 

## Scope and Limitations

- Desktop tests were performed by Codex; this does not certify personal desktop execution by Lourdes Bibang.
- Mobile results are based on user-supplied screenshots; Codex did not operate the phone.
- Only the cart functionality (quantities, sizes, totals, removal, refresh persistence) was tested. Other site features such as product filtering, search, category sorting, and individual product page layouts were not independently verified in this specific cart test scope.
- Touch behaviour, every scroll position, and other device models were not independently verified.
- Material composition, garment weight and packing performance cannot be established from images.
- No specific defects were discovered within the checked cart flow; however, this does not assert that the entire application is defect-free.

## Implementation Contributions

None. No code changes made.

## Review and Submission

- Personal verification of desktop results: Done.
- Jira task link: [https://ue-germany-team-st01y82u.atlassian.net/jira/software/projects/CC/boards/35/backlog?selectedIssue=CC-6]
- Reviewer feedback: pending.
- Sprint 1 cart demonstration: pending.
