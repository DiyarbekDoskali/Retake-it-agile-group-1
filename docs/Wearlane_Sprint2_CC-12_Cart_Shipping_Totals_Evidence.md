Wearlane — Sprint 2 Cart, Shipping and Order Totals Test Results

Site: https://diyarbekdoskali.github.io/Retake-it-agile-group-1/

Scope: Shopping cart, checkout summary, shipping charges, order totals and cart persistence; Jira responsibility CC-12.

Summary

Eight planned test cases are defined for Sprint 2. The tests cover cart contents, subtotal calculations, shipping charges, checkout summary consistency, cart persistence after checkout failure and cart clearing after a successful order.

Execution status: Pending actual test execution.
Passed: To be recorded after testing.
Failed: To be recorded after testing.
Blocked / Not executed: To be recorded after testing.

The expected results below are based on the CC-12 task requirements. No claim is made that these behaviours have already been verified.

Desktop results

ID	Steps	Expected result	Actual result	Status
C01	Open the Wearlane website, add a product and open the cart.	The cart displays the selected product, price and quantity correctly.	To be recorded after testing.	Not executed
C02	Add one or more products and compare their prices and quantities with the displayed subtotal.	The subtotal equals the sum of each product price multiplied by its quantity.	To be recorded after testing.	Not executed
C03	Create a cart with a subtotal below €35 and inspect the checkout summary.	Shipping is €2.90 and the final total includes the shipping charge.	To be recorded after testing.	Not executed
C04	Create a cart with a subtotal of exactly €35 and inspect the checkout summary.	Shipping is free and the final total is €35.00.	To be recorded after testing.	Not executed
C05	Compare the products, quantities, subtotal, shipping and final total in the cart and checkout summary.	The checkout summary matches the cart and all displayed calculations are correct.	To be recorded after testing.	Not executed

Cart persistence and order results

ID	Steps	Expected result	Actual result	Status
C06	Add products, reproduce a checkout failure if possible, and return to the cart.	The cart retains its products when checkout fails.	To be recorded after testing.	Not executed
C07	Complete an order if the website supports order submission, confirm it was saved, and revisit the cart.	The cart is cleared only after the order has been saved successfully.	To be recorded after testing.	Not executed
C08	Add a product, reload the website and reopen the cart.	The cart behaves according to the application’s persistence requirements.	To be recorded after testing.	Not executed

Calculation examples

The following examples provide reference values for checking the shipping and order totals.

Subtotal	Expected shipping	Expected total
€20.00	€2.90	€22.90
€34.99	€2.90	€37.89
€35.00	€0.00	€35.00
€50.00	€0.00	€50.00

These values assume that the shipping rule specified in the CC-12 Jira task is applied to the merchandise subtotal.

Mobile results

Mobile testing should be recorded separately if the cart and checkout are tested on a mobile viewport.

ID	Steps	Expected result	Actual result	Status
MC01	Open the cart using a mobile-size viewport and inspect the product details and totals.	Cart contents and monetary values remain readable and correct.	To be recorded after testing.	Not executed
MC02	Open the checkout summary on mobile and compare the totals with the cart.	The checkout summary displays the correct products, shipping charges and final total without layout problems.	To be recorded after testing.	Not executed

Evidence

Attach the actual screenshots captured during testing.

* Screenshot 1 — Shopping cart
* Screenshot 2 — Subtotal calculation
* Screenshot 3 — Shipping below €35
* Screenshot 4 — Free shipping at €35
* Screenshot 5 — Continuous free shipping above 35€
* Screenshot 6 - Checkout failure
* Screenshot 7 — Cart after checkout failure
* Screenshot 8 — Successful order and cart state

The filenames above are suggested names for the evidence images. Replace them with the actual uploaded filenames when attaching the screenshots.

Defects and observations

Record any unexpected behaviour discovered during the tests, including incorrect calculations, missing shipping charges, inconsistent checkout totals or loss of cart contents.

Defects observed: To be recorded after testing.
Defect references: To be added if applicable.
Fixes applied: To be recorded if applicable.

If a failure scenario cannot be reproduced because the website does not support order submission or checkout error handling, mark the relevant test as blocked or not executed and explain the limitation.

Implementation evidence

Jira Task: CC-12 — Cart, shipping and totals
GitHub repository: [This repository URL]

Document the code changes made to connect the cart with the checkout summary, calculate shipping and totals, preserve the cart after failures and clear it only after successful order saving.

Conclusion

Sprint 2 testing for CC-12 focuses on the accuracy of the shopping cart and checkout calculations and the safe handling of cart contents throughout the checkout process.

The final outcome will be reported after the planned tests have been executed, actual results recorded and supporting screenshots attached. Any blocked tests or defects will be documented clearly.

Prepared by: Lourdes Bibang
Project: Wearlane — Group 1
Sprint: Sprint 2
Jira Task: CC-12
