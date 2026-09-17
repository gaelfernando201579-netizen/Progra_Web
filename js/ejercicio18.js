document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('nuevoElemento');
    const botonAgregar = document.getElementById('agregarBtn');
    const lista = document.getElementById('lista');

    function agregarElemento() {
        const texto = input.value.trim();

        if (texto !== '') {
            const li = document.createElement('li');
            li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
            const textoNodo = document.createTextNode(texto);
            li.appendChild(textoNodo);
            const botonEliminar = document.createElement('button');
            botonEliminar.textContent = 'Eliminar';
            botonEliminar.classList.add('btn', 'btn-danger', 'btn-sm');
            botonEliminar.addEventListener('click', function() {
                Swal.fire({
                    title: '¿Estás seguro?',
                    text: "El elemento será eliminado de la lista.",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#dc3545',
                    cancelButtonColor: '#6c757d',
                    confirmButtonText: 'Sí, eliminar',
                    cancelButtonText: 'Cancelar'
                }).then((result) => {
                    if (result.isConfirmed) {
                        li.remove(); 
                        
                        Swal.fire({
                            title: '¡Eliminado!',
                            text: 'El elemento ha sido borrado.',
                            icon: 'success',
                            timer: 1500,
                            showConfirmButton: false
                        });
                    }
                });
            });

            li.appendChild(botonEliminar);
            
            lista.appendChild(li);
            
            input.value = '';
            input.focus();
        } else {
            Swal.fire({
                icon: 'warning',
                title: 'Campo vacío',
                text: 'Escribe algo para agregar a la lista.',
                confirmButtonColor: '#0d6efd'
            });
        }
    }

    botonAgregar.addEventListener('click', agregarElemento);

    input.addEventListener('keypress', function(evento) {
        if (evento.key === 'Enter') {
            agregarElemento();
        }
    });
});