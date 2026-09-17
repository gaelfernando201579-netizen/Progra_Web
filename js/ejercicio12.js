
document.addEventListener('DOMContentLoaded', function() {
    const entradaPeso = document.getElementById('peso');
    const entradaDolar = document.getElementById('dolar');
    const btnConvertir = document.getElementById('btn-convertir');
    const mensajeError = document.getElementById('mensaje-error');

    btnConvertir.addEventListener('click', function() {
        const valorPeso = entradaPeso.value.trim();

        if (valorPeso === '') {
            mensajeError.textContent = 'El campo no puede estar vacío. Ingresa un valor.';
            entradaDolar.value = ''; 
            return;
        }

        if (isNaN(valorPeso)) {
            mensajeError.textContent = 'Por favor, ingresa un valor numérico válido.';
            entradaDolar.value = '';
            return;
        }

        mensajeError.textContent = '';

        const C = parseFloat(valorPeso);
        
        const F = C*0.0584;

        entradaDolar.value = F.toFixed(2) + ' USD';
    });
});