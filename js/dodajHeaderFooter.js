
var headerTemplate = `
<nav class="navbar navbar-expand-lg navbar-light bg-light static-top">
<div class="container">
    <a class="navbar-brand" href="index.html">
        <img class="img-responsive pull-right" src="images/logo.png" alt="logo" />
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
        aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">

        <ul class="navbar-nav ml-auto">
            <li class="nav-item active"><a class="nav-link" href="index.html">Pocetna<span
                        class="sr-only">(current)</span></a></li>
            <li class="nav-item active"><a class="nav-link" href="upravljanjeKorisnicima.html">Upravljanje korisnicima</a></li>
            <li class="nav-item active"><a class="nav-link" href="#" data-toggle="modal"
                    data-target="#Modal">Prijava</a></li>
            <li class="nav-item active"><a class="nav-link" href="#" data-toggle="modal"
                    data-target="#Registracija" onclick="ButtonState();">Registracija</a></li>
            <li class="nav-item active"><a class="nav-link" href="korpa.html" id="cartText">Korpa</a></li>
        </ul>
    </div>
</div>
<div class="modal fade" id="Modal" tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="ModalLabel">Prijavite se</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form>
                    <div class="form-group">
                        <label for="InputEmail">E-mail adresa</label>
                        <input type="email" class="form-control" id="InputEmail"
                            aria-describedby="emailHelp">
                    </div>
                    <div class="form-group">
                        <label for="InputPassword">Sifra</label>
                        <input type="password" class="form-control" id="InputPassword">
                    </div>
                    <button type="button" class="btn btn-primary" onclick="Login();">Prijavi se</button>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Zatvori</button>
                </form>
            </div>
        </div>
    </div>
</div>
<div class="modal fade" id="Registracija" tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="ModalLabel">Registrujte se</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form>
                    <div class="form-group">
                        <label for="InputKorisnickoIme">Korisnicko ime</label>
                        <input type="text" class="form-control" id="InputKorisnickoIme" required oninput="ValidateUsername();">
                    </div>
                    <div class="form-group">
                        <label for="InputPassword">Sifra</label>
                        <input type="password" class="form-control" id="InputPasswordReg" required oninput="ValidatePassword();">
                    </div>
                    <div class="form-group">
                        <label for="InputEmail">E-mail adresa</label>
                        <input type="email" class="form-control" id="InputEmailReg"
                            aria-describedby="emailHelp" required oninput="ValidateEmail();">
                    </div>
                    <div class="form-group">
                        <label for="InputIme">Ime</label>
                        <input type="text" class="form-control" id="InputIme" maxlength="25" required oninput="ValidateName();">
                    </div>
                    <div class="form-group">
                        <label for="InputPrezime">Prezime</label>
                        <input type="text" class="form-control" id="InputPrezime" maxlength="25" required oninput="ValidateLastname();">
                    </div>
                    <div class="form-group">
                        <label for="InputDatumRodjenja">Datum rodjenja</label>
                        <input type="date" id="InputDatumRodjenja" class="form-control datepicker" required oninput="ValidateDate();">
                    </div>
                    <div class="form-group">
                        <label for="InputAdresa">Adresa</label>
                        <input placeholder="Ulica broj, Grad" type="text" class="form-control"
                            id="InputAdresa" required oninput="ValidateAddress();">
                    </div>
                    <div class="form-group">
                        <label for="InputTelefon">Broj telefona</label>
                        <input placeholder="xxx-xxx-xxxx" type="tel" class="form-control"
                            id="InputTelefon" required oninput="ValidatePhone();">
                    </div>
                    <button type="submit" class="btn btn-primary" id="InputButton">Registruj se</button>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Zatvori</button>
                </form>
            </div>
        </div>
    </div>
</div>
</nav>`;

var footerTemplate = `
<div class="footer-copyright text-center py-3">&copy; 2020 Copyright:
<a href="#"> Nenad Dinic</a>
</div>`;

function addHeader(){
    document.querySelector("header").innerHTML = headerTemplate;
}

function addFooter(){
    document.querySelector("footer").innerHTML = footerTemplate;
}

$(document).ready(function(){
    addHeader();
    addFooter();
});