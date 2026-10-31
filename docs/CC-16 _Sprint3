# CC-16 — Catalogue, Product Details and Inventory Test Results

**Owner:** Diyarbek  
**Actual test date:** 31 October 2026, 22:29–22:37 CET  
**Environment:** Chrome cloud browser, desktop viewport 1363 × 936  
**Website:** https://diyarbekdoskali.github.io/Retake-it-agile-group-1/  


## Test results

| ID | Test steps | Expected result | Actual result | Status |
| --- | --- | --- | --- | --- |
| CAT3-01 | Open Shop essentials with All selected. | Complete catalogue displayed. | 18 styles and 18 product cards displayed. | Pass |
| CAT3-02 | Select T-shirts. | Only T-shirts displayed. | Six T-shirt products displayed. | Pass |
| CAT3-03 | Select Hoodies. | Only hoodies displayed. | Six hoodie products displayed. | Pass |
| CAT3-04 | Select Jackets. | Only jackets displayed. | Six jacket products displayed. | Pass |
| CAT3-05 | Select All and search for `hoodie`. | Multiple matching products displayed. | Six matching hoodie products displayed. | Pass |
| CAT3-06 | Search for `  HOODIE  ` with surrounding spaces. | Search ignores capitalisation and surrounding spaces. | The same six hoodie products displayed. | Pass |
| CAT3-07 | Search for `zzzz-cc16-20261031`. | Clear no-result state and recovery option. | “0 styles”, “No styles found” and “Clear filters” displayed. | Pass |
| CAT3-08 | Click Clear filters. | Search and category filters reset. | Search cleared and all 18 products restored. | Pass |
| CAT3-09 | Search for `Everyday heavyweight tee`. | One matching product displayed. | “1 style” displayed with the correct tee at €18.00. | Pass |
| CAT3-10 | Search for `hoodie`, then select T-shirts. | Results satisfy both filters. | No products displayed because no T-shirt matches the search. | Pass |
| CAT3-11 | Select Price: low to high. | Prices sorted numerically in ascending order. | All 18 products sorted from €15.00 to €68.00. | Pass |
| CAT3-12 | Select Price: high to low. | Prices sorted numerically in descending order. | All 18 products sorted from €68.00 to €15.00. | Pass |
| CAT3-13 | Select Name: A to Z. | Product titles sorted alphabetically. | Correct order from Boxy studio tee to Zip-through fleece jacket. | Pass |
| CAT3-14 | Select Featured. | Original featured order restored. | Everyday tee, Campus hoodie, Coach jacket and Denim jacket appeared first. | Pass |
| CAT3-15 | Open Everyday heavyweight tee and click Add to cart without selecting a size. | Addition blocked with an explanatory message. | “Please select a size before adding to your cart.” displayed; cart remained empty. | Pass |
| CAT3-16R | Open all 18 product details and compare them with catalogue data. | Correct titles, images, prices, sizes and stock information. | All 18 matched the source catalogue. All images loaded. Sizes XS, S, M, L and XL displayed. Stock was 10 per size except the sold-out Studio cropped hoodie. | Pass |
| CAT3-17 | Open Studio cropped hoodie and select M. | Unavailable product cannot be added. | “Currently out of stock” displayed; Sold out button disabled; cart unchanged. | Pass |
| CAT3-18 | On Everyday heavyweight tee, select M and then L. | Only the latest size remains selected. | L selected; M no longer selected. | Pass |
| CAT3-19 | Add the L tee once and open the cart. | Correct product, size, quantity and price transferred. | Everyday heavyweight tee, size L, quantity 1, €18.00 each; delivery €2.90; total €20.90. | Pass |
| CAT3-20 | Starting with one L tee, click Add to cart 11 more times. | Quantity cannot exceed stock of 10. | Quantity reached 10 and remained there on further attempts. Quantity-limit message displayed. | Pass |
| CAT3-21 | Open the cart with 10 L tees. | Correct quantity and total; further increase blocked. | Quantity 10, line total €180.00, free delivery and disabled increase button. | Pass |
| CAT3-22 | Decrease quantity from 10 to 9, then increase it to 10. | Increase available below stock and disabled at the limit. | Increase enabled at 9 and disabled again at 10. | Pass |
| CAT3-23 | Keep 10 L tees and add one M tee. | Different sizes remain separate; stock limit applies per size. | Separate L × 10 and M × 1 lines; 11 items; total €198.00. | Pass |
| CAT3-24 | Reduce L quantity to 2 while retaining M quantity 1. | Quantities and prices remain correct independently. | L × 2 = €36.00; M × 1 = €18.00; three items; free delivery; total €54.00. | Pass |
| CAT3-25 | Continue to checkout as a guest. | Sign-in required and cart retained. | “Sign in to continue” displayed; cart badge remained at three items. | Pass |
| CAT3-26 | Compare both size variants on authenticated checkout and order review. | L × 2 and M × 1 at €18.00 each; total €54.00. | Live check not executed because user sign-in or fictional demo signup is required. | Blocked |

**Retest note:** The initial CAT3-16 attempt sampled three pages before navigation finished. It was recorded as inconclusive. CAT3-16R waited for each expected product heading and passed all 18 comparisons. No application defect was established.

## Automated tests and technical contribution

Three new regression tests were prepared:

1. Verify that every available product-size variant retains its identity, size and catalogue price through the checkout snapshot.
2. Verify that repeated additions cannot exceed stock and rejected additions leave the cart unchanged.
3. Verify that sold-out variants are rejected by both cart and checkout validation.

These checks cover **85 available variants and five unavailable variants**.

**Results:** 77 existing tests plus three new tests — **80 passed, zero failed**.

The checkout snapshot also preserved the tested cart correctly:

| Product | Size | Quantity | Unit price | Line total |
| --- | --- | --- | --- | --- |
| Everyday heavyweight tee | L | 2 | €18.00 | €36.00 |
| Everyday heavyweight tee | M | 1 | €18.00 | €18.00 |

**Subtotal:** €54.00  
**Delivery:** Free  
**Total:** €54.00

This confirms the checkout data calculation; authenticated checkout display verification remains open.

## Completion status

**25 live checks passed. One authenticated checkout check remains blocked.**

