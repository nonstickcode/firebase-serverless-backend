# to deploy just enter - "**firebase deploy**" 

- to rebuild functions when changed.

- view logs in CLI with enter -  "**firebase functions:log**"

- https://us-central1-route-test-with-firebase.cloudfunctions.net/helloWorld is current route


Local Function testing 

"cd functions" to enter functions dir

"npm run-script" lint - checks for errors in typescript

"npm run-script" build - to compile the typescript

<!-- lib folder index.js is where compiled typescript goes -->

"firebase serve --only functions" - then use url to local host to test

