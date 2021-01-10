var firebaseConfig = {
    apiKey: "AIzaSyDTT1eQ8kK-y6838eQYWqoBnmf3tL4klbQ",
    authDomain: "raghav-rxuflm.firebaseapp.com",
    databaseURL: "https://raghav-rxuflm.firebaseio.com",
    projectId: "raghav-rxuflm",
    storageBucket: "raghav-rxuflm.appspot.com",
    messagingSenderId: "496557508690",
    appId: "1:496557508690:web:c1bcc2d2e35625e1e6778b",
    measurementId: "G-Y2HF1TZP1V"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addUser() {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "adding user"
    });
}
//ADD YOUR FIREBASE LINKS