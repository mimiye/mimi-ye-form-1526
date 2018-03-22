
// Shortcut for printing in JavaScript console
/*function p(param) {
    console.clear();
    console.log(param);
}*/

const main = document.querySelector(".main");
const form = document.querySelector("form");
const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const message = document.getElementById("message");
const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;


const collectedData = {
    fullname: null,
    email: null,
    message: null
};

const errors = {};

function validateForm(ev) {
    
    ev.preventDefault();

    //fullname
    if(fullname.value !== "") {

        collectedData.fullname = fullname.value;

    } else {
        errors.fn = "Full name is missing";
    } 

    //email
    if(email.value !== "") {

        if(pattern.test(email.value)) {

            collectedData.email = email.value;

        } else {
            errors.em = "Email is invalid";
        }

    } else {
        errors.em = "Email is missing";
    }

    //message
    if(message.value !== "") {

        collectedData.message = message.value;

    } else {
        errors.me = "Message is missing";
    }
    
    
    
    //print
    if (Object.keys(errors).length === 0) {
        console.log(collectedData);
    } else {
        console.log(errors);
        fullname.value = null;
        email.value = null;
        message.value = null;
    }
  
}   
    
form.addEventListener("submit", validateForm);
