# Project Todos
Feature management, along with tracking any bugs that need to be fixed
# Bugs
- [ ] Check padding/margin on .header in mobile view
- [ ] Hitting back keeps state even after logout/login
- [ ] Reloading on authenticated endpoints redirects to login

# Features
- [ ] As a user, when I enter a spotify playlist URL in the home page:
  - I should get feedback if the URL is in an invalid format
  - I should get feedback if the playlist does not exist or is private
    - I should see a popup asking to log in if the playlist is private
  - I should see that if a playlist is found, I am redirected to playlist/:id
    - I should see a loading screen after clicking the "Analyze" button before being redirected
- [ ] As a user, when I click a playlist in the library view:
  - I should be redirect to /playlist/:id
  - I should see a table of songs by index, album, and length
  - I should see a menu to analyze playlist
- [ ] As a user, when I view my library, I should be able to filter playlists by author and title
- [ ] As a user, I should see a footer with app credits, disclaimer, terms of use, and a privacy policy

# Misc
- [ ] Refactor components for reuse