"use strict";
const alunos = [
    {
        nome: "Carlos",
        cursos: ["Front-End", "UX/UI", "FullStack"],
        idade: 27,
    },
    {
        nome: "Fernanda",
        cursos: ["Front-End", "Python", "FullStack"],
        idade: 23,
    },
];
alunos.push({
    nome: "Julia",
    cursos: ["Arquiterura"],
    idade: 29
});
const novoAluno = {
    nome: "Lucas",
    idade: 32,
};
function exibeAluno(aluno) {
    console.log(aluno.nome);
}
