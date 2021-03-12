import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBTqxLHmlxW9q3ElqPBTKclvjCHtwwHjHk",
  authDomain: "resume-builder-c3f13.firebaseapp.com",
  projectId: "resume-builder-c3f13",
  storageBucket: "resume-builder-c3f13.appspot.com",
  messagingSenderId: "920863295276",
  appId: "1:920863295276:web:3884fc67d54ac4db940e89"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;
