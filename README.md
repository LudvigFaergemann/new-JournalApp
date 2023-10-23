# new-JournalApp

## Configuration
add your own firebase config details in the ./services/firebase.js file.
run 'npm install'.
run 'npx expo start'.

The app should then be accesible in Expo Go

Make sure firebase has firestore and storage enabled and that those are in test mode, not production.
You might need to add two collections to firestore, 1st journals 2nd feedback

## Content
The app opens in a sign in or register view.
In this stage the drawer will only display this view.
After signing in you should see a home screen where you can see a list of journals and add to that list.
In the drawer top left hand side you should see profile screen, feedback screen, and camera screen.
Each of those have there own functionality, all of which acceses data in firebase in some way.

