
document.addEventListener('DOMContentLoaded', function() {

    const entradaEdad = document.getElementById('edad');
    const entradaVoto = document.getElementById('voto');
    const btnConvertir = document.getElementById('btn-convertir');
    const mensajeError = document.getElementById('mensaje-error');

    btnConvertir.addEventListener('click', function() {
        const valorEdad = entradaEdad.value.trim();

        if (valorEdad === '') {
            mensajeError.textContent = 'El campo no puede estar vacío. Ingresa un valor.';
            entradaVoto.value = '';
            return;
        } else if (valorEdad <= 0) {
            mensajeError.textContent = 'El campo no puede ser menor o igual a 0. Ingresa un valor.';
            entradaVoto.value = ''; 
            return;
        }

        if (isNaN(valorEdad)) {
            mensajeError.textContent = 'Por favor, ingresa un valor numérico válido.';
            entradaVoto.value = '';
            return;
        }

        mensajeError.textContent = '';

        
        if (parseFloat(valorEdad) >= 18) {
            entradaVoto.value = 'Puedes votar';
        } else {
            entradaVoto.value = 'No puedes votar';
        }
    });
});