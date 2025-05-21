// to display current date
// n =  new Date();
// y = n.getFullYear();
// m = n.getMonth() + 1;
// d = n.getDate();
// document.getElementById("date").innerHTML = d + "/" + m + "/" + y;

//to display username
function fetchUsername(){
   let username =  document.getElementById('username').value;
   sessionStorage.setItem("username", username);
}
let username =  sessionStorage.getItem("username");
let usernameClass = document.getElementsByClassName('fetch-username');
for(i=0; i<usernameClass.length; i++){
    usernameClass[i].innerHTML=username;
}
