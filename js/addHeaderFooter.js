
var headerTemplate = ``;

var footerTemplate = ``;

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