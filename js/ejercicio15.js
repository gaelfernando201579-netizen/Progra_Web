document.addEventListener('DOMContentLoaded', function() {
    const nomEst = document.getElementById('tex1');
    const calEst = document.getElementById('tex2');
    const resMay = document.getElementById('arreglo1');
    const resMen = document.getElementById('arreglo2');
    const resPro = document.getElementById('arreglo3');
    const btnAgregar = document.getElementById('btn-agregar');
    const btnCalcular = document.getElementById('btn-calcular');
    const mensajeError = document.getElementById('mensaje-error');

    let estudiantes = [];

    btnAgregar.addEventListener('click', function() {
        let nombre = nomEst.value.trim();
        let calificacion = parseFloat(calEst.value.trim());

        if (nombre === '' || isNaN(calificacion)) {
            mensajeError.textContent = 'Por favor, ingresa un nombre válido y una calificación numérica.';
            return;
        } 

        mensajeError.textContent = '';
        estudiantes.push({ nombre: nombre, calificacion: calificacion });

        nomEst.value = '';
        calEst.value = '';
    });

    btnCalcular.addEventListener('click', function() {
        if (estudiantes.length === 0) {
            mensajeError.textContent = 'No hay estudiantes para calcular. Agrega al menos uno.';
            return;
        }

        mensajeError.textContent = ''; 
        let suma = estudiantes.reduce((total, estudiante) => total + estudiante.calificacion, 0);
        let promedio = suma / estudiantes.length; 
        let calificacionMaxima = Math.max(...estudiantes.map(e => e.calificacion));
        let calificacionMinima = Math.min(...estudiantes.map(e => e.calificacion));

        let estudianteMaximo = estudiantes.find(e => e.calificacion === calificacionMaxima);
        let estudianteMinimo = estudiantes.find(e => e.calificacion === calificacionMinima);
        
        resMay.value = "Nombre: " + estudianteMaximo.nombre + " Calificacion: " + calificacionMaxima;
        resMen.value = "Nombre: " + estudianteMinimo.nombre + " Calificacion: " + calificacionMinima;
        resPro.value = "Promedio: " + promedio.toFixed(2); 
    });
});