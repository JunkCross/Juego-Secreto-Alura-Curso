//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Juego del numero secreto'

//let parrafo = document.querySelector('p');
//parrafo.innerHTML = 'Indica un numero entre 1 y 10';

/*
let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let numeroIntentos = 0;
let numeroUno = 0;
let numeroDos = 0;
let resultado = 0;

function sumerNumeros() {
    numeroUno = parseInt(prompt ('Introduce un numero entre 1 y 10'));
    numeroDos = parseInt(prompt('Introduce otro numero entre 1 y 10'));
    alert( resultado = numeroUno + numeroDos);
}
*/

let intentos = 0;
let listaNumerosSorteados = [];
let numeroSecreto = 0;
let numeroMaximo = 10;
let nombre = "Alan";

console.log(nombre.length);


function asignarTextoElementos(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto
    return;
}

//asignarTextoElementos('h1', 'Juego del numero secreto');
//asignarTextoElementos('p', 'Indica un numero entre 1 y 10');

function verificarIntento(){
    let numeroDeUsurio = parseInt(document.getElementById('valorUsuario').value);
    console.log(numeroDeUsurio == numeroSecreto);
    //while(numeroDeUsurio != 8){
        
        console.log("numero secreto: " + numeroSecreto);
    
        if (numeroDeUsurio === numeroSecreto){
            //asignarTextoElementos('p', 'Felicidades, has adivinado el numero secreto');
            asignarTextoElementos('p', `Acertaste el numero en ${intentos+1} ${(intentos+1 === 1) ? 'vez' : 'veces'}.`);
            document.getElementById('reiniciar').removeAttribute('disabled');
            document.getElementById('valorUsuario').value = '';
            //reiniciarJuego();
        }else{
            if(numeroDeUsurio > numeroSecreto){
                asignarTextoElementos('p', 'El numero secreto es menor, intenta de nuevo');
            } else {
                asignarTextoElementos('p', 'El numero secreto es mayor, intenta de nuevo');
            }
            //asignarTextoElementos('p', 'Lo siento, intenta de nuevo'); 
            intentos++;
            limpiarCaja();
            //if (intentos === 3){
            //    asignarTextoElementos('p', 'Lo siento, has agotado tus intentos. El numero secreto era ' + numeroSecreto);
            //    document.getElementById('reiniciar').removeAttribute('disabled');
            //}
        }
    //}
    
    return;
}

function reiniciarJuego() {
    //limpiar la caja de texto
    limpiarCaja();
    //cambiar el texto del parrafo
    //generar un nuevo numero secreto
    //reiniciar el contador de intentos
    //regresar boton a su estado original
    condicionesIniciales();
}

function condicionesIniciales() {
    //cambiar el texto del parrafo
    asignarTextoElementos('h1', 'Juego del numero secreto');
    asignarTextoElementos('p', `Indica un numero entre 1 y ${numeroMaximo}`);
    //generar un nuevo numero secreto
    numeroSecreto = generarNumeroSecreto();
    //reiniciar el contador de intentos
    intentos = 0;
    //regresar boton a su estado original
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}   

function limpiarCaja() {
    /*
    let valorCaja = document.querySelector("#valorUsuario");
    valorCaja.value = '';
    */
    document.getElementById('valorUsuario').value = '';
}   

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si la lista tiene 10 numeros, ya se generaron todos los numeros posibles
    if(listaNumerosSorteados.length === numeroMaximo){
        listaNumerosSorteados = []; //reinicia la lista
        asignarTextoElementos('p', 'Se han agotado todos los numeros, se reinicia la lista');
        return generarNumeroSecreto(); //vuelve a generar un numero
    }else{
        //Si el numero generado esta incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto(); //vuelve a generar un numero
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado; //retorna el numero generado
        }
    }
    
}


condicionesIniciales();