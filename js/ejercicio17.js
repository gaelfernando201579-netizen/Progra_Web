document.addEventListener('DOMContentLoaded', () => {
    const inputTarea = document.getElementById('input-tarea');
    const btnAgregar = document.getElementById('btn-agregar');
    const listaTareas = document.getElementById('lista-tareas');
    const crearGestorTareas = () => {
        const claveLS = 'tareas_ejercicio_17';

        const obtenerTareas = () => {
            const tareasJSON = localStorage.getItem(claveLS);
            return tareasJSON ? JSON.parse(tareasJSON) : [];
        };

        const agregarTarea = (nombreTarea) => {
            const tareas = obtenerTareas(); 
            tareas.push({ tarea: nombreTarea, completada: false });
            localStorage.setItem(claveLS, JSON.stringify(tareas));
        };

        const eliminarTarea = (index) => {
            const tareas = obtenerTareas();
            tareas.splice(index, 1);
            localStorage.setItem(claveLS, JSON.stringify(tareas));
        };

        return {
            obtener: obtenerTareas,
            agregar: agregarTarea,
            eliminar: eliminarTarea
        };
    };

    const manejarTareas = crearGestorTareas();

    const renderizarTareas = () => {
        listaTareas.innerHTML = '';
        const tareas = manejarTareas.obtener();

        tareas.forEach((item, index) => {
            const li = document.createElement('li');
            li.textContent = item.tarea;

            const btnEliminar = document.createElement('button');
            btnEliminar.textContent = 'Eliminar';
            btnEliminar.className = 'btn-eliminar';
            btnEliminar.onclick = () => solicitarEliminacion(index);

            li.appendChild(btnEliminar);
            listaTareas.appendChild(li);
        });
    };

    btnAgregar.addEventListener('click', () => {
        const valorTarea = inputTarea.value.trim();

        if (valorTarea === '') {
            Swal.fire({
                icon: 'warning',
                title: 'Campo vacío',
                text: 'Por favor, escribe una tarea antes de agregar.',
                confirmButtonColor: '#3085d6'
            });
            return;
        }

        manejarTareas.agregar(valorTarea);
        inputTarea.value = '';
        renderizarTareas();
    });

    const solicitarEliminacion = (index) => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: "Esta tarea se eliminará permanentemente.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                manejarTareas.eliminar(index);
                renderizarTareas();
                
                Swal.fire(
                    '¡Eliminada!',
                    'La tarea ha sido borrada.',
                    'success'
                );
            }
        });
    };

    renderizarTareas();
});