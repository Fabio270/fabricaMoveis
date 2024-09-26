"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FabricaModerna = void 0;
const Estilos_1 = require("../enums/Estilos");
const Cadeira_1 = require("../models/Cadeira");
const MesaDeCentro_1 = require("../models/MesaDeCentro");
const Sofa_1 = require("../models/Sofa");
const Fabrica_1 = require("./Fabrica");
class FabricaModerna extends Fabrica_1.Fabrica {
    criarSofa() {
        return new Sofa_1.Sofa(Estilos_1.Estilos.Moderno);
    }
    criarCadeira() {
        return new Cadeira_1.Cadeira(Estilos_1.Estilos.Moderno);
    }
    criarMesaDeCentro() {
        return new MesaDeCentro_1.MesaDeCentro(Estilos_1.Estilos.Moderno);
    }
}
exports.FabricaModerna = FabricaModerna;
