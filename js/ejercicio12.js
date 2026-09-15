// Esperamos a que el contenido HTML esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // 1. Capturar los elementos
    const entradaPeso = document.getElementById('peso');
    const entradaDolar = document.getElementById('dolar');
    const btnConvertir = document.getElementById('btn-convertir');
    const mensajeError = document.getElementById('mensaje-error');

    // 2. Agregar evento de clic al botón
    btnConvertir.addEventListener('click', function() {
        // Capturamos el valor ingresado por el usuario
        const valorPeso = entradaPeso.value.trim();

        // 3. Validaciones
        // Comprobamos si el campo está vacío
        if (valorPeso === '') {
            mensajeError.textContent = 'El campo no puede estar vacío. Ingresa un valor.';
            entradaDolar.value = ''; // Limpiamos el resultado anterior si lo hay
            return;
        }

        // Comprobamos si el valor ingresado es un número válido
        if (isNaN(valorPeso)) {
            mensajeError.textContent = 'Por favor, ingresa un valor numérico válido.';
            entradaDolar.value = '';
            return;
        }

        // Si pasa las validaciones, limpiamos cualquier mensaje de error previo
        mensajeError.textContent = '';

        // Convertimos el string a un número decimal (float)
        const C = parseFloat(valorPeso);
        
        const F = C*0.0584;

        // 5. Mostrar el resultado en el campo readonly
        // Se formatea a 2 decimales para que se vea más pro
        entradaDolar.value = F.toFixed(2) + ' USD';
    });
});