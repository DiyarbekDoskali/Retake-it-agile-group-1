# Wearlane — Sprint 1 cart quantities, sizes and totals test results

Site: https://diyarbekdoskali.github.io/Retake-it-agile-group-1/

Scope: cart quantities, product sizes, subtotal, delivery and total calculations; related Jira responsibility CC-6.


# Summary

10 planned test cases executed: *10 passed, 0 failed*. No defects observed within the checked cart flows. This is not a claim that the entire application is defect-free.

## Desktop results

| ID | Steps | Expected result | Actual result | Status |
| --- | --- | --- | --- | --- |
| C01 | Open the product catalogue and add one product with a selected size to the cart. | The selected product and size are added to the cart with quantity 1. | Product appeared in the cart with the selected size and quantity 1. | Pass |
| C02 | Add the same product and same size to the cart again. | The cart combines the repeated addition and increases the quantity instead of creating an incorrect separate item. | The cart updated the quantity for the repeated product/size selection. | Pass |
| C03 | Add the same product using two different sizes. | Each size is kept as a separate cart item so that the selected sizes are not mixed. | The two selected sizes were displayed separately in the cart. | Pass |
| C04 | Increase the quantity of a cart item using the quantity control. | Quantity increases correctly and the item subtotal updates accordingly. | Quantity increased and the corresponding subtotal was recalculated. | Pass |
| C05 | Decrease the quantity of a cart item. | Quantity decreases correctly and the item subtotal updates accordingly. | Quantity decreased and the corresponding subtotal was recalculated. | Pass |
| C06 | Remove one product from the cart containing multiple items. | Only the selected item is removed and the remaining cart items stay unchanged. | Selected item was removed while the remaining cart items stayed in the cart. | Pass |
| C07 | Check the cart subtotal after adding products with different quantities. | Subtotal equals the sum of each item's price multiplied by its quantity. | Calculated subtotal matched the displayed cart contents and quantities. | Pass |
| C08 | Check delivery cost and the final total with products in the cart. | Delivery is displayed correctly and the final total equals subtotal plus the applicable delivery cost. | Delivery and final total were displayed and matched the cart calculation. | Pass |

## Cart persistence and empty-cart results

| ID | Steps | Expected result | Actual result | Status |
| --- | --- | --- | --- | --- |
| C09 | Add a product to the cart, refresh the page, and return to the cart. | The cart contents, selected size and quantity remain available after refresh. | Cart contents, size and quantity remained available after refresh. | Pass |
| C10 | Remove all products from the cart. | Cart becomes empty and displays the appropriate empty-cart state without incorrect totals or leftover items. | Cart displayed the empty-cart state and no product quantity or total remained. | Pass |

## Calculation checks

The following calculations were checked independently during the cart review:

- *Item subtotal = product price × quantity*
- *Cart subtotal = sum of all item subtotals*
- *Total = cart subtotal + applicable delivery cost*
- Changing quantity updates the related subtotal.
- Removing an item updates the subtotal and total.
- Different sizes of the same product remain distinguishable cart items.
- An empty cart does not retain previous product quantities or totals.

## Evidence

- [Desktop cart — single product](Wearlane_QA_Cart_Single_Product.jpg)
- [Desktop cart — quantity change](Wearlane_QA_Cart_Quantity.jpg)
- [Desktop cart — different sizes](Wearlane_QA_Cart_Sizes.jpg)
- [Desktop cart — subtotal and total](Wearlane_QA_Cart_Total.jpg)
- [Desktop cart — refreshed cart](Wearlane_QA_Cart_Refresh.jpg)
- [Desktop cart — empty cart](Wearlane_QA_Cart_Empty.jpg)

## Review notes

Assigned responsibility — Lourdes Bibang, cart module owner.

The CC-6 review focused specifically on cart behaviour rather than the whole application. The tested areas were:

1. Adding products to the cart.
2. Repeated additions of the same product and size.
3. Keeping different sizes separate.
4. Increasing and decreasing quantities.
5. Removing individual products.
6. Checking subtotal calculations.
7. Checking delivery and final total calculations.
8. Checking cart persistence after refresh.
9. Checking the empty-cart state.

No defects were observed within the checked flows.

This evidence covers the tested cart scenarios only and does not claim that the entire Wearlane application is defect-free.
