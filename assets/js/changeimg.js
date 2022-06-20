function cambio(e) {
    var img = e.getAtrribute("data-prod");
    e.src = "media/" + img + "1" + ".jpg";
}

function regreso(e) {
    var img = e.getAttribute("data-prod");
    e.src = "media/" + img + ".jpg";
}
