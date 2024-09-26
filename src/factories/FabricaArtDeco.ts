import { Estilos } from "../enums/Estilos";
import { Cadeira } from "../models/Cadeira";
import { MesaDeCentro } from "../models/MesaDeCentro";
import { Sofa } from "../models/Sofa";
import { Fabrica } from "./Fabrica";

export class FabricaArtDeco extends Fabrica{
    criarSofa(): Sofa {
        return new Sofa(Estilos.ArtDeco)
    }
    criarCadeira(): Cadeira {
        return new Cadeira(Estilos.ArtDeco)
    }
    criarMesaDeCentro(): MesaDeCentro {
        return new MesaDeCentro(Estilos.ArtDeco)
    }

}