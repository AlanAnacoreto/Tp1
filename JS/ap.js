// Lista de tareas
let tareas = [];

// Función para agregar una tarea a la lista
function agregarTarea() {
    let nuevaTarea = prompt("Ingresa una nueva tarea:");
    tareas.push({ tarea: nuevaTarea, completada: false });
    console.log("Tarea agregada: " + nuevaTarea);
}

// Función para mostrar la lista de tareas
function mostrarTareas() {
    console.log("Lista de tareas:");
    for (let i = 0; i < tareas.length; i++) {
        let estado = tareas[i].completada ? "[X]" : "[ ]";
        console.log(estado + " " + tareas[i].tarea);
    }
}

// Función para marcar una tarea como completada
function marcarCompletada() {
    let indice = parseInt(prompt("Ingresa el número de la tarea completada:"));
    if (indice >= 0 && indice < tareas.length) {
        tareas[indice].completada = true;
        console.log("Tarea marcada como completada: " + tareas[indice].tarea);
    } else {
        console.log("Índice de tarea inválido.");
    }
}

// Ciclo principal del programa
while (true) {
    let opcion = prompt("Elige una opción:\n1. Agregar tarea\n2. Marcar tarea como completada\n3. Mostrar tareas\n4. Salir");

    switch (opcion) {
        case "1":
            agregarTarea();
            break;
        case "2":
            marcarCompletada();
            break;
        case "3":
            mostrarTareas();
            break;
        case "4":
            console.log("¡Hasta luego!");
            return;
        default:
            console.log("Opción inválida.");
    }
}
