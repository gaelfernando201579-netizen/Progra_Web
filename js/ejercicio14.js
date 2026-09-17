
document.addEventListener('DOMContentLoaded', function() {
    const aArreglo = document.getElementById('tex');
    const earreglo1 = document.getElementById('arreglo1');
    const earreglo2 = document.getElementById('arreglo2');
    const earreglo3 = document.getElementById('arreglo3');
    const btnConvertir = document.getElementById('btn-convertir');
    const mensajeError = document.getElementById('mensaje-error');

    btnConvertir.addEventListener('click', function() {
        let valorArray = aArreglo.value.trim();
        let cadena = valorArray.split(",");
        let numeros = cadena.map(Number);

        let maximo = Math.max(...numeros);
        let minimo = Math.min(...numeros);

        let suma = numeros.reduce((acc, valor) => acc + valor, 0);
        let promedio = suma / numeros.length; 

        if (valorArray === '') {
            mensajeError.textContent = 'El campo no puede estar vacío. Ingresa un valor.';
            aArreglo.value = '';
            return;
        }

        mensajeError.textContent = '';

        earreglo1.value = "El número más grande es: "+maximo;
        earreglo2.value = "El número más pequeño es: "+minimo;
        earreglo3.value = "El promedio de los números es: "+promedio;
        return;
    });
});