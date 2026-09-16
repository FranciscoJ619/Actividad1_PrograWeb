function calcular(){
    let cadena = document.getElementById("entrada").value;

    if (cadena===""){
        alert("El campo no puede estar vacio");
    } else {

        let arreglo=cadena.split(",");
        let numeros=arreglo.map(Number);

        if (!numeros.every(numero => !isNaN(numero))) {
            alert("La entrada debe contener solamente números separados por comas");
        } else {

            let maximo=Math.max(...numeros);
            let minimo=Math.min(...numeros);

            let suma=numeros.reduce((acc, valor) => acc + valor, 0);
            let promedio=suma/numeros.length;

            document.getElementById("numMax").innerHTML=maximo;
            document.getElementById("numMin").innerHTML=minimo;
            document.getElementById("numPro").innerHTML=promedio;
        }
    }
}