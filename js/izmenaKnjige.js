var firebaseUrl = 'https://projekat-6112b-default-rtdb.firebaseio.com/';
var firebaseKnjige = "knjige.json";
var knjige = [];

function GetBook() {
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
    document.getElementById("Title").value = knjige[id].naziv;
    document.getElementById("Author").value = knjige[id].autor;
    document.getElementById("Year").innerHTML = "<b>Godina izdanja: </b>" + knjige[id].godinaIzdavanja;
    document.getElementById("ISBN").innerHTML = "<b>ISBN:</b> " + knjige[id].isbn;
    document.getElementById("PgNum").value = knjige[id].brojStranica;
    document.getElementById("CoverType").value = knjige[id].tipPoveza;
    document.getElementById("Writting").value = knjige[id].pismo;
    document.getElementById("Language").value = knjige[id].jezik;
    document.getElementById("Score").innerHTML = "<b>Ocena:</b> " + knjige[id].ocena;
    document.getElementById("Price").value = knjige[id].cena;
    document.getElementById("Desc").innerHTML = knjige[id].opis;
}

$(document).ready(function(){
    GetBook();
});