// Classe Abstrata: Veiculo
function Veiculo(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.acelerar = function() {
        console.log("Acelerando...");
    }
    this.frear = function() {
        console.log("Freando...");
    }
}

// Classes Herdeiras: Carro e Moto
function Carro() {
    this.numPortas = numPortas;
    
    this.abrirPorta = function() {
        console.log("Abrindo a porta do carro.");
    }

    Veiculo.call(this, marca,modelo, ano);
}

function Moto(){
        this.cilindradas = cilindradas;

    this.empinar = function() {
        console.log("Empinando a moto!");
    }

    Veiculo.call(this, marca,modelo, ano, cilindradas);
}

// Instâncias de Objetos
const carro1 = new Carro("Ford", "Focus", 2022, 4);
const moto1 = new Moto("Honda", "CBR", 2021, 600);

const carro2 = new Carro("Chevrolet", "Cruze", 2020, 2);
const moto2 = new Moto("Yamaha", "YZF", 2022, 1000);

const carro3 = new Carro("Volkswagen", "Golf", 2021, 5);
const moto3 = new Moto("Suzuki", "GSX-R", 2020, 750);

// Testando métodos e propriedades
carro1.acelerar();
carro1.abrirPorta();

moto2.frear();
moto2.empinar();


//• Crie uma classe de uma abstração;

//• Crie pelo menos duas classes que sejam herdeiras da classe criada anteriormente;

//• Crie pelo menos três instâncias de objetos;