
document.addEventListener('DOMContentLoaded', function() {
    const inputCelsius = document.getElementById('celsius');
    const inputFahrenheit = document.getElementById('fahrenheit');
    const btnConvertir = document.getElementById('btn-convertir');
    const mensajeError = document.getElementById('mensaje-error');

    btnConvertir.addEventListener('click', function() {
        const celsiusValue = inputCelsius.value.trim();

        if (celsiusValue === '') {
            mensajeError.textContent = 'El campo no puede estar vacío. Ingresa un valor.';
            inputFahrenheit.value = ''; 
            return;
        }

        if (isNaN(celsiusValue)) {
            mensajeError.textContent = 'Por favor, ingresa un valor numérico válido.';
            inputFahrenheit.value = '';
            return;
        }

        mensajeError.textContent = '';

        const C = parseFloat(celsiusValue);
        
        const F = (C * 9/5) + 32;

        inputFahrenheit.value = F.toFixed(2) + ' °F';
    });
});