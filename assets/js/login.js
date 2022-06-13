var usuario = document.querySelector('input[type=text]');
var clave = document.querySelector('input[type=password]');

usuario.addEventListener('focus', function (event) {
    event.target.style.background = 'white';
    event.target.style.color = 'brown';

});

usuario.addEventListener('blur', function (event) {
    event.target.style.background = '#C54646';
    event.target.style.color = 'black';

});

clave.addEventListener('focus', function (event) {
    event.target.style.background = 'white';
    event.target.style.color = 'brown';

});

clave.addEventListener('blur', function (event) {
    event.target.style.background = '#C54646';
    event.target.style.color = 'black';

});

var ususarios = ["Angelogomez", "Dennisleon", "Rosariovenegas","Victormallco"];
var claves = ["Angelogomez123", "Dennisleon123", "Rosariovenegas123", "Victormallco123"];

function cargar(frm) {
    var usu = frm.txtusuario.value;
    let i = -1;
    for (let j = 0; j < ususarios.length; j++) {
        if (ususarios[j] == usu) {
            i = j; break;
        }
    }

    if (i == -1) {
        window.event.preventDefault();
        alert("Usuario no existe, intente otra vez");
    }

    var clave=frm.txtclave.value;
    if(clave==claves[i]){
        alert("Bienvenido estimado usuario," + usu)
        window.open("http://127.0.0.1:5500/index.html");

    }
    else {
        window.event.preventDefault();
        alert("Clave no coincide");
    }

}