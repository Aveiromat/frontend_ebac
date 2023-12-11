
//mesmo codigo normal/arrowfunction
function calculaArea(base: number, altura: number): number {
    return base * altura;
}

const calculaArea2 = (base: number, altura: number): number => base * altura

function somar(...numeros: number[]): void {
    // é possivel fazer -> numeros.reduce()
    console.log(numeros)
} //return se torna void

function teste(): string | number {
    if (10 > 5) {
        return 'dez maior que cincao'
    } else {
        return 5
    }
}

const resultadoDeTeste = teste()
