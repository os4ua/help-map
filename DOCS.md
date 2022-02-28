# Documentation

Here I'm going to put together docs and architecture description.

Right now this app should start in a PoC mode with a very limited set of feature to prove its usefulness. All other improvements will be validated and added to further releases.

Main requirements for the app: simplicity in development and use. Ease of deployment (as less components as possible). Secure and safe, so, the enemy won't get any insights from the app.

## The concept and purpose of the application

This application mission is to give people chance to ask for help given address or location on the map.
A chance to mobile helper groups to help people if they can.

Concepts and terms:
- Group: group of people who has access to set of help requests available on map with basic description
- Group coordinator: a trusted and verified person who received requests for help, hires and manages other group member.
- Help request: an address (translated to pin on the map) with short description of necessary help and longer description with more details.
- Short description of help type is something like "need drinking water", "need food", "need powerbank", "need non-urgent medicine", "pet needs care", etc.
- Help request can go through states: PENDING(created_date), IN PROGRESS(group member ids), PROCESSED(outcome result description)
- System admins are people who can create group coordinators.

## Architecure of PoC

Tech stack:
- NextJS
- Okta
- Bing Maps
- DynamoDB

In the PoC version, Group Coordinator is responsible to add help requests to the map and share that with her group.

Admins and Group Coordinators are created in Okta manually.

Group Coordinators can create new members by sharing an invite link for a given person using any available method. Invite link can be used only once. It is responsibility of the Group Coordinator to hire only trusted group member who wouldn't share sensitive information to the enemy.

For people to find a coordinator to ask for help, we should have a page with list of group coordinators (without sharing any personal information) and a small form with a message for the coordinator.

All forms must be protected by captcha and IP throtling.
