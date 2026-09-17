
document.addEventListener('DOMContentLoaded', function() {
    const entradaKilo = document.getElementById('kilometros');
    const entradaMilla = document.getElementById('millas');
    const btnConvertir = document.getElementById('btn-convertir');
    const mensajeError = document.getElementById('mensaje-error');

    btnConvertir.addEventListener('click', function() {
        const valorKilo = entradaKilo.value.trim();

        if (valorKilo === '') {
            mensajeError.textContent = 'El campo no puede estar vacío. Ingresa un valor.';
            entradaMilla.value = ''; 
            return;
        }

        if (isNaN(valorKilo)) {
            mensajeError.textContent = 'Por favor, ingresa un valor numérico válido.';
            entradaMilla.value = '';
            return;
        }

        mensajeError.textContent = '';

        const C = parseFloat(valorKilo);
        
        const F = C*0.621371;

        entradaMilla.value = F.toFixed(2) + ' Millas';
    });
});