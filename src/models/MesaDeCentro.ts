import { IMobilia } from '../interfaces/IMobilia';

export class MesaDeCentro implements IMobilia {
  estilo: string;

  constructor(estilo: string) {
    this.estilo = estilo;
  }

  descricao(): string {
    return `Mesa de centro de estilo ${this.estilo}.`;
  }
}
