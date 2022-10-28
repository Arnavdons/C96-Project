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
  room_name=localStorage.getItem("room_name");
  function send(){
msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name:user_name,
massage:msg,
like:0
});
document.getElementById("msg").value="";

  }
function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_nme");
window.location="index.html";
}