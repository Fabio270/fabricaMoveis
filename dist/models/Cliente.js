"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
class Cliente {
    constructor(nome) {
        this.nome = nome;
        this.conjunto = null;
    }
    adicionarConjunto(conjunto) {
        this.conjunto = conjunto;
        console.log(`Conjunto ${conjunto.descricaoConjunto()} adicionado ao cliente ${this.nome}.`);
    }
    listarConjunto() {
        if (this.conjunto) {
            return `Cliente: ${this.nome}\nConjunto: ${this.conjunto.descricaoConjunto()}`;
        }
        else {
            return `Cliente: ${this.nome} não possui nenhum conjunto.`;
        }
    }
}
exports.Cliente = Cliente;
