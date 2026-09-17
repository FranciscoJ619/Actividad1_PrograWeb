function convertir(){
    var celsius = document.getElementById("gradosC").value;
    if (celsius==""){
        alert("El campo no puede estar vacio");
    } else if (isNaN(Number(celsius))){
        alert("Debes de ingresar un numero");
    } else {
        var resultado=(parseInt(celsius)*9/5)+32;
        document.getElementById("resultadoF").innerHTML=resultado
    }
}