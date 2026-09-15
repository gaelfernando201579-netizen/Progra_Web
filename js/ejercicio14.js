// Esperamos a que el contenido HTML esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // 1. Capturar los elementos del DOM
    const aArreglo = document.getElementById('tex');
    const earreglo1 = document.getElementById('arreglo1');
    const earreglo2 = document.getElementById('arreglo2');
    const earreglo3 = document.getElementById('arreglo3');
    const btnConvertir = document.getElementById('btn-convertir');
    const mensajeError = document.getElementById('mensaje-error');

    // 2. Agregar evento de clic al botón
    btnConvertir.addEventListener('click', function() {
        // Capturamos el valor ingresado por el usuario
        let valorArray = aArreglo.value.trim();
        let cadena = valorArray.split(",");
        let numeros = cadena.map(Number);

        let maximo = Math.max(...numeros);
        let minimo = Math.min(...numeros);

        let suma = numeros.reduce((acc, valor) => acc + valor, 0);
        let promedio = suma / numeros.length; 

        // 3. Validaciones
        // Comprobamos si el campo está vacío
        if (valorArray === '') {
            mensajeError.textContent = 'El campo no puede estar vacío. Ingresa un valor.';
            aArreglo.value = ''; // Limpiamos el resultado anterior si lo hay
            return;
        }

        // Si pasa las validaciones, limpiamos cualquier mensaje de error previo
        mensajeError.textContent = '';

        earreglo1.value = "El número más grande es: "+maximo;
        earreglo2.value = "El número más pequeño es: "+minimo;
        earreglo3.value = "El promedio de los números es: "+promedio;
        return;
    });
});