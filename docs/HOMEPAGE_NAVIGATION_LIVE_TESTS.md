# Wearlane — Sprint 1 homepage and navigation test results


Site: https://diyarbekdoskali.github.io/Retake-it-agile-group-1/

Scope: homepage and navigation; related Jira responsibilities CC-2 and CC-3.


#Summary

10 planned test cases executed: **10 passed, 0 failed**. No defects observed within the checked flows. This is not a claim that the entire application is defect-free.

## Desktop results

| ID | Steps | Expected result | Actual result | Status |
| --- | --- | --- | --- | --- |
| H01 | Open homepage at 1440 × 900 and inspect the full page. | Branding, text and images render without overlap. | Logo, hero image, categories, four featured products, lower call-to-action and footer rendered correctly. Document width 1425 px within 1440 px viewport; no page-level horizontal overflow. | Pass |
| H02 | Click header “Shop essentials”. | Product catalogue opens. | Route `#/products` opened with heading “Your everyday rotation.” | Pass |
| H03 | From catalogue, return using logo; repeat using Home. | Both controls return to homepage. | Both displayed the homepage heading “Good clothes. Great campus days.” | Pass |
| H04 | From homepage, click T-shirts, Hoodies and Jackets tiles separately. | Each opens its matching filtered catalogue. | Each category appeared in the URL, its button had `aria-pressed=true`, and six matching product cards were shown. | Pass |
| H05 | Click Sign in, then Cart with an empty basket. | Correct destinations and useful empty-cart state. | “Sign in to Wearlane” form and “A little room for essentials” empty-cart page opened. No account or cart data changed. | Pass |
| H06 | Separately click “Find your next fit”, “Shop all essentials”, lower “Explore the collection”, and footer “Explore the collection”. | All open the full catalogue. | Every link opened the catalogue with 18 product cards. | Pass |

## Mobile-size results

| ID | Steps | Expected result | Actual result | Status |
| --- | --- | --- | --- | --- |
| M01 | Set 360 × 800 portrait viewport; inspect full homepage. | Readable content, fitted images and no page-level sideways overflow. | Text and images fit; categories stacked and featured products used two columns. Document width 345 px within 360 px viewport. No overlap observed. | Pass |
| M02 | Open navigation menu and select Shop essentials. | Menu opens, catalogue appears, menu closes after navigation. | Toggle changed to `aria-expanded=true`; catalogue opened; toggle then read `false`. | Pass |
| M03 | Reopen menu and select Home; reopen and select Sign in; select Cart; return using logo. | Each control opens its destination and remains usable. | Homepage, sign-in and empty-cart headings verified. Menu closed after Home and Sign in. Logo returned to homepage. | Pass |
| M04 | Change homepage from portrait to 800 × 360 landscape; inspect full page. | Layout adapts without overlapping or hiding essential controls. | Header links visible, hero and image side by side, category tiles readable; no overlap observed. Document width 785 px within 800 px viewport. | Pass |

## Evidence


- [Desktop homepage](Wearlane_QA_Desktop_Home.jpg)
- [Portrait homepage](Wearlane_QA_Mobile_Home.jpg)
- [Portrait navigation menu open](Wearlane_QA_Mobile_Menu.jpg)
- [Landscape homepage](Wearlane_QA_Mobile_Landscape.jpg)


