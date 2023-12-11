let estaChovendo: boolean = false

estaChovendo = true

let idade: number = 27

let altura: number = 1.75

const nacionalidade: string = 'brasileira'


//same
const colegas: string[] = ['matheus', 'fernanda',]
const tecnologias: Array<string> = ['html', 'css', 'js']

//read only -> não tem função notas.push
const notas: ReadonlyArray<number> = [7, 9, 5, 8]

const lista: [nome: string, estaEstudando: boolean, idade: number] = ['gian', true, 27]

//dois tipos de variaveis
let idadeDaAna: number | string = 25
idadeDaAna = '25 anos'

//any -> ta no nome ne meu queridor
let dadosDaApi: any;
dadosDaApi = 10
dadosDaApi = true
dadosDaApi= [1, 2, 3]
dadosDaApi= 'string'

let curso = 'front-end'