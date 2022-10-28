
var firebaseConfig = {
  apiKey: "AIzaSyDz_2UGi5qxwf5lwilY_Nj8L0u3D4_3Hmk",
  authDomain: "kwitter-64293.firebaseapp.com",
  databaseURL: "https://kwitter-64293-default-rtdb.firebaseio.com",
  projectId: "kwitter-64293",
  storageBucket: "kwitter-64293.appspot.com",
  messagingSenderId: "890870991388",
  appId: "1:890870991388:web:105555097b0529b41e2dd9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
document.getElementById("wel").innerHTML="Welcome "+user_name;


function addroom(){
  room_name=document.getElementById("room_textbox").value;
  firebase.database().ref("/").child(room_name).update({
  purpose:"adding room name"
  });
  localStorage.setItem("room_name",room_name);
  window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("trending-rooms").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code
  console.log("Room name -"+Room_names);
  row="<div class='room_name' id='"+Room_names+"' onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
  document.getElementById("trending-rooms").innerHTML+=row;

  //End code
  });});}
getData();
function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}
function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";
}