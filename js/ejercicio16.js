document.addEventListener('DOMContentLoaded', function() {
    const num1 = document.getElementById('numero1');
    const num2 = document.getElementById('numero2');
    const res = document.getElementById('resultado');
    const btnSum = document.getElementById('btn-sum');
    const btnRes = document.getElementById('btn-res');
    const btnMul = document.getElementById('btn-mul');
    const btnDiv = document.getElementById('btn-div');

    btnSum.addEventListener('click', function() {
        let a = parseFloat(num1.value.trim());
        let b = parseFloat(num2.value.trim());

        if (isNaN(a) || isNaN(b)) {
            Swal.fire({
                icon: 'error',        
                title: 'Operación no válida',        
                text: 'Por favor, ingresa dos números válidos.', 
                confirmButtonColor: '#88d630ff'      
            });
            return; 
        } 

        res.value = calcularOperacion('suma', a, b);
        Swal.fire({
                icon: 'success',        
                title: 'Operación realizada',
                confirmButtonColor: '#88d630ff'      
            });
    });

    btnRes.addEventListener('click', function() {
        let a = parseFloat(num1.value.trim());
        let b = parseFloat(num2.value.trim());

        if (isNaN(a) || isNaN(b)) {
            Swal.fire({
                icon: 'error',        
                title: 'Operación no válida',        
                text: 'Por favor, ingresa dos números válidos.', 
                confirmButtonColor: '#88d630ff'      
            });
            return; 
        } 

        res.value = calcularOperacion('resta', a, b);
        Swal.fire({
                icon: 'success',        
                title: 'Operación realizada',
                confirmButtonColor: '#88d630ff'      
            });
    });

    btnMul.addEventListener('click', function() {
        let a = parseFloat(num1.value.trim());
        let b = parseFloat(num2.value.trim());

        if (isNaN(a) || isNaN(b)) {
            Swal.fire({
                icon: 'error',        
                title: 'Operación no válida',        
                text: 'Por favor, ingresa dos números válidos.', 
                confirmButtonColor: '#88d630ff'      
            });
            return; 
        } 

        res.value = calcularOperacion('multiplicacion', a, b);
        Swal.fire({
                icon: 'success',        
                title: 'Operación realizada',
                confirmButtonColor: '#88d630ff'      
            });
    });

    btnDiv.addEventListener('click', function() {
        let a = parseFloat(num1.value.trim());
        let b = parseFloat(num2.value.trim());

        if (isNaN(a) || isNaN(b)) {
            Swal.fire({
                icon: 'error',        
                title: 'Operación no válida',        
                text: 'Por favor, ingresa dos números válidos.', 
                confirmButtonColor: '#88d630ff'      
            });
            return; 
        } 

        if (b === 0) {
            Swal.fire({
                icon: 'warning',        
                title: 'Error matemático',        
                text: 'No es posible dividir entre cero.', 
                confirmButtonColor: '#88d630ff'      
            });
            res.value = '';
            return;
        }

        res.value = calcularOperacion('division', a, b);
    
        Swal.fire({
            icon: 'success',        
            title: 'Operación realizada',
            confirmButtonColor: '#88d630ff'      
        });
    });

    
    const calcularOperacion = (op, a, b) => {
        const sumar = (x, y) => x + y;
        const restar = (x, y) => x - y;
        const multiplicar = (x, y) => x * y;
        const dividir = (x, y) =>  x / y;

        if (op === 'suma') {
            return sumar(a, b);
        } else if (op === 'resta') {
            return restar(a, b);
        } else if (op === 'multiplicacion') {
            return multiplicar(a, b);
        } else if (op === 'division') {
            return dividir(a, b);
        }
    }
});