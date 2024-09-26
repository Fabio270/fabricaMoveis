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
        // Cria uma lista de descrições dos móveis
        const descricoesMoveis = this.moveis.map(movel => movel.descricao()).join("\n ");
        return `Conjunto de móveis no estilo ${this.estilo}, contendo ${this.moveis.length} móveis: ${descricoesMoveis}`;
    }
}
exports.Conjunto = Conjunto;
