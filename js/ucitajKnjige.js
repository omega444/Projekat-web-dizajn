var firebaseUrl = 'https://projekat-6112b-default-rtdb.firebaseio.com/';
var firebaseKnjige = "knjige.json";
var knjige = [];
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
			        <span class="rate_1"></span>
			        <span class="rate_2"></span>
			        <span class="rate_3"></span>
			        <span class="rate_4"></span>
                    <span class="rate_5"></span>
                </div>
                
            </div>
            <p class="ocena">#book_score</p>
            <p class="cena">#book_price</p>
            <button type="button" class="btn btn-primary">Dodaj u korpu</button>
        </div>
    </div>
</div>
</div>`;

function GetData() {
    $.ajax({
        url: firebaseUrl + firebaseKnjige,
        type: "GET",
        success: function(data){
            dodajKorisnike(data);
        }
    });
}

function dodajKorisnike (json) {
    console.log(json);
    for (var i in json){
        knjige.push(json[i]);
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

function storeBookData(id){
    localStorage.setItem('bookID', id);
}

$(document).ready(function(){
    GetData();
});