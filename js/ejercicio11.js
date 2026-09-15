// Esperamos a que el contenido HTML esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // 1. Capturar los elementos del DOM
    const entradaKilo = document.getElementById('kilometros');
    const entradaMilla = document.getElementById('millas');
    const btnConvertir = document.getElementById('btn-convertir');
    const mensajeError = document.getElementById('mensaje-error');

    // 2. Agregar evento de clic al botón
    btnConvertir.addEventListener('click', function() {
        // Capturamos el valor ingresado por el usuario
        const valorKilo = entradaKilo.value.trim();

        // 3. Validaciones
        // Comprobamos si el campo está vacío
        if (valorKilo === '') {
            mensajeError.textContent = 'El campo no puede estar vacío. Ingresa un valor.';
            entradaMilla.value = ''; // Limpiamos el resultado anterior si lo hay
            return;
        }

        // Comprobamos si el valor ingresado es un número válido
        if (isNaN(valorKilo)) {
            mensajeError.textContent = 'Por favor, ingresa un valor numérico válido.';
            entradaMilla.value = '';
            return;
        }

        // Si pasa las validaciones, limpiamos cualquier mensaje de error previo
        mensajeError.textContent = '';

        // 4. Conversión de Celsius a Fahrenheit
        // Convertimos el string a un número decimal (float)
        const C = parseFloat(valorKilo);
        
        const F = C*0.621371;

        // 5. Mostrar el resultado en el campo readonly
        // Se formatea a 2 decimales para que se vea más profesional y se concatena el símbolo °F
        entradaMilla.value = F.toFixed(2) + ' Millas';
    });
});