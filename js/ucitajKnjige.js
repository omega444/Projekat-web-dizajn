var firebaseUrl = 'https://projekat-6112b-default-rtdb.firebaseio.com/';
var firebaseKnjige = "knjige.json";
var knjige = [];
var knjigeID = [];
var temp = `
<div class="card mb-3">
    <div class="row no-gutters">
        <div class="col-md-4">
            <a href="pojedinacnaKnjiga.html" onclick="storeBookData(#book_id)"><img class="card-img" src="#book_cover"
                    alt="naslovnaStranica"></a>
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h2 class="card-title"><a href="pojedinacnaKnjiga.html#2" onclick="storeBookData(#book_id)">#book_name</a></h2>
                <h3 class="card-text">#author_name</h3>
                <div class="rating">
                
                    <div class="rating_bar">
                        <span class="rate_1" onclick="Oceni(#book_id, 1)"></span>
                        <span class="rate_2" onclick="Oceni(#book_id, 2)"></span>
                        <span class="rate_3" onclick="Oceni(#book_id, 3)"></span>
                        <span class="rate_4" onclick="Oceni(#book_id, 4)"></span>
                        <span class="rate_5" onclick="Oceni(#book_id, 5);"></span>
                    </div>
                    
                </div>
                <p class="ocena">#book_score</p>
                <p class="cena">#book_price</p>
                <button type="button" class="btn btn-primary" onclick="AddToCart(#book_id);">Dodaj u korpu</button>
                <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#proveraBrisanja" onclick="ObrisiID(#book_id)">Obrisi knjigu</button>
            </div>
        </div>
    </div>
</div>`;

var deleteID;

function GetBooks() {
    $.ajax({
        url: firebaseUrl + firebaseKnjige,
        type: "GET",
        success: function(data){
            dodajKnjige(data);
        }
    });
}

function dodajKnjige (json) {
    for (var i in json){
        knjige.push(json[i]);
        knjigeID.push(i);
    }
    for(var i in knjige){
        var knjiga;
        knjiga = temp;
        knjiga = knjiga.replaceAll("#book_id", i);
        knjiga = knjiga.replace("#book_name", knjige[i].naziv);
        knjiga = knjiga.replace("#book_cover", knjige[i].slika);
        knjiga = knjiga.replace("#author_name", knjige[i].autor);
        knjiga = knjiga.replaceAll("#starBookID", i);
        knjiga = knjiga.replace("#book_score", knjige[i].ocena + "/5");
        knjiga = knjiga.replace("#book_price", knjige[i].cena + " RSD");
        document.getElementById("container").innerHTML += knjiga;
    }
}

function ObrisiID(id){
    deleteID = id;
}

function Obrisi(){
    $.ajax({
        url: firebaseUrl + "knjige/"+ knjigeID[deleteID] + ".json",
        type: "DELETE",
        success: function(data){
            location.reload();
        }
    });
}

function Oceni(id, ocena){
    alert("Ocenili ste knjigu \"" + knjige[id].naziv + "\" sa ocenom " + ocena);
}

function storeBookData(id){
    localStorage.setItem('bookID', id);
}

$(document).ready(function(){
    GetBooks();
});