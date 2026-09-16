function convertir(){
    var km = document.getElementById("kilometros").value;
    if (km==""){
        alert("El campo no puede estar vacio");
    } else if (isNaN(Number(km))){
        alert("Debes de ingresar un numero");
    } else {
        var resultado=(Number(km)*0.621371);
        document.getElementById("resultadoK").innerHTML=resultado
    }
}