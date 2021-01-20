var firebaseUrl = 'https://projekat-6112b-default-rtdb.firebaseio.com/';
var firebaseKnjige = "knjige.json";

var korpa = [];
var knjige = [];

var temp2 = `
<tr>
<th scope="row" class="border-0">
<div class="p-2">
    <img src="#book_cover"
        alt="Naslovna stranica knjige" width="70"
        class="img-fluid rounded shadow-sm">
    <div class="ml-3 d-inline-block align-middle">
        <h5 class="mb-0"> <a href="#"
                class="text-dark d-inline-block align-middle">#book_name</a></h5><span
            class="text-muted font-weight-normal d-block">#author_name</span>
    </div>
</div>
</th>
<td class="border-0 align-middle text-center"><strong>#book_cost</strong></td>
<td class="border-0 align-middle text-center"><input class="quantity" min="1"
    name="quantity" value="1" type="number" id="#input_id" onchange="DisplayValue();"></td>
<td class="border-0 align-middle text-center"><button
    class="btn btn-danger btn-sm rounded-0" type="submit"
    data-placement="top" title="Obrisi" onclick="RemoveFromCart(#book_id);"><i class="fa fa-trash"></i></button>
</td>
</tr>`;

function GetCartBooks() {
    $.ajax({
        url: firebaseUrl + firebaseKnjige,
        type: "GET",
        success: function (data) {
            for (var i in data) {
                knjige.push(data[i]);
            }
            LoadCart();
        }
    });
}

function AddToCart(id) {
    if (!korpa.includes(id)) {
        korpa.push(id);
        localStorage.setItem("cart", korpa);
    } else {
        alert("Vec je u korpi");
    }
    UpdateCartText();
}

function LoadCart() {
    if (localStorage.getItem("cart")) {
        var elements = localStorage.getItem("cart").split(',');
    }
    for (var i in elements) {
        korpa[i] = parseInt(elements[i]);
    }
    for (var i in korpa) {
        var knjiga = temp2;
        knjiga = knjiga.replaceAll("#book_id", i);
        knjiga = knjiga.replace("#book_cover", knjige[korpa[i]].slika);
        knjiga = knjiga.replace("#input_id", "input_" + i);
        knjiga = knjiga.replace("#book_name", knjige[korpa[i]].naziv);
        knjiga = knjiga.replace("#book_cost", knjige[korpa[i]].cena + " RSD");
        knjiga = knjiga.replace("#author_name", knjige[korpa[i]].autor);

        if(document.querySelector("tbody")){
            document.querySelector("tbody").innerHTML += knjiga;
        }
    }
    DisplayValue();
    UpdateCartText();
}

function DisplayValue() {
    var total = 0;
    for (var i in korpa) {
        if(document.getElementById("input_" + i)){
            total += parseInt(knjige[korpa[i]].cena * document.getElementById("input_" + i).value);
        }
    }
    if (document.getElementById("totalcost")) {
        document.getElementById("totalcost").innerText = total + " RSD";
    }
}

function UpdateCartText(){
    var num = korpa.length;
    document.getElementById("cartText").innerText = "Korpa (" + num + ")";
}

function RemoveFromCart(id) {
    korpa.splice(id, 1);
    localStorage.setItem("cart", korpa);
    location.reload();
}

$(document).ready(function () {
    GetCartBooks();
});