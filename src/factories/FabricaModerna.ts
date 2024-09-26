import { Estilos } from "../enums/Estilos";
import { Cadeira } from "../models/Cadeira";
import { MesaDeCentro } from "../models/MesaDeCentro";
import { Sofa } from "../models/Sofa";
import { Fabrica } from "./Fabrica";

export class FabricaModerna extends Fabrica{
    criarSofa(): Sofa {
        return new Sofa(Estilos.Moderno)
    }
    criarCadeira(): Cadeira {
        return new Cadeira(Estilos.Moderno)
    }
    criarMesaDeCentro(): MesaDeCentro {
        return new MesaDeCentro(Estilos.Moderno)
    }

}