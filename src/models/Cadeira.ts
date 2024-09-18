import { IMobilia } from '../interfaces/IMobilia';

export class Cadeira implements IMobilia {
  estilo: string;
  material: string;
  cor: string;
  preco: number;

  constructor(estilo: string, material: string, cor: string, preco: number) {
    this.estilo = estilo;
    this.material = material;
    this.cor = cor;
    this.preco = preco;
  }

  descricao(): string {
    return `Cadeira ${this.estilo} de cor ${this.cor} feita de ${this.material}.`;
  }

  calcularPrecoComDesconto(desconto: number): number {
    return this.preco - (this.preco * desconto / 100);
  }
}
