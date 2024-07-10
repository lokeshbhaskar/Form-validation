var nameError = document.getElementById('nameError');
var phoneError = document.getElementById('phoneError');
var emailError = document.getElementById('emailError');
var passError = document.getElementById('passError');
var countryError = document.getElementById('countryError');
var checkError = document.getElementById('checkError');
var submitError = document.getElementById('submitError');


function nameValidate() {
    var name = document.getElementById('exampleInputName').value;

    if (name.length == 0) {
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = 'Enter your fullname';
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check" style="color: #63E6BE;"></i>';
    return true;
}

function phoneValidate() {
    var phone = document.getElementById('exampleInputPhone').value;

    if (phone.length == 0) {
        phoneError.innerHTML = 'phone number is required'
        return false;
    }
    if (phone.length != 10) {
        phoneError.innerHTML = 'phone no should be 10'
        return false;
    }
    else {
        phoneError.innerHTML = '<i class="fa-solid fa-circle-check" style="color: #63E6BE;"></i>';
        return true;
    }
}

function emailValidate() {
    var email = document.getElementById('exampleInputEmail').value;

    if (email.length == 0) {
        emailError.innerHTML = 'email is required'
        return false;
    }
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = 'email is incorrect';
        return false;
    }
    else {
        emailError.innerHTML = '<i class="fa-solid fa-circle-check" style="color: #63E6BE;"></i>';
        return true;
    }
}
function passValidate() {
    var password = document.getElementById('exampleInputPassword1').value;
    if (password.length <8) {
        passError.innerHTML = 'password should be more than 8';
        return false;
    }
    if (!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)){
        passError.innerHTML = 'enter correct password'; 
        return false;
    }
    passError.innerHTML = '<i class="fa-solid fa-circle-check" style="color: #63E6BE;"></i>';
        return true;
}

function countryValidate(){
    var selectedCountry = document.getElementById('country').value;
    if(selectedCountry.length ==0){
        countryError.innerHTML= 'select your country';
    }
    else{
        countryError.innerHTML = "Selected country: " + selectedCountry;
    }
}
function validateChecked(){
    var checkbox = document.getElementById('myCheckbox');

    if(checkbox.checked){
        checkError.innerHTML= 'checkbox is checked'
        return true;
    }
    checkError.innerHTML= 'checkbox is unchecked'
    return false;
}
function validateForm(){
    if(!nameValidate() || !phoneValidate() || !emailValidate()||!passValidate() || !countryValidate() ||!validateChecked()){
        submitError.innerHTML= 'Please fil all the boxes';
        return false;
    }
}