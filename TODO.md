# Project Todos
Feature management, along with tracking any bugs that need to be fixed
## Bugs
- [x] Check padding/margin on .header in mobile view
- [ ] Hitting back keeps state even after logout/login
- [ ] Reloading on authenticated endpoints redirects to login
- [x] Tracks hover on mobile is smaller than hover on playlists
- [x] A user should not have to be logged in to use the Analyze feature via homepage
  - [x] Add a middleware to backend to use client credentials as backup if no access token is available
- [x] Account pill has hard coded name
- [x] Set a limit for max playlist/tracks fetched
- [x] Some sort of canFetchMore hook to not keep infinitely fetching same content over and over

## Features
- [ ] As a user, when I enter a spotify playlist URL in the home page:
  - [ ] I should get feedback if the URL is in an invalid format
  - [x] I should get feedback if the playlist does not exist or is private, a popup should prompt to log in if the playlist is private
  - [x] I should see that if a playlist is found, a loading screen after clicking the "Analyze" button redirects to playlist/:id
- [ ] As a user, when I click a playlist in the library view:
  - [x] I should be redirect to /playlist/:id
  - [x] I should see a table of songs by index, name, album, and length
  - [ ] I should see a menu to analyze playlist
  - [ ] I should see a play icon when I hover over a track and on clicking it should open a spotify link in another tab
- [x] As a user, when I view my library, I should be able to filter playlists by author and title
- [x] As a user, I should see a footer with app credits, disclaimer, terms of use, and a privacy policy
- [x] As a user, I should be able to load more than max playlists/songs by either scrolling in the library/playlists page or clicking a load more button
- [ ] As a user, I should be able to favorite playlists by clicking the heart icon on the playlist card in my library
- [x] As a user, I should not be able to request more than 3000 items
- [x] As a user, I should not be able to request more than 1000 playlists
- [x] As a user, I should see more than 50 items at a time
- [ ] As a user, I should see my top artists/tracks by time periods


## Misc
- [x] Refactor components for reuse
- [ ] Refactor api calls into api folder
- [x] Refactor infinite scroll to a custom hook
- [ ] Refactor playlist track view to table view
