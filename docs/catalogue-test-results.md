# Wearlane - Sprint 1 Catalogue Test Results

**Date:** 2 October 2026  
**Module owner:** Diyarbek CC-5
**Desktop execution:** Chrome (1363 x 936).  
**Mobile execution:** user-supplied screenshots from iPhone 14 Pro Max / Safari.

**Site:** https://diyarbekdoskali.github.io/Retake-it-agile-group-1/

## Summary

25 recorded test cases: **25 passed, 0 failed** within the checked scope. No confirmed defect found. This is not a claim that the entire application is defect-free.

## Desktop Results

| ID | Steps | Expected result | Actual result | Status |
| --- | --- | --- | --- | --- |
| CAT-01 | Home > Shop essentials. | Catalogue opens with product cards. | 18 styles displayed; names, categories, prices and View fit links present. [PDF evidence: E1] | Pass |
| CAT-02 | Select T-shirts. | Only T-shirts are shown. | 6 T-shirt styles; no hoodie or jacket cards in results. | Pass |
| CAT-03 | Select Hoodies. | Only hoodies are shown. | 6 hoodie styles, including the sold-out Studio cropped hoodie. | Pass |
| CAT-04 | Select Jackets. | Only jackets are shown. | 6 jacket styles shown. | Pass |
| CAT-05 | Select All after category filtering. | Full catalogue returns. | 18 styles restored. | Pass |
| CAT-06 | With All selected, enter hoodie. | Matching products appear. | 6 hoodie products returned. | Pass |
| CAT-07 | Replace query with HOODIE. | Same results as lowercase query. | Same 6 hoodie products returned. | Pass |
| CAT-08 | Enter two spaces, hoodie, then two spaces. | Leading/trailing spaces do not change matches. | 6 hoodie products returned. | Pass |
| CAT-09 | Enter zzzz-no-match-938. | Zero results and useful recovery message. | 0 styles; No styles found; Try a different search or category; Clear filters. [PDF evidence: E2] | Pass |
| CAT-10 | Empty the search field. | Full catalogue returns. | 18 styles restored. | Pass |
| CAT-11 | Search hoodie, then select T-shirts. | Results satisfy both query and category. | 0 styles and No styles found displayed. | Pass |
| CAT-12 | From empty results, click Clear filters. | Search clears and All products return. | Search field empty; All selected; 18 styles displayed. | Pass |
| CAT-13 | Select Price: low to high. | All prices appear in ascending order. | 15,18,19,20,22,24,32,38,39,42,45,46,48,52,54,58,62,68 euros. | Pass |
| CAT-14 | Select Price: high to low. | All prices appear in descending order. | 68,62,58,54,52,48,46,45,42,39,38,32,24,22,20,19,18,15 euros. | Pass |
| CAT-15 | Select Name: A to Z. | Product names appear alphabetically. | 18 names correctly ordered, from Boxy studio tee to Zip-through fleece jacket. | Pass |
| CAT-16 | Change sort back to Featured. | Initial featured order returns. | Everyday heavyweight tee, Campus heavyweight hoodie, Everyday coach jacket first. | Pass |
| CAT-17 | Click image link for Everyday heavyweight tee. | Matching product details and price open. | Correct heading, 18 euros, description, Relaxed fit, 100% cotton, 240 gsm. [PDF evidence: E3] | Pass |
| CAT-18 | On tee details, click Add to cart without size. | Addition blocked with an explanatory message. | Please select a size before adding to your cart. Cart remained at 0. [PDF evidence: E4] | Pass |
| CAT-19 | Select M, then L. | Only the latest size remains selected. | M changed to unchecked; L checked. | Pass |
| CAT-20 | With L selected, Add to cart; open Cart. | Correct product and size are passed to cart. | Everyday heavyweight tee, Size L, quantity 1, unit price 18 euros. [PDF evidence: E5] | Pass |
| CAT-21 | Open Studio cropped hoodie. | Stock message and disabled purchase control. | Currently out of stock and disabled Sold out button. [PDF evidence: E6] | Pass |
| CAT-22 | Inspect all 18 catalogue image elements. | All product images load. | All 18 images complete with nonzero natural width. | Pass |
| CAT-23 | Compare first four cards and tee detail image/text. | Visible garment types match product names. | Tee, hoodie, coach jacket and denim jacket visually match; tee card/detail consistent. [PDF evidence: E1, E3] | Pass |

## Mobile Results

| ID | Steps | Expected result | Actual result | Status |
| --- | --- | --- | --- | --- |
| CAT-24 | On iPhone 14 Pro Max / Safari: open catalogue; filter Hoodies; search Hoodie; sort Price: low to high; open Boxy studio tee, select L and add to cart. | Readable screens and correct results for the sampled filter, search, sort, detail and size-to-cart flow. | Screenshots show 18 catalogue styles, 6 hoodies for filter/search, visible prices EUR 15,18,19,20 in ascending order, size L selected, and Boxy studio tee L in cart with quantity 1. PDF evidence M01-M10. | Pass (evidence reviewed) |

## Full Product Content Review

| ID | Steps | Expected result | Actual result | Status |
| --- | --- | --- | --- | --- |
| CAT-25 | Open all 18 detail pages. Compare card/detail names, prices and image sources; visually review each garment against its description. | Consistent names, prices and images; descriptions agree with visible features. | All 18 reviewed. Card/detail names, prices and images match. No visible feature mismatch found. PDF evidence A01-A18. | Pass |

## Evidence

The companion PDF is stored in the same folder and provides the report's test tables and screenshot evidence:

[View the PDF report and screenshots](Wearlane_Catalogue_Test_Results.pdf)



- Personal verification of desktop results: pending.
- Jira task link: [CC-5](https://ue-germany-team-st01y82u.atlassian.net/browse/CC-5).
- Reviewer feedback: pending.
- Sprint 1 catalogue demonstration: pending.
