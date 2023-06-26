//pop-up feature in homepage
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
    var popup = document.getElementById("popup");
    popup.classList.add("visible");
    setTimeout(function() {
        popup.classList.remove("visible");
        // removing after 2 sec
    }, 3000);
// display after visting site within 1 sec
    }, 1000);
});

//feedback form validation function
var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validateName(){
    var name = document.getElementById('contact-name').value;

    if(name.length==0){
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Write full name';
        return false;
    }
    nameError.innerHTML = 'Valid';
    return true;
}
function validatePhone(){
    var phone = document.getElementById('contact-phone').value;

    if(phone.length==0){
        phoneError.innerHTML = 'Phone no required';
        return false;
    }
    if(phone.length !==10){
        phoneError.innerHTML = 'Phone no should be 10 digits';
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = 'Only digits required';
        return false;
    }
    phoneError.innerHTML = 'Valid';
    return true;
}
function validateEmail(){
    var email = document.getElementById('contact-email').value;

    if(email.length==0){
        emailError.innerHTML = 'Email is required';
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'Email Invalid';
        return false;
    }
    emailError.innerHTML = 'Valid';
    return true;
}
function validateMessage(){
    var message = document.getElementById('contact-message').value;
    var required = 25;
    var left = required - message.length;

    if(left>0){
        messageError.innerHTML = left + 'more characters required';
        return false;
    }
    messageError.innerHTML = 'Valid';
    return true;
}
function validateForm(){
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix error to submit';
        setTimeout(function(){submitError.style.display = 'none';},3000);
        return false;
    }
}
