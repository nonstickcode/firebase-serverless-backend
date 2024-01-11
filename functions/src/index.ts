import * as functions from "firebase-functions";

export const helloWorld = functions.https.onRequest((request, response) => {
  console.log("did this show up in logs?");
  response.send("Hello from Firebase! YAY!!!!!");
});
