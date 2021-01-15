var UsernameRegEx = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/;
var PasswordRegEx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
var EmailRegEx = /^[a-z0-9]+([.]?[[a-z0-9])+\@[a-z]+\.[a-z]{2,}$/;
var NameAndLastNameRegEx = /^[A-Z]{1}([a-z])*$/;
var AddressRegEx = /(\w\s?)+ \d+, (\w\s?)+/;
var PhoneRegEx = /^\d{3}-\d{3}-\d{3,4}$/;

var ValidUsername = false;
var ValidPassword = false ;
var ValidEmail = false;
var ValidName = false;
var ValidLastname = false;
var ValidDate = false;
var ValidAddress = false;
var ValidPhone = false;

function ValidateUsername(){
    var elementValue = document.getElementById('InputKorisnickoIme').value;
    if(elementValue.match(UsernameRegEx) && elementValue.length > 0){
        document.getElementById('InputKorisnickoIme').style.color = "#000000";
        ValidUsername = true;
    }else if(elementValue.length > 0){
        document.getElementById('InputKorisnickoIme').style.color = "#FF0000";
        ValidUsername = false;
    }else{
        document.getElementById('InputKorisnickoIme').style.color = "#000000";
        ValidUsername = false;
    }
    ButtonState();
}

function ValidatePassword(){
    var elementValue = document.getElementById('InputPasswordReg').value;
    if(elementValue.match(PasswordRegEx) && elementValue.length > 0){
        document.getElementById('InputPasswordReg').style.color = "#000000";
        ValidPassword = true;
    }else if(elementValue.length > 0){
        document.getElementById('InputPasswordReg').style.color = "#FF0000";
        ValidPassword = false;
    }else{
        document.getElementById('InputPasswordReg').style.color = "#000000";
        ValidPassword = false;
    }
    ButtonState();
}

function ValidateEmail(){
    var elementValue = document.getElementById('InputEmailReg').value;
    if(elementValue.match(EmailRegEx) && elementValue.length > 0){
        document.getElementById('InputEmailReg').style.color = "#000000";
        ValidEmail = true;
    }else if(elementValue.length > 0){
        document.getElementById('InputEmailReg').style.color = "#FF0000";
        ValidEmail = false;
    }else{
        document.getElementById('InputEmailReg').style.color = "#000000";
        ValidEmail = false;
    }
    ButtonState();
}

function ValidateName(){
    var elementValue = document.getElementById('InputIme').value;
    if(elementValue.match(NameAndLastNameRegEx) && elementValue.length > 0){
        document.getElementById('InputIme').style.color = "#000000";
        ValidName = true;
    }else if(elementValue.length > 0){
        document.getElementById('InputIme').style.color = "#FF0000";
        ValidName = false;
    }else{
        document.getElementById('InputIme').style.color = "#000000";
        ValidName = false;
    }
    ButtonState();
}

function ValidateLastname(){
    var elementValue = document.getElementById('InputPrezime').value;
    if(elementValue.match(NameAndLastNameRegEx) && elementValue.length > 0){
        document.getElementById('InputPrezime').style.color = "#000000";
        ValidLastname = true;
    }else if(elementValue.length > 0){
        document.getElementById('InputPrezime').style.color = "#FF0000";
        ValidLastname = false;
    }else{
        document.getElementById('InputPrezime').style.color = "#000000";
        ValidLastname = false;
    }
    ButtonState();
}

function ValidateDate(){
    var elementValue = document.getElementById('InputDatumRodjenja').value;
    
    if(elementValue.split('-')[0] > 1900 && elementValue.split('-')[0] < 2020 && elementValue.length > 0){
        document.getElementById('InputDatumRodjenja').style.color = "#000000";
        ValidDate = true;
    }else if(elementValue.length > 0){
        document.getElementById('InputDatumRodjenja').style.color = "#FF0000";
        ValidDate = false;
    }else{
        document.getElementById('InputDatumRodjenja').style.color = "#000000";
        ValidDate = false;
    }
    ButtonState();
}

function ValidateAddress(){
    var elementValue = document.getElementById('InputAdresa').value;
    if(elementValue.match(AddressRegEx) && elementValue.length > 0){
        document.getElementById('InputAdresa').style.color = "#000000";
        ValidAddress = true;
    }else if(elementValue.length > 0){
        document.getElementById('InputAdresa').style.color = "#FF0000";
        ValidAddress = false;
    }else{
        document.getElementById('InputAdresa').style.color = "#000000";
        ValidAddress = false;
    }
    ButtonState();
}

function ValidatePhone(){
    var elementValue = document.getElementById('InputTelefon').value;
    if(elementValue.match(PhoneRegEx) && elementValue.length > 0){
        document.getElementById('InputTelefon').style.color = "#000000";
        ValidPhone = true;
    }else if(elementValue.length > 0){
        document.getElementById('InputTelefon').style.color = "#FF0000";
        ValidPhone = false;
    }else{
        document.getElementById('InputTelefon').style.color = "#000000";
        ValidPhone = false;
    }
    ButtonState();
}

function ButtonState(){
    var element = document.getElementById('InputButton');
    if(ValidUsername && ValidEmail && ValidPassword && ValidName && ValidLastname && ValidAddress && ValidDate && ValidPhone){
        element.disabled = false;
    }else{
        element.disabled = true;
    }
}