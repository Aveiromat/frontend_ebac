const alunos = [
    { nome: "Aluno1", nota: 7 },
    { nome: "Aluno2", nota: 5 },
    { nome: "Aluno3", nota: 8 },
    { nome: "Aluno4", nota: 4 },
    { nome: "Aluno5", nota: 6 }
];

const filtrarAlunosAprovados = arrayDeAlunos => arrayDeAlunos.filter(aluno => aluno.nota >= 6);
const alunosAprovados = filtrarAlunosAprovados(alunos);

console.log("Alunos aprovados:", alunosAprovados);
