/*function hideChat() {
    document.getElementById('chat').hidden = true;
}

function showChat() {
    document.getElementById('chat').hidden = false;
}

const password = 2007;

let userInput = prompt('Enter in the password ',' ');

if (userInput == password) {
    return showChat()
} else {
    return hideChat()
}


document.addEventListener('click', hideChat);*/


var password = 2007;
var x = prompt("Enter in the password "," ");
if (x.toLowerCase() == password) {
 //alert("Come right in \n \n You've entered in the right password");
 window.location = "index1.html";
}
else {
//alert("please try again")
 window.location = "";
}
