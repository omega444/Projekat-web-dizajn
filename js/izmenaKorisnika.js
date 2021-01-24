var firebaseUrl = 'https://projekat-6112b-default-rtdb.firebaseio.com/';
var firebaseKorisnici = "korisnici.json";
var korisnici = [];

function GetUser() {
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

    document.getElementById("Name").value = korisnici[id].ime;
    document.getElementById("Lastname").value = korisnici[id].prezime;
    document.getElementById("Birth").value = korisnici[id].datumRodjenja;
    document.getElementById("Adress").value = korisnici[id].adresa;
    document.getElementById("Username").innerHTML = "<b>Korisnicko ime: </b>" + korisnici[id].username;
    document.getElementById("Email").value = korisnici[id].email;
    document.getElementById("Phone").value = korisnici[id].telefon;
}

$(document).ready(function(){
    GetUser();
});