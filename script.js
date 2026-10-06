// el juego selecciona un numero al azar
let numeroAzar = Math.floor(Math.random()*100) +1


let numeroEntrada = document.getElementById('numeroEntrada')
let mensaje = document.getElementById('mensaje')
let intento = document.getElementById('intento')
let intentos = 0

// se activa al hacer click en el boton
function chequearResultado() {
    intentos ++
    intento.textContent = intentos
    let numeroIngresado = parseInt(numeroEntrada.value)

    if (numeroIngresado <1 || numeroIngresado >100 || isNaN(numeroIngresado)){
        mensaje.textContent ='Por favor ingresa un numero valido entre 1 y 100'
        mensaje.style.color = 'red';
        return
    }
    if (numeroIngresado === numeroAzar){
        mensaje.textContent = '!Felicidades haz acertado el numero!';
        mensaje.style.color = 'green';
        numeroEntrada.disabled = 'true';
    }else if(numeroIngresado < numeroAzar){
        mensaje.textContent = 'Mas alto, el numero es mayor al que ingresaste';
        mensaje.style.color = 'red';

    }else{
        mensaje.textContent = 'Mas bajo, el numero es menor al que ingresaste';
        mensaje.style.color = 'red';

    }
}

