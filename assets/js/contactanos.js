document.querySelector('input[name="txtnombre"]').addEventListener("keypress",function(event){
    var longitud=document.querySelector('input[name"txtnombre"]').Value.length;
    if((ascii>=48 &&ascii<=57) ||(ascii==46)){
        window.event.preventDefault();
        return;

    }
});
document.querySelector('input[name="txtnombre"]').addEventListener("keypress",function(event){
    var longitud=document.querySelector('input[name"txtnombre"]').Value.length;
    if((ascii>=48 &&ascii<=57) ||(ascii==46)){
        window.event.preventDefault();
        return;
    }
});

document.querySelector('input[name="txtmensaje"]').addEventListener("keypress",function(event){
    var longitud=document.querySelector('input[name"txtmensaje"]').Value.length;
    if(longitud>=253){
        window.event.preventDefault();
        return;
    }
});
function registrar(frm){
    
    test=/^\s*$/;
    if(test.test(frm.txtnombre.value)){
        window.event.preventDefault();
        alert("Ingrese su nombre");
        return;

    }
    if(test.test(frm.txtapellido.value)){
        window.event.preventDefault();
        alert("Ingrese su apellido");
        return;
}
test=/^[0-9][0-9]{6,8}$/;
if(!test.test(frm.txttelefono.value)){
    window.event.preventDefault();
    alert("Telefono entre 7 a 9 digitos");
    return;

}
test=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
if(!test.test(frm.txtemail.value)){
window.event.preventDefault();
    alert("Formato de correo incorrecto");
    return;

}
alert("datos ingresados");
}
