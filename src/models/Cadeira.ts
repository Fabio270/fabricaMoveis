import { IMobilia } from '../interfaces/IMobilia';

export class Cadeira implements IMobilia {
  estilo: string;

  constructor(estilo: string) {
    this.estilo = estilo;
  }

  descricao(): string {
    return `Cadeira de estilo ${this.estilo}.`;
  }
}
