function PersonagemOnePiece(nome, tripulacao, gomuGomu) {
    this.nome = nome;
    this.tripulacao = tripulacao;
    this.gomuGomu = gomuGomu;
    this.apresentar = function() {
        console.log(`Yo-ho-ho! Eu sou o pirata ${this.nome}, membro da tripulação dos ${this.tripulacao}!`);
    }
    this.realizarAcao = function(acao) {
        console.log(`${this.nome} realizando ação pirata: ${acao}!`);
    }

    this.obterInformacoes = function() {
        return `Nome: ${this.nome}, Tripulação: ${this.tripulacao}, Akuma no mi: ${this.gomuGomu}`;
    }
}

function MembroTripulacao(nome, tripulacao, gomuGomu, cargo) {
    this.cargo = cargo;
    
    this.realizarTarefa = function() {
        console.log(`Membro da tripulação ${this.nome}, ${this.cargo}, realizando sua tarefa: ${this.cargo}!`);
    }

    PersonagemOnePiece.call(this, nome, tripulacao, gomuGomu);
}

function Capitao(nome, tripulacao, gomuGomu) {
    MembroTripulacao.call(this, nome, tripulacao, gomuGomu, "Capitão");

    this.tomarDecisao = function(decisao) {
        console.log(`Capitão ${this.nome} tomando decisão: ${decisao}!`);
    }
    this.apresentar = function() {
        console.log(`Yo-ho-ho! Eu sou o pirata ${this.nome}, capitão da tripulação dos ${this.tripulacao}!`);
    }
}

const luffy = new Capitao("Monkey D. Luffy", "Chapéu de Palha", "Gomu Gomu no Mi");
const zoro = new MembroTripulacao("Roronoa Zoro", "Chapéu de Palha", "-", "Espadachim");
const nami = new MembroTripulacao("Nami", "Chapéu de Palha", "-", "Navegadora");

console.log()
console.log("Tripulação do Chapéu de Palha:");
console.log(luffy.obterInformacoes());
console.log(zoro.obterInformacoes());
console.log(nami.obterInformacoes());
console.log();

luffy.apresentar();
luffy.realizarAcao("Esticar os braços");
luffy.tomarDecisao("Partiremos para a próxima ilha!");
console.log();
zoro.apresentar();
zoro.realizarAcao("Treinar com espadas");
console.log();
nami.apresentar();
nami.realizarTarefa();
console.log();
