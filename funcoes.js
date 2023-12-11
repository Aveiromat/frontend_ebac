"use strict";
//mesmo codigo normal/arrowfunction
function calculaArea(base, altura) {
    return base * altura;
}
const calculaArea2 = (base, altura) => base * altura;
function somar(...numeros) {
    // é possivel fazer -> numeros.reduce()
    console.log(numeros);
} //return se torna void
function teste() {
    if (10 > 5) {
        return 'dez maior que cincao';
    }
    else {
        return 5;
    }
}
const resultadoDeTeste = teste();
