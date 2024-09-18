import { Sofa } from '../models/Sofa';
import { Cadeira } from '../models/Cadeira';
import { MesaDeCentro } from '../models/MesaDeCentro';

export abstract class Fabrica {
  abstract criarSofa(): Sofa;
  abstract criarCadeira(): Cadeira;
  abstract criarMesaDeCentro(): MesaDeCentro;
}
