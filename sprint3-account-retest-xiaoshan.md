# Sprint3 - Account Session Retest Evidence
Tester / Product Owner: Xiaoshan Zhou
Test Date: 2026-10-31
Browser: Chrome
Fictional test account: xiaoshan-test@demo.com
Build source: CC-14 final published build

| AC # | Test Steps | Expected Result | Actual Result | Pass/Fail | Notes |
| ---- | ---- | ---- | ---- | ---- | ---- |
| AC1 | Register new user, login, logout, login again and return to checkout | User can complete register/login/logout flow and resume checkout after re-login | New account registered successfully. Login and logout work as expected. After logging in again, I can access and continue the checkout flow. | Pass | Basic authentication flow verified |
| AC2 | TabA: login and reach checkout review; TabB: sign out, return to TabA and try to place order. Check cart. | After logout in tab B, TabA cannot submit order | After signing out in Tab B, returning to Tab A and attempting to place an order fails. Cart items are still retained on the page. | Pass | Core cross-tab session test |
| AC3 | Complete order, copy confirmation URL, logout and revisit the link | Order confirmation page is blocked after logout, only available for signed-in user | After logout, accessing the saved confirmation URL redirects to login page. Order details cannot be viewed without signing in. | Pass | Order confirmation access restriction verified |
| AC4 | Compare original CC cross-tab failure record with this retest | Keep both records, judge if fixed / reproducible / needs investigation | The original bug allowed users to submit orders even after logging out in another tab. This retest no longer reproduces this issue. | Pass | Do NOT overwrite original failure |
| AC5 | End-to-end integrated shopping flow review | All acceptance criteria are satisfied | The full shopping journey works correctly following the acceptance criteria. | Pass | Overall PO review |

## AC4 Comparison
Original failure record: User was able to submit an order from a checkout tab after logging out of the same account in another browser tab. Session state was not synchronised between tabs.
Retest result: The cross-tab session issue is fixed. Order submission is blocked after logout from another tab.
Conclusion: Issue resolved. The cross-tab session synchronisation bug has been fixed.

## Product Owner Acceptance
Accepted:
- AC1: Register, login, logout and resume checkout functions correctly
- AC2: Cross-tab session behaviour works as required; logout in one tab invalidates order submission on the second checkout tab
- AC3: Order confirmation page is protected and only accessible to the signed-in account
- AC4: The historic cross-tab bug is resolved and no longer reproducible
- AC5: End-to-end shopping flow meets all acceptance criteria

Remaining issues & priority:
- No critical issues found during this retest. Minor UI polish can be added to the product backlog with Low priority if needed.

Overall PO decision:
As Product Owner, I accept this user story. All acceptance criteria are met. The cross-tab session defect identified in earlier testing has been resolved.

---
## Screenshot Evidence
![AC1 Register Login Logout Flow](AC1.png)
![AC2 Cross-tab Logout Test (Main evidence)](AC2.png)
![AC3 Order Confirmation Page Restriction](AC3.png)
