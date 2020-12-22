var firebaseUrl = 'https://projekat-6112b-default-rtdb.firebaseio.com/';
var firebaseKorisnici = "korisnici.json";
var korisnici = [];
var temp = `
<tr>
    <th scope="row">#row</th>
        <td>#user_name</td>
        <td>#user_lastname</td>
        <td>#user_mail</td>
        <td>
            <ul class="list-inline m-0">
                <li class="list-inline-item">
                    <a class="btn btn-primary btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Prikazi detalje" href="pojedinacanKorisnik.html" onclick="storeUserData(#user_id)"><i class="fa fa-table"></i></a>
                </li>
                <li class="list-inline-item">
                    <button class="btn btn-danger btn-sm rounded-0" type="button" data-toggle="modal" data-target="#proveraBrisanja" data-placement="top" title="Obrisi"><i class="fa fa-trash"></i></button>
                </li>
            </ul>
        </td>
</tr>
`;

function GetData() {
    $.ajax({
        url: firebaseUrl + firebaseKorisnici,
        type: "GET",
        success: function (data) {
            dodajKorisnike(data);
        }
    });
}

function dodajKorisnike(json) {
    for (var i in json) {
        korisnici.push(json[i]);
    }

    for(var i in korisnici){
        var korisnik;
        korisnik = temp;
        korisnik = korisnik.replace("#user_id", i);
        korisnik = korisnik.replace("#row", i - -1);
        korisnik = korisnik.replace("#user_name", korisnici[i].ime);
        korisnik = korisnik.replace("#user_lastname", korisnici[i].prezime);
        korisnik = korisnik.replace("#user_mail", korisnici[i].email);
        document.getElementById("userlist").innerHTML += korisnik;
    }
}

function storeUserData(id){
    localStorage.setItem('userID', id);
}

$(document).ready(function () {
    GetData();
});