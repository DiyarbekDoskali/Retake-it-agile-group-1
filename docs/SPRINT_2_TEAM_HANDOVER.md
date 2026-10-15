# Wearlane — Sprint 2 team handover

Prepared 15 October 2026. Sprint 2 review deadline: 17 October. Suggested internal target: finish personal checks and fixes on 16 October, leaving time for the recording and submission.

The integrated Sprint 2 implementation is prepared; see the root README for publication and live verification status. The responsibilities below are **review and follow-up assignments to confirm**, not claims that these people wrote or tested the supplied changes. Each member must understand their area, make meaningful technical progress and record their actual contribution.

## What each person should do now

| Member | Area to review and personally demonstrate | Concrete review/test work |
| --- | --- | --- |
| Amal — Scrum Master | Routes, navigation and mobile integration in `src/main.jsx` | Run the desktop and mobile journey; check keyboard/menu behaviour; record actual coordination, blockers and decisions |
| Xiaoshan — Product Owner | Sign-in gate, safe return route and current-account checks | Test guest checkout, registration/login return and another-tab sign-out; inspect acceptance criteria and record the actual acceptance decision |
| Diyarbek | Product/size/quantity validation and order items in `src/checkout.js` | Check sold-out items, invalid sizes/quantities, trusted catalogue prices and the item snapshot; review/add a relevant validation test |
| Lourdes | Shared totals, order summary and cart recovery | Test delivery below/at/above EUR 35, different sizes, decline, success and cart preservation; review/add a relevant totals or recovery test |
| Chidi / Stanley | Delivery form, simulated payment and confirmation in `src/Checkout.jsx` | Test required fields, both payment outcomes, repeat clicks and confirmation refresh; review/add a relevant form or order test |

If a defect is found, report it and coordinate a fix. Do not invent a defect or unnecessary change merely to create a commit. Technical contribution can include a real, useful automated test or accessibility improvement that the member understands and completes. Confirm the course's individual-work expectations; testing alone is not a guarantee of satisfying them.

## Record the work after doing it

For each personally executed check, record:

```text
Tester:
Date and time:
Tested commit/version or source fingerprint:
Browser/device:
Feature and starting conditions:
Steps:
Expected result:
Actual result:
Pass / Fail / Blocked:
Screenshot, bug or test link:
Actual code/test/documentation contribution, if any:
```

In Jira, open the correct Sprint 2 task, add the real result/evidence and update status to match reality. Mark Done only when its agreed criteria and review are satisfied. No Sprint 2 Jira issue numbers have been created by this local implementation.

On GitHub, upload personally written test notes or code/test changes using the contributor's own account and normal review workflow. Link the actual commit or pull request in Jira. Do not assign existing automated evidence to a person who did not execute or review it.

## Release and documentation checklist

- [ ] Confirm the Sprint 2 goal, task owners, capacity and estimates; use actual dates.
- [ ] Check the shared repository for newer teammate work before integrating this local copy.
- [ ] Review source and test evidence, then commit/publish the selected changes.
- [ ] Run the build/tests and verify the published cart-to-confirmation journey.
- [ ] Record the final commit/version and update the README's local-only release status.
- [ ] Update Jira and add a separate Sprint 2 page or section in Confluence with real decisions and evidence links.
- [ ] Verify the professor can access the repository, Jira, documentation and recording.
- [ ] Record the Product Owner's actual review result and any unfinished backlog items.
- [ ] Hold/record the real retrospective: improvement, owner and next action. Do not invent past meetings.
- [ ] All five members personally appear and present; keep the complete recording at or below 30 minutes.
- [ ] Submit by the course's exact 17 October deadline and required channel.

## Suggested presentation order

1. Amal: Sprint Goal, real work tracking, integration and mobile/keyboard evidence.
2. Xiaoshan: priorities, acceptance criteria, sign-in/return behaviour and actual review findings.
3. Diyarbek: product/size validation, trusted prices and order snapshot.
4. Lourdes: totals, delivery threshold, cart preservation and completion.
5. Chidi/Stanley: delivery form, simulated decline/success and confirmation refresh.

Aim for roughly 4–5 minutes each, leaving room within the 30-minute total. Explain only work and tests each presenter genuinely understands and performed or reviewed. Demonstrate the full checkout journey once; use focused examples for the other sections.
