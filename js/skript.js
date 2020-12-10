var firebaseUrl = 'https://web-dizajn-37bc4-default-rtdb.firebaseio.com/';
var firebaseKnjige = "knjige.json";
var firebaseKorisnici = "korisnici.json";
var knjige = [];
var korisnici = [];
var firebaseJSON;

function GetData() {
    $.ajax({
        url: firebaseUrl + firebaseKnjige,
        type: "GET",
        success: function(data){
            dodajKnjige(data);
        }
    });
    $.ajax({
        url: firebaseUrl + firebaseKorisnici,
        type: "GET",
        success: function(data){
            dodajKorisnika(data);
        }
    });
}

function dodajKorisnika(json) {
    for (var i in json){
        korisnici.push(json[i]);
    }
}

function dodajKnjige (json) {
    for (var i in json){
        knjige.push(json[i]);
    }
    document.getElementById("bookName").innerText=knjige[0].naziv;
}

console.log("Script running");
$(document).ready(function(){
    GetData();
});