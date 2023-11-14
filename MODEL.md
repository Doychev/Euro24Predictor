Structure:

0. Splash
1. Login
   1.1. Registration
   1.2. Forgot pass

2. Home
3. View games
   3.1. View game details?
4. Make/edit prediction
5. Leagues / Join league
6. View league + leave league
7. Settings / about

Models:

- Game:

* id
* start time
* team1
* team2
* result

- League:

* id
* host
* participants

- League invite:

* id
* league id
* invitee id

- User profile:

* id (linked with auth)
* profile pic
* name

- Prediction:

* id
* user id
* game id
* result
