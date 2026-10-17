# Sprint 2 Individual Product and Validation Review — Diyarbek Doskali 

**Date:** 17 October 2026  
**Environment:** Google Chrome, Windows PC  
**Node.js:** v24.22.0  
**Published application version:** 4ec7fd6ae3b68e8ebf5cbbf98f68d397f1744ac8

## Manual Acceptance Checks

### 1. Missing size validation
**Steps:** Open Everyday heavyweight tee and click Add to cart without selecting a size.  
**Expected:** Adding the product is rejected with useful feedback.  
**Actual:** “Please select a size before adding to your cart.”  
**Result:** PASS.

### 2. Stock limit
**Steps:** Select size M, add the product and increase its quantity to 10.  
**Expected:** The quantity cannot exceed the size’s stock limit of 10.  
**Actual:** Quantity reached 10 and the increase button was disabled.  
**Result:** PASS.

### 3. Sold-out product
**Steps:** Open Studio cropped hoodie.  
**Expected:** The product shows its sold-out status and cannot be added to the cart.  
**Actual:** “Currently out of stock” was displayed with a disabled Sold out button.  
**Result:** PASS.

### 4. Valid checkout and saved item details
**Steps:** Complete checkout for two Everyday heavyweight tees in size M, using fictional delivery details and successful simulated payment.  
**Expected:** Checkout succeeds and the confirmation contains the correct product details and prices.  
**Actual:**
- Product: Everyday heavyweight tee
- Size: M
- Quantity: 2
- Unit price: €18.00
- Line total: €36.00
- Delivery: Free
- Order total: €36.00

**Result:** PASS.

### 5. Confirmation refresh
**Steps:** Refresh the saved confirmation page.  
**Expected:** The order reference and saved item details remain unchanged.  
**Actual:** The same reference and product details remained after refreshing.

**Order reference:** WL-F42E5379-0F06-46AA-AC03-4E082A3FE74B  
**Result:** PASS.

## Automated Validation Checks

I personally ran the existing checkout tests using:

`node --test tests/checkout.test.js`

**Actual result:** 44 tests passed, 0 failed, 0 skipped.

The tests cover unknown products, unavailable sizes, sold-out items, fractional, negative and excessive quantities, duplicate cart lines, order saving and saved-order retrieval.

**Result:** PASS.

## Catalogue Price Validation

**Reviewed test:** “checkout reads trusted product prices, not stored price fields” in `tests/checkout.test.js`.

**Expected:** Checkout ignores untrusted prices supplied in cart data.

**Actual:** The test supplies `price: 1` and `unitPrice: 1`. Checkout still uses the catalogue unit price of 1800 cents (€18.00) and a total of 2090 cents (€20.90), including delivery for one item.

This test passed in my local execution.

**Result:** PASS.

## My Contribution

I personally performed the manual acceptance checks, reran the 44 existing checkout tests, reviewed the catalogue-price validation test and collected screenshot evidence.

No blocking defects were identified during these checks, so no defect fix or resolution retest was required.

## Evidence

Supporting screenshots show:
- Missing-size validation feedback.
- Quantity capped at 10.
- Sold-out product status.
- Saved order confirmation.
- Checkout test execution: 44 passed, 0 failed.
- The catalogue-price validation test.

The confirmation refresh result was also checked manually.

## Sprint Review Demonstration

1. Show the missing-size error and stock limit.
2. Show the successful order confirmation and refresh it.
3. Show the 44 passing checkout tests.
4. Explain how the price-validation test checks that catalogue prices override supplied cart prices.
