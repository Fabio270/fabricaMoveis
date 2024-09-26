"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MesaDeCentro = void 0;
class MesaDeCentro {
    constructor(estilo) {
        this.estilo = estilo;
    }
    descricao() {
        return `Mesa de centro de estilo ${this.estilo}.`;
    }
}
exports.MesaDeCentro = MesaDeCentro;
