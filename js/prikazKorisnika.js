var firebaseUrl = 'https://projekat-6112b-default-rtdb.firebaseio.com/';
var firebaseKorisnici = "korisnici.json";
var korisnici = [];

function GetUsers() {
    $.ajax({
        url: firebaseUrl + firebaseKorisnici,
        type: "GET",
        success: function(data){
            ucitajKorisnika(data);
        }
    });
}

function ucitajKorisnika(json){
    var id = localStorage.getItem("userID");
    for (var i in json){
        korisnici.push(json[i]);
    }

    document.getElementById("Name").innerHTML = korisnici[id].ime;
    document.getElementById("Lastname").innerHTML = korisnici[id].prezime;
    document.getElementById("Birth").innerHTML = "<b>Datum rodjenja: </b>" + korisnici[id].datumRodjenja;
    document.getElementById("Adress").innerHTML = "<b>Adresa: </b>" + korisnici[id].adresa;
    document.getElementById("Username").innerHTML = "<b>Korisnicko ime: </b>" + korisnici[id].username;
    document.getElementById("Email").innerHTML = "<b>Email: </b>" + korisnici[id].email;
    document.getElementById("Password").innerHTML = "<b>Sifra: </b>" + korisnici[id].password;
    document.getElementById("Phone").innerHTML = "<b>Broj telefona: </b>" + korisnici[id].telefon;
}

$(document).ready(function(){
    GetUsers();
});