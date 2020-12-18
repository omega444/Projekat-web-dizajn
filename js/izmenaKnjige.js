var firebaseUrl = 'https://projekat-6112b-default-rtdb.firebaseio.com/';
var firebaseKnjige = "knjige.json";
var knjige = [];

function GetData() {
    $.ajax({
        url: firebaseUrl + firebaseKnjige,
        type: "GET",
        success: function(data){
            ucitajKnjigu(data);
        }
    });
}

function ucitajKnjigu(json){
    var id = localStorage.getItem("bookID");
    for (var i in json){
        knjige.push(json[i]);
    }

    document.getElementById("Cover").src = knjige[id].slika;
    document.getElementById("Title").innerHTML = knjige[id].naziv;
    document.getElementById("Author").innerHTML = knjige[id].autor;
    document.getElementById("Year").innerHTML = "<b>Godina izdanja: </b>" + knjige[id].godinaIzdavanja;
    document.getElementById("ISBN").innerHTML = "<b>ISBN:</b> " + knjige[id].isbn;
    document.getElementById("PgNum").innerHTML = knjige[id].brojStranica;
    document.getElementById("CoverType").innerHTML = knjige[id].tipPoveza;
    document.getElementById("Writting").innerHTML = knjige[id].pismo;
    document.getElementById("Language").innerHTML = knjige[id].jezik;
    document.getElementById("Score").innerHTML = "<b>Ocena:</b> " + knjige[id].ocena;
    document.getElementById("Price").innerHTML = knjige[id].cena;
    document.getElementById("Desc").innerHTML = knjige[id].opis;
}

$(document).ready(function(){
    GetData();
});