function verificar(){
    var edad = document.getElementById("edad").value;
    if (edad==""){
        alert("El campo no puede estar vacio");
    } else if (isNaN(Number(edad))){
        alert("Debes de ingresar un numero");
    } else if (parseInt(edad)<18){
        document.getElementById("resultadoE").innerHTML="No puedes votar";
    } else {
        document.getElementById("resultadoE").innerHTML="Puedes votar";
    }
}