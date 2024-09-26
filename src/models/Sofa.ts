import { IMobilia } from '../interfaces/IMobilia';

export class Sofa implements IMobilia {
  estilo: string;

  constructor(estilo: string) {
    this.estilo = estilo;
  }

  descricao(): string {
    return `Sofá de estilo ${this.estilo}.`;
  }
}
