# Sprint 1 handover — 2 October 2026

Historical handover: for the current deployed state and remaining gaps, read the [3 October readiness review](SPRINT_1_READINESS_REVIEW.md). Statements below about not yet pushing/uploading refer to the original handover time, not the current repository.

## Status

Wearlane is a local, runnable clothing-store prototype. The production build and 30 automated tests pass. Selected desktop and 360-pixel mobile flows have been checked in the Codex in-app browser. This is a software increment, not a completed retake submission.

This handover supersedes the earlier student-essentials concept for website scope only. The original assignment remains authoritative; the older Word project plan has not been rewritten.

No implementation commit, push, sprint tag, Jira completion update or Confluence publication has been performed as part of this handover. No recorded review or student contribution is implied.

## Suggested demonstration — about 6 minutes

1. Explain that Wearlane sells fictional tees, hoodies and jackets. Show the Sprint 1 banner.
2. Show the homepage and category navigation, including the mobile menu.
3. Search for a product, combine search with a category, and sort prices. Show the empty-result message.
4. Open the Everyday heavyweight tee. Try adding without a size, then add size M and size L.
5. Show the two separate cart lines. Change quantities, refresh, remove one size, and explain the total and demo delivery calculation.
6. Register using a fictional email and test password. Sign out, show an incorrect-password error, then sign in successfully.
7. Show the tests and explain the prototype's browser-only storage limitation. State clearly that checkout/payment/order confirmation remain future work.

Do not use real credentials. A fictional account created during agent verification is `sprint1-clothing@example.test`; password `DemoOnly-2026!`. These are disposable demonstration values, not a real service login. They exist only in the test browser's storage; register a different fictional account on another browser.

## Before the 3 October review submission

- Team members must review, understand and genuinely contribute to their own modules. Appearance in the video alone does not satisfy the stated active-participation requirement.
- The checkout module owner still needs genuine implemented Sprint 1 progress if the assignment requires progress from every module owner. Deferring all checkout work creates that assessment risk. Agree a small contribution with the team and lecturer if necessary; do not invent one.
- Confirm actual product priorities, Sprint 1 scope and acceptance with the Product Owner/team. The user's stated roles are Amal as Scrum Master and Xiaoshan as Product Owner; this document does not imply either has approved the increment.
- Record real planning, check-ins, impediments, review feedback and retrospective outcomes. Do not backdate meetings, task states or estimates.
- Review and integrate the code into the shared repository, preserve truthful author attribution, and create the agreed sprint tag after acceptance. No new repository is needed for this local build.
- Update Jira/Confluence with actual work and evidence. Agent verification is not a substitute for each student's test execution.
- Record the Sprint 1 review with every student personally appearing and presenting. Keep the complete video at or below 30 minutes, and check the actual submission instructions/time.

## Proposed next-sprint backlog, not completed work

- Authenticated checkout flow with address validation.
- Explicitly simulated payment outcomes; no real payment data.
- Order confirmation and reference, with cart clear only on success.
- End-to-end checkout tests, further accessibility checks and cross-browser testing.

The final project must still meet all requirements in the assignment. This local prototype does not guarantee an assessment result.
