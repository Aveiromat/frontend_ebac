"use strict";
class Pessoa {
    constructor(nome, renda) {
        this.nome = nome;
        this.renda = renda;
    }
    dizOla() {
        return `${this.nome} say hello`;
    }
}
class ContaBancaria {
    constructor(numeroDaConta) {
        this.saldo = 0;
        this.numeroConta = numeroDaConta;
    }
    static retornaNumeroDoBanco() {
        return 125;
    }
    getSaldo() {
        return this.saldo;
    }
    depositar(valor) {
        this.saldo -= valor;
    }
}
//herença -> extends
class ContaBancariaPessoaFisica extends ContaBancaria {
    depositar(valor) {
        this.saldo = valor * 2;
    } //polimorfismo pegamos a funcao e usamos ele diferente
}
const contaDoPedro = new ContaBancariaPessoaFisica(123456);
// contaDoPedro.
ContaBancaria.retornaNumeroDoBanco();
//encapsulamento -> niveis de acesso aqui embaixo
//class publica é acessivel em todos os niveis
//class protected é acessivel apenas na classe e nas classes filhas
//class static esta disponivel apenas ao nivel do classe 
//class private é acessivel apenas nela
