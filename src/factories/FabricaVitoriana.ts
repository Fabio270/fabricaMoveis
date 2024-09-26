import { Estilos } from "../enums/Estilos";
import { Cadeira } from "../models/Cadeira";
import { MesaDeCentro } from "../models/MesaDeCentro";
import { Sofa } from "../models/Sofa";
import { Fabrica } from "./Fabrica";

export class FabricaVitoriana extends Fabrica{
    criarSofa(): Sofa {
        return new Sofa(Estilos.Vitoriano)
    }
    criarCadeira(): Cadeira {
        return new Cadeira(Estilos.Vitoriano)
    }
    criarMesaDeCentro(): MesaDeCentro {
        return new MesaDeCentro(Estilos.Vitoriano)
    }

}