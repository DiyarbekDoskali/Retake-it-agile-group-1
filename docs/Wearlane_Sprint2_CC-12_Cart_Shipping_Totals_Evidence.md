Wearlane — Sprint 2 Cart, Shipping and Order Totals Test Results

Site: https://diyarbekdoskali.github.io/Retake-it-agile-group-1/

Scope: Shopping cart, checkout summary, shipping charges, order totals and cart persistence; Jira responsibility CC-12.

Summary

Eight planned test cases cover shopping cart contents, subtotal calculations, shipping charges, checkout summary consistency, checkout failure handling and cart persistence.

Execution status: Pending actual test execution.
Passed: To be updated after testing.
Failed: To be updated after testing.
Blocked / Not executed: To be updated after testing.

The expected results are based on the CC-12 task requirements. Actual results must be recorded after testing.

Desktop results

ID	Steps	Expected result	Actual result	Status
C01	Open the website, add a product to the cart and inspect the cart.	The selected product, price and quantity are displayed correctly.	To be recorded after testing.	Not executed
C02	Add products to the cart and compare their prices and quantities with the displayed subtotal.	The subtotal matches the sum of product prices multiplied by their quantities.	To be recorded after testing.	Not executed
C03	Create a cart with a subtotal below €35 and inspect the shipping charge.	Shipping costs €2.90, and the final total includes the shipping charge.	To be recorded after testing.	Not executed
C04	Create a cart with a subtotal of exactly €35 and inspect the checkout summary.	Shipping is free, and the final total is €35.00.	To be recorded after testing.	Not executed
C05	Create a cart with a subtotal above €35 and inspect the checkout summary.	Shipping remains free, and the final total matches the subtotal.	To be recorded after testing.	Not executed
C06	Attempt checkout using a supported method to reproduce a checkout failure.	The failure is handled correctly, and the order is not incorrectly confirmed.	To be recorded after testing.	Not executed
C07	After a checkout failure, return to the cart and inspect its contents.	The products remain in the cart after checkout fails.	To be recorded after testing.	Not executed
C08	Complete an order if supported, confirm that it has been saved successfully and return to the cart.	The cart is cleared only after the order has been saved successfully.	To be recorded after testing.	Not executed

Calculation examples

Subtotal	Expected shipping	Expected total
€20.00	€2.90	€22.90
€34.99	€2.90	€37.89
€35.00	€0.00	€35.00
€50.00	€0.00	€50.00

These examples follow the specified shipping rule: €2.90 below €35 and free shipping at or above €35.

Mobile results

ID	Steps	Expected result	Actual result	Status
MC01	Open the cart on a mobile-size viewport and inspect the product information and totals.	Cart contents and monetary values remain readable and correct.	To be recorded after testing.	Not executed
MC02	Open the checkout summary on a mobile-size viewport and compare the totals with the cart.	Product details, shipping charges and final totals are correct and readable without layout problems.	To be recorded after testing.	Not executed

Evidence

Attach the actual screenshots captured during testing.

* Screenshot 1 — Shopping cart
* Screenshot 2 — Subtotal calculation
* Screenshot 3 — Shipping below €35
* Screenshot 4 — Free shipping at €35
* Screenshot 5 — Continuous free shipping above 35€
* Screenshot 6 — Checkout failure
* Screenshot 7 — Cart after checkout failure
* Screenshot 8 — Successful order and cart state

The filenames above are suggested names for the evidence images. Replace them with the actual filenames when adding the screenshots.

Defects and observations

Record any unexpected behaviour discovered during testing, including incorrect calculations, missing shipping charges, inconsistent checkout totals or loss of cart contents.

Defects observed: To be recorded after testing.
Defect references: To be added if applicable.
Fixes applied: To be recorded if applicable.

If a checkout failure or successful order cannot be tested because the website does not support that functionality, mark the relevant test as blocked or not executed and explain the limitation.

Implementation evidence

Jira Task: CC-12 — Cart, Shipping and Totals
GitHub Repository: https://github.com/diyarbekdoskali/Retake-it-agile-group-1
Commit Link: To be added after committing the changes.
Files Modified: To be recorded after implementation.

The implementation focuses on connecting the shopping cart to the checkout summary, calculating product totals and shipping charges, preserving the cart after checkout failure and clearing the cart only after successful order saving.

Implementation status: To be updated after the code changes are completed.

Conclusion

Sprint 2 testing for CC-12 focuses on accurate shopping cart calculations, correct shipping charges, checkout summary consistency and safe cart behaviour throughout the checkout process.

The final outcome will be recorded after the tests have been executed, actual results documented and screenshots attached.

Prepared by: Lourdes Bibang
Project: Wearlane — Group 1
Sprint: Sprint 2
Jira Task: CC-12
