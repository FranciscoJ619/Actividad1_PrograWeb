let estudiantes=[];
function agregar(){
    var nombre = document.getElementById("nombre").value;
    var calificacion  = Number(document.getElementById("calificacion").value);

    if (nombre===""){
        alert("El campo 'nombre' no puede estar vacio");
    } else if(calificacion=="" || isNaN(Number(calificacion))){
        alert("Debe de ingresar una calificacion valida");
    } else {
        estudiantes.push({
            nombre: nombre,
            calificacion: calificacion
        });
    }
}

function calcular(){
    let promedio=estudiantes.reduce((total,estudiante)=>total+estudiante.calificacion,0)/estudiantes.length;
    let califMax=Math.max(...estudiantes.map(estudiante=>estudiante.calificacion));
    let califMin=Math.min(...estudiantes.map(e=>e.calificacion));

    document.getElementById("promedio").innerHTML=promedio
    document.getElementById("califMax").innerHTML=califMax;
    document.getElementById("califMin").innerHTML=califMin;
}