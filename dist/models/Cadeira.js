"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cadeira = void 0;
class Cadeira {
    constructor(estilo) {
        this.estilo = estilo;
    }
    descricao() {
        return `Cadeira de estilo ${this.estilo}.`;
    }
}
exports.Cadeira = Cadeira;
