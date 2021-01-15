var firebaseUrl = 'https://projekat-6112b-default-rtdb.firebaseio.com/';
var firebaseKorisnici = "korisnici.json";
var korisnici = [];

function GetUser() {
    $.ajax({
        url: firebaseUrl + firebaseKorisnici,
        type: "GET",
        success: function(data){
            for (var i in data){
                korisnici.push(data[i]);
            }
        }
    });
}

function Login(){
    var email = document.getElementById("InputEmail").value;
    var password = document.getElementById("InputPassword").value;
    var success = false;
    for(var i in korisnici){
        if(email == korisnici[i].email && password == korisnici[i].password){
            success = true;
            alert("Uspesno ste se prijavili");
        }
    }
    if(success == false){
        alert("Pogresna sifra ili email");
    }
}

$(document).ready(function(){
    GetUser();
});