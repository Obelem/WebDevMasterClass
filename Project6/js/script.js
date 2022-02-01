/*  The query selector method is used to retrieve elements 
from the HTML DOM. It's practically interprets the HTML 
elements in a format that can be understood by javascript*/


/* It is good practice to declare your javascript variables
at the top of your page like I did here, especially if 
you want them to have a global scope */
let navCard = document.querySelector(".nav-card");
let menuBtn = document.querySelector(".menu");
let closeBtn = document.querySelector(".close");


/* -This is a function; as the name implies, it 
helps us perform specified functions in javascript. 

In this case below, the fuction
we intend to perform is to display the Navigation Card for
small screens */
function displayNavCard() {
    navCard.classList.add("display");
}


/* -Notice that Event Listeners are attached to the
html elements below to listen for when an event occurs on them.
In this case, the event listener listens for when a
"click event" occurs on the menu btn or close btn*/
function removeNavCard() {
    navCard.classList.remove("display");
}


// Event Listeners added to HTML elements
menuBtn.addEventListener("click", displayNavCard);
closeBtn.addEventListener("click", removeNavCard);