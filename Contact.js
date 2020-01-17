// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCtXYulzeGFNILThfKckjsNisihbM2gJBI",
    authDomain: "Carte conceptuelle.com",
    databaseURL: "https://carte-conceptuelle.firebaseio.com/",
    projectId: "carte-conceptuelle",
    storageBucket: "",
    messagingSenderId: "388701351694",
    appId: "1:388701351694:web:c2600894c1f9c4bc"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var messagesRef = firebase.database().ref('mydatabase');
  function submitForm(e){
     e.preventDefault();
     var name = document.getElementById('name').value;
     var email = document.getElementById('email').value;
     var message = document.getElementById('message').value;
     saveMessage(name,email,message);
  }
  document.getElementById('contact-section').addEventListener('submit',submitForm);
  function saveMessage(name,email,message){
     var newMessageRef = messagesRef.push();
   newMessageRef.set({
      name: name,
      email: email,
      message: message
   }) ;
 }