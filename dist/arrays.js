"use strict";

//for each so intera nao retorna nada

var redesSociais = ['Facebook', 'Instagram', 'Twitter'];
for (var i = 0; i < redesSociais.length; i++) {
  console.log("Eu tenho perfil na rede social: ".concat(redesSociais[i]));
}
redesSociais.forEach(function (nomeDaRedeSocial, indice) {
  console.log("#".concat(indice, " Eu tenho perfil na rede social: ").concat(nomeDaRedeSocial));
});

//map consegue interar e retornar ele modificado

var alunos = ['Gustavo', 'Julia', 'Paula', 'Wagner'];
var alunos2 = alunos.map(function (itemAtual) {
  return {
    nome: itemAtual,
    curso: 'Frontend'
  };
});
console.log(alunos2);

//find consegue encontrar um item dentro de um array

var paula = alunos2.find(function (item) {
  return item.nome == 'Paula';
});
console.log(paula);

//findindex retorna o indice do item dentro de um array

var indiceDaPaula = alunos2.findIndex(function (item) {
  return item.nome == 'Paula';
});
console.log(indiceDaPaula);

// every se todas as coisas satisfazem
alunos2.push({
  nome: 'Lucio',
  curso: 'Backend'
});
var todosAlunosSaoDeFrontend = alunos2.every(function (item) {
  return item.curso === 'Frontend';
});
console.log(todosAlunosSaoDeFrontend);

// some para back e front, algum item satisfaz aS condições
var existeAlgumAlunoDeBackend = alunos2.some(function (item) {
  return item.curso === 'Backend' && item.curso === 'Frontend';
});
console.log(existeAlgumAlunoDeBackend);

//falar quais

function filtraAlunosDeBackend(aluno) {
  return aluno.curso === 'Backend';
}

//const filtraAlunosDeBackend = (aluno, indice) => aluno.curso === 'Backend';

var alunosDeBackend = alunos2.filter(filtraAlunosDeBackend);
console.log(alunosDeBackend);

//reduce arrays to 1 value

var nums = [10, 20, 30, 10];
var soma = nums.reduce(function (acumulador, itemAtual) {
  acumulador += itemAtual;
  return acumulador;
}, 0);
console.log(soma);

// somacomfor

var somaComFor = 0;
for (var _i = 0; _i < nums.length; _i++) {
  somaComFor += nums[_i];
}
console.log(somaComFor);

//reduce com strings => concatenação

var nomesDosAlunos = alunos2.reduce(function (acumulador, itemAtual) {
  acumulador += "".concat(itemAtual.nome);
  return acumulador;
}, '');
console.log(nomesDosAlunos);