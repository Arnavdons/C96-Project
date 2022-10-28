function adduser(){
user_name=document.getElementById("login_textbox").value;
localStorage.setItem("user_name",user_name);
window.location="Kwitter_room.html";
}