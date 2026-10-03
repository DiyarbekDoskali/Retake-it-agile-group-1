# Wearlane — Sprint 1 documentation hub

Prepared 3 October 2026 by Codex assisting Amal. Status: evidence-backed project snapshot plus clearly marked proposals and records awaiting source material. Not a record of meetings that have not been evidenced, and not Product Owner approval. Intended for linking from Confluence once the correct space is confirmed; GitHub documents alone do not satisfy the Confluence requirement.

## Navigation

- [Individual contribution evidence](SPRINT_1_CONTRIBUTION_EVIDENCE.md)
- [Technical design and setup](TECHNICAL_SETUP.md)
- [Testing and execution index](SPRINT_1_TEST_REGISTER.md)
- [Readiness, known limitations and presentation outline](SPRINT_1_READINESS_REVIEW.md)
- [Checkout scope/evidence clarification](CHECKOUT_INTEGRATION_REVIEW.md)
- [Jira](https://ue-germany-team-st01y82u.atlassian.net/jira/software/projects/CC/boards/35/backlog) · [GitHub](https://github.com/DiyarbekDoskali/Retake-it-agile-group-1) · [Live site](https://diyarbekdoskali.github.io/Retake-it-agile-group-1/)

## Product and team

Confirmed from Amal's instructions/current product: Wearlane is a clothing e-commerce coursework project for Group 1; Amal is Scrum Master, Xiaoshan is Product Owner. Module/account mapping and evidence are in the contribution index. The group remains the allocated group.

Proposed product framing for PO/team confirmation (not approved research findings):

- Problem: shoppers need a clear way to discover clothing, choose sizes and understand their basket before ordering.
- Target users: shoppers browsing everyday clothing on desktop and mobile.
- Vision/Product Goal: deliver one integrated, responsive clothing-store demo in which a registered customer can find suitable items, manage sizes/quantities and complete a simulated order with a reference.
- Stakeholders: the five students, lecturer/assessor and representative demo shoppers. These are proposed stakeholder categories, not recruited research participants.

## Scope and sprint progress

Amal clarified on 3 October that full checkout belongs in Sprint 2. The existing cart also states this. The following is a current feature snapshot, not reconstructed Sprint Planning commitment:

| Area | Current evidence | Scope / acceptance boundary |
| --- | --- | --- |
| Homepage/navigation | Implemented; reports and Escape fix exist | Sprint 1 increment; final responsive Escape browser retest pending |
| Catalogue/search/filter/details | Implemented; catalogue report/PDF exist | Sprint 1 increment; owner/reviewer confirmations remain separate |
| Cart | Implemented; reports/screenshots exist | Sprint 1 increment; accurate implementation attribution required |
| Accounts | Implemented; Xiaoshan's report and CC-8 evidence exist | Sprint 1 increment; not proof of PO acceptance or source authorship |
| Full checkout/payment/confirmation | Not in reviewed shared source | Planned Sprint 2, not automatically a Sprint 1 defect |
| Stanley's small Sprint 1 contribution | CC-7 asks to agree and contribute a baseline | Actual agreed scope and implemented progress not established by the submitted cart/product images |

Proposed Sprint 1 goal wording for team confirmation: demonstrate an integrated clothing browsing, size-selection, cart and demo-account journey, with traceable individual progress and tested interfaces for the next increment. Do not label this as the original agreed goal unless discussion evidence confirms it.

Sprint dates, original selected scope, individual capacity, estimates and original planning participants: awaiting actual records. The 3 October Jira check displayed Add dates and Start sprint; do not create artificial historical events. Record the actual planning date and any later Jira administrative setup distinctly.

## Working agreements — proposed, awaiting team adoption

These are usable proposals, not claims that the team followed them previously. Record the adoption date and participants when agreed.

- Coordination: use the course-requested Microsoft Teams workspace for shared records; WhatsApp can supplement day-to-day coordination. Amal reported creating the WhatsApp group. Capture dated decisions and action owners in Confluence. Do not replace evidence with invented transcripts.
- Check-ins: at least three weekly during active development, with actual participant/progress/blocker/action notes. Whether a particular asynchronous format meets lecturer expectations should be confirmed; no past compliance is certified here.
- Estimation: propose relative story points (1, 2, 3, 5, 8); discuss uncertainty and split larger work. Do not enter made-up past estimates.
- Integration: work on a scoped branch from current main, use Jira-referenced commits, review diffs, run tests/build, verify shared deployment, preserve author history. This is prospective guidance, not a claim all existing uploads used branches/reviews.
- Definition of Ready: clear user value and acceptance criteria, dependencies identified, prioritised, estimated and small enough for one sprint.
- Definition of Done: implemented and integrated; acceptance criteria met; relevant tests pass; no unresolved critical defect for the item; documentation/evidence updated; reviewed and ready for its owner to demonstrate.
- Team charter: each member owns technical delivery and documentation; disclose assistance; review integration effects; raise blockers early; agree response windows based on actual availability; every member presents personally.

## Actual records available versus missing

| Record | Evidence available | Missing before calling it complete |
| --- | --- | --- |
| Coordination | Amal's CC-1 update describes WhatsApp setup, Jira responsibilities and website/repository availability | Source discussion dates, participants, decisions, agreed availability and actions |
| Planning | Assigned Jira responsibilities and current increment exist | Original Sprint Goal, capacity, estimates, selected work/dependencies and dated team agreement |
| Check-ins/refinement | User says discussion evidence exists, but it has not yet been supplied for this documentation update | Actual dated messages/notes, participation, splits/priorities and next actions |
| Technical review | Codex-assisted reports and 3 October checks linked above | Separate team/PO inspection, acceptance, feedback and resulting backlog decisions |
| Retrospective | No actual retrospective record supplied | Dated participants, what helped/hindered, agreed improvement owners/dates and prior-action review (not applicable if this is genuinely the first retro) |
| Confluence | Correct destination not confirmed | Shared page links and each student's own contribution section |

For every supplied discussion, record: event date/time/timezone; record-created date; type/channel; actual participants; source reference; concise summary; decisions; blockers; action, owner and target date. If transcribed later from real messages, explicitly label it a later transcription and retain the source reference. Redact phone numbers/private contacts; do not publish private chat screenshots to the public repository without specific consent.

## Current decision log

| ID | Decision / observation | Basis and date | Approval boundary |
| --- | --- | --- | --- |
| D-01 | Clothing topic and Wearlane name | Amal's conversation instructions; exact original decision date not established | User choice recorded, not fabricated all-member vote |
| D-02 | React/Vite mock-data implementation | Current repository/source inspection, 3 October | Technical fact; original selection rationale/meeting not evidenced |
| D-03 | Full checkout planned for Sprint 2 | Amal's clarification on 3 October and current cart text | Scope clarification; CC-7 small baseline and individual progress still need team/PO confirmation |
| D-04 | README stays deleted for now | Amal's explicit response on 3 October | User instruction respected; assignment README requirement remains outstanding |
| D-05 | Evidence must separate ownership, actual commits and test execution | Current documentation review, 3 October | Editorial rule; not PO acceptance or certification of student work |

## Risk register — review assessment, not historical team vote

Owners below are proposed follow-up owners based on roles; action dates/acceptance must be confirmed.

| ID | Risk | Likelihood | Impact | Mitigation | Proposed owner | Status |
| --- | --- | --- | --- | --- | --- | --- |
| R-01 | Test uploads mistaken for individual implementation evidence | High | High: individual contribution requirement | Link actual source changes, assistance and personal demonstration; obtain each owner's confirmation | Each module owner; Amal coordinates | Open |
| R-02 | Sprint 1 and full checkout scope confused | High | High: incorrect readiness claims | Apply D-03; agree CC-7 baseline; distinguish future feature from current defect | Xiaoshan + Stanley | Open; documentation corrected |
| R-03 | Missing dated Scrum/Confluence records | High | High: process evidence incomplete | Supply actual discussion evidence; document accurately; confirm Confluence destination | Amal + all members | Awaiting sources/destination |
| R-04 | README remains absent | Certain | Medium: explicit repository requirement unmet | Obtain permission to restore a minimal setup/Confluence-link README | Amal | Open; kept deleted by request |
| R-05 | Navigation fix not rechecked in a mobile-sized browser | Medium | Medium: demo/accessibility issue may remain | Repeat responsive keyboard check; save actual result/version | Amal | Open; unit checks passed |
| R-06 | Presentation participation/submission not verified | Unknown | High: mandatory personal presentation | Confirm recording time, all five webcam segments, duration <=30 minutes and submission receipt | All members; Amal coordinates | Unverified |
| R-07 | Sprint version not tagged | Certain at last check | Medium: version traceability missing | Tag final reviewed Sprint 1 commit; link it in Confluence | Repository maintainer + team | Open; zero tags observed |

## Immediate follow-up register

1. Amal: supply the actual discussion screenshots/notes; confirm recording/submission arrangements. Target date: awaiting confirmation; review deadline is 3 October.
2. Xiaoshan: confirm Product Goal, priorities, Sprint 1 scope and acceptance/remaining gaps, including CC-7 baseline. Target: before the team's review closes; acceptance pending.
3. Every member: add their own evidence statement using the contribution index, with exact source/test links and assistance disclosure. Target: before recording; not marked complete.
4. Diyarbek/Lourdes: reconcile personal verification/reviewer/demo fields with actual activity. Target: before final evidence review.
5. Team: identify the Confluence space and publish/link this material plus actual meeting records; complete a real review/retro and tag the reviewed increment. Target: before submission; not yet verified.

These are proposed next actions, not assigned Jira deadlines or evidence the team accepted them. No meeting, vote, attendance, estimate, review approval or completion status has been fabricated.
