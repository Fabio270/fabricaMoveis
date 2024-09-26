"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sofa = void 0;
class Sofa {
    constructor(estilo) {
        this.estilo = estilo;
    }
    descricao() {
        return `Sofá de estilo ${this.estilo}.`;
    }
}
exports.Sofa = Sofa;
