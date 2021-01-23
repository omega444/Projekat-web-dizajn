var firebaseUrl = 'https://projekat-6112b-default-rtdb.firebaseio.com/';
var firebaseKorisnici = "korisnici.json";
var korisniciLogin = [];

function GetUserLogin() {
    $.ajax({
        url: firebaseUrl + firebaseKorisnici,
        type: "GET",
        success: function(data){
            for (var i in data){
                korisniciLogin.push(data[i]);
            }
        }
    });
}

function Login(){
    var email = document.getElementById("InputEmail").value;
    var password = document.getElementById("InputPassword").value;
    var success = false;
    for(var i in korisniciLogin){
        if(email == korisniciLogin[i].email && password == korisniciLogin[i].password){
            success = true;
            alert("Uspesno ste se prijavili");
        }
    }
    if(success == false){
        alert("Pogresna sifra ili email");
    }
}

$(document).ready(function(){
    GetUserLogin();
});