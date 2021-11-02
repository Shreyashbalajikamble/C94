
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyBZnsL1cTBSUoS1eIUvJdix4_gmd0tD6ng",
      authDomain: "kwitter-app-b0c79.firebaseapp.com",
      databaseURL: "https://kwitter-app-b0c79-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-b0c79",
      storageBucket: "kwitter-app-b0c79.appspot.com",
      messagingSenderId: "890799003837",
      appId: "1:890799003837:web:59029727d1dd1ca2ab3fd4"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
function addRoom(){
room=document.getElementById("add_room").value;
firebase.database().ref("/").child(room).update({
      room1 : room,
})
}
