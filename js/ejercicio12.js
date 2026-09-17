function convertir(){
    var dinero = document.getElementById("pesos").value;
    if (dinero==""){
        alert("El campo no puede estar vacio");
    } else if (isNaN(parseInt(dinero))){
        alert("Debes de ingresar un numero");
    } else {
        var resultado=(parseInt(dinero)/17.22);
        document.getElementById("resultadoP").innerHTML=resultado;
    }
}