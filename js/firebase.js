let firebaseConfig = {
    apiKey: "AIzaSyAIyo1T_wWoJ6FkDQv8pDnuDJnJyl5yDdY",
  authDomain: "phoenix-arad.firebaseapp.com",
  projectId: "phoenix-arad",
  storageBucket: "phoenix-arad.appspot.com",
  messagingSenderId: "1048083558686",
  appId: "1:1048083558686:web:502f8fe571b37448b6590f"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();