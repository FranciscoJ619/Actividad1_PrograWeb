const manejarTareas = (() => {
    let tareas = [];
    function agregar(tarea) {
        tareas.push(tarea);
        guardar();
        renderizar();
    }
    function eliminar(indice) {
        tareas.splice(indice, 1);
        guardar();
        renderizar();
    }
    function guardar() {
        localStorage.setItem("tareas", JSON.stringify(tareas));
    }
    function obtenerTareas() {
    let datos = localStorage.getItem("tareas");

        if (datos !== null) {
            tareas = JSON.parse(datos);
        }
        renderizar();
    }
    function renderizar() {
        let lista = document.getElementById("listaTareas");

        lista.innerHTML = "";
        tareas.forEach((tarea, indice) => {
            let elemento = document.createElement("p");

            elemento.innerHTML = `${tarea} <button onclick="manejarTareas.eliminar(${indice})"> Eliminar </button>`;
            lista.appendChild(elemento);
        });
    }
    return {
        agregar: agregar,
        eliminar: eliminar,
        obtenerTareas: obtenerTareas
    };
})();
function agregarTarea() {
    let input = document.getElementById("tarea");
    let tarea = input.value.trim();

    if (tarea === "") {
        alert("Debes ingresar una tarea");
        return;
    }
    manejarTareas.agregar(tarea);
    input.value = "";
}
manejarTareas.obtenerTareas();