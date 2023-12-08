//for each so intera nao retorna nada

const redesSociais = ['Facebook', 'Instagram', 'Twitter'];

for (let i = 0; i < redesSociais.length; i++) {
    console.log(`Eu tenho perfil na rede social: ${redesSociais[i]}`)
}

redesSociais.forEach(function(nomeDaRedeSocial, indice) {
    console.log(`#${indice} Eu tenho perfil na rede social: ${nomeDaRedeSocial}`)
})

//map consegue interar e retornar ele modificado

const alunos = ['Gustavo', 'Julia', 'Paula', 'Wagner'];

const alunos2 = alunos.map(function(itemAtual) {
    return {
        nome: itemAtual,
        curso: 'Frontend'
    }
})

console.log(alunos2)

//find consegue encontrar um item dentro de um array

const paula = alunos2.find(function(item) {
    return item.nome == 'Paula'
})

console.log(paula)

//findindex retorna o indice do item dentro de um array

const indiceDaPaula = alunos2.findIndex(function(item) {
    return item.nome == 'Paula'
})

console.log(indiceDaPaula)

// every se todas as coisas satisfazem
alunos2.push({
    nome: 'Lucio',
    curso: 'Backend'
})

const todosAlunosSaoDeFrontend = alunos2.every(function(item) {
    return item.curso === 'Frontend'
})

console.log(todosAlunosSaoDeFrontend);

// some para back e front, algum item satisfaz aS condições
const existeAlgumAlunoDeBackend = alunos2.some(function(item) {
    return item.curso === 'Backend' && item.curso === 'Frontend'
})

console.log(existeAlgumAlunoDeBackend);

//falar quais

function filtraAlunosDeBackend(aluno) {
    return aluno.curso === 'Backend';
}

//const filtraAlunosDeBackend = (aluno, indice) => aluno.curso === 'Backend';

const alunosDeBackend = alunos2.filter(filtraAlunosDeBackend)

console.log(alunosDeBackend)

//reduce arrays to 1 value

const nums = [10, 20, 30, 10]

const soma = nums.reduce(function(acumulador, itemAtual) {
    acumulador += itemAtual
    return acumulador
}, 0)

console.log(soma)

// somacomfor

let somaComFor = 0;

for(let i= 0; i < nums.length; i++) {
    somaComFor += nums [i];
}

console.log(somaComFor)

//reduce com strings => concatenação

const nomesDosAlunos = alunos2.reduce(function(acumulador, itemAtual) {
    acumulador += `${itemAtual.nome }`;
    return acumulador;
}, '')
console.log(nomesDosAlunos)