class Pessoa {
    constructor (nome,idade,altura) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
    }
    seApresentar() {
      console.log(`Olá, meu nome é ${this.nome}. Tenho ${this.idade} anos de idade e tenho ${this.altura}`);
    }
}

const user1 = new Pessoa ("Antonela", 3, 0.9);
const user2 = new Pessoa ("Matteo", 5, 1.1);

//console.log (user1)
user1.seApresentar();