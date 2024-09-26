"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conjunto = void 0;
class Conjunto {
    constructor(estilo, moveis = []) {
        this.estilo = estilo;
        this.moveis = moveis;
    }
    adicionarMovel(movel) {
        this.moveis.push(movel);
        console.log("Móvel adicionado com sucesso!");
    }
    descricaoConjunto() {
        return `Conjunto de móveis no estilo ${this.estilo}, contendo ${this.moveis.length} móveis.`;
    }
}
exports.Conjunto = Conjunto;
