// collect data to be posted.
function post() {
var subject = document.getElementById("sub").value;
var comment = document.getElementById("commentBox").value;
var firstname = document.getElementById("first").value;
var lastname = document.getElementById("last").value;
var name =  firstname + " " + lastname;
displayObject(subject, comment, name);
}	

//Display data to the page
function displayObject(subject, comment, name){
document.getElementById("subject").innerHTML = subject;
document.getElementById("comment").innerHTML = comment;
document.getElementById("name").innerHTML = "- " + name;
}