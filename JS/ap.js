<!DOCTYPE html>
<html>
<head>
    <title>Lista de Tareas</title>
</head>
<body>
    <h1>Lista de Tareas</h1>

    <form id="agregarForm">
        <input type="text" id="nuevaTarea" placeholder="Nueva tarea" required>
        <button type="submit">Agregar tarea</button>
    </form>

    <h2>Tareas:</h2>
    <ul id="listaTareas">
        <!-- Las tareas se agregarán aquí dinámicamente -->
    </ul>

    <script>
        let tareas = [];

        function mostrarTareas() {
            const listaTareas = document.getElementById('listaTareas');
            listaTareas.innerHTML = '';

            for (let i = 0; i < tareas.length; i++) {
                const tarea = tareas[i];
                const estado = tarea.completada ? "[X]" : "[ ]";

                const li = document.createElement('li');
                li.textContent = estado + ' ' + tarea.tarea;

                if (!tarea.completada) {
                    const botonCompletar = document.createElement('button');
                    botonCompletar.textContent = 'Completar';
                    botonCompletar.addEventListener('click', function () {
                        tarea.completada = true;
                        mostrarTareas();
                    });
                    li.appendChild(botonCompletar);
                }

                listaTareas.appendChild(li);
            }
        }

        document.getElementById('agregarForm').addEventListener('submit', function (event) {
            event.preventDefault();
            
            const nuevaTareaInput = document.getElementById('nuevaTarea');
            const nuevaTarea = nuevaTareaInput.value;
            tareas.push({ tarea: nuevaTarea, completada: false });
            nuevaTareaInput.value = '';

            mostrarTareas();
        });

        function marcarCompletada() {
            let indice = parseInt(prompt("Ingresa el número de la tarea completada:"));
            if (indice >= 0 && indice < tareas.length) {
                tareas[indice].completada = true;
                mostrarTareas();
            } else {
                console.log("Índice de tarea inválido.");
            }
        }

        function cicloPrincipal() {
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
        }

        cicloPrincipal();
    </script>
</body>
</html>
