// Esperamos a que el contenido HTML esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // 1. Capturar los elementos del DOM
    const entradaEdad = document.getElementById('edad');
    const entradaVoto = document.getElementById('voto');
    const btnConvertir = document.getElementById('btn-convertir');
    const mensajeError = document.getElementById('mensaje-error');

    // 2. Agregar evento de clic al botón
    btnConvertir.addEventListener('click', function() {
        // Capturamos el valor ingresado por el usuario
        const valorEdad = entradaEdad.value.trim();

        // 3. Validaciones
        // Comprobamos si el campo está vacío
        if (valorEdad === '') {
            mensajeError.textContent = 'El campo no puede estar vacío. Ingresa un valor.';
            entradaVoto.value = ''; // Limpiamos el resultado anterior si lo hay
            return;
        } else if (valorEdad <= 0) {
            mensajeError.textContent = 'El campo no puede ser menor o igual a 0. Ingresa un valor.';
            entradaVoto.value = ''; // Limpiamos el resultado anterior si lo hay
            return;
        }

        // Comprobamos si el valor ingresado es un número válido
        if (isNaN(valorEdad)) {
            mensajeError.textContent = 'Por favor, ingresa un valor numérico válido.';
            entradaVoto.value = '';
            return;
        }

        // Si pasa las validaciones, limpiamos cualquier mensaje de error previo
        mensajeError.textContent = '';

        
        if (parseFloat(valorEdad) >= 18) {
            entradaVoto.value = 'Puedes votar';
        } else {
            entradaVoto.value = 'No puedes votar';
        }
    });
});