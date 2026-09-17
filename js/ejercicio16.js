const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => b !== 0 ? a / b : 'Error: División por cero';

function calcularOperacion(operacion){
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;

    if (numero1=="" || numero2=="" || isNaN(numero1) || isNaN(numero2)){
        Swal.fire("Ingrese un numero valido");
    } else {
        numero1 = Number(numero1);
        numero2 = Number(numero2);
        let resultado;

        if (operacion=="1"){
            resultado =  sumar  (numero1, numero2);
        } else if (operacion=="2"){
            resultado = restar (numero1,numero2);
        } else if (operacion=="3"){
            resultado = multiplicar (numero1,numero2);
        } else if (operacion=="4"){
            resultado = dividir (numero1,numero2);
        }
        document.getElementById("resultado").innerHTML = resultado;
    }
}