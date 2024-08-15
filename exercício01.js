class Pizza {
    constructor (base,molho,cobertura,queijo) {
        this.base = base;
        this.molho = molho;
        this.cobertura = cobertura;
        this.queijo = queijo;
    }
    mostrarPedido() {
      console.log(`Olá, você receberá uma pizza! Sua pizza terá a base de ${this.base}, molho de ${this.molho}, cobertura de ${this.cobertura} e queijo ${this.queijo}`);
    }
}

const pedido = new Pizza ("Massa grossa com borda recheada de catupiry", "tomate", "Portugesa", "mussarela");
pedido.mostrarPedido();