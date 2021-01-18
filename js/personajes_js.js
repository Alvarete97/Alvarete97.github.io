
/*

var myObj, x;
myObj = {"name":"John", "age":30, "car":null};
x = myObj["name"];
document.getElementById("demo").innerHTML = x;

*/

//JS para la plataforma de seleccion de personajes


var elementoActual = 0;
var const elementos = 6;


$(document).ready(function(){
    while( elementoActual < elementos){
        
        if( elemntoActual !exist){
            getElementbyId ("subtitulo" + elementoActual).display(block);
            while( elementoActual == bd.elemento){
                document.getElementbyId("subtitulo" + elementoActual).innerHTML(
                    /*
                    <a class="a.Iconos" href = "/ +db_Id_Pj">
                    <img class = "icono:pj" src = " elementoActual.url">
                    </a>
                    */
                    );
            }
        }
    }
});


function objetoAjax(){
    var xmlhttp=false;
    try{
        xmlhttp = new ActiveXObject("Msxm12.XMLHTTP");
    }catch (e){
        try{
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }catch (E){
            xmlhttp = false;
        }
    }
    if (!xmlhttp && typeof XMLHttpRequest!='undefine') {
        xmlhttp = new XMLHttpRequest();
    }
    return xmlhttp;
}

function Enviar () {
    valor = document.getElementbyId('personaje').value;
    /*alert(valor);*/
    ajax = objetoAjax();
    ajax.open("POST", "personaje_Generico.html", true);
    ajax.onreadystatechange=function(){
        if (ajax.readyState == 4) {
            document.getElementbyId("resultado").innerHTML = ajax.responseText;
        }
    }
    /* Codificar la url para enviar los datos*/
    ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    ajax.send("personaje_selec" + valor);
}