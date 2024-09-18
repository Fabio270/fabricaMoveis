export interface IMobilia {
    estilo: string;
    material: string;
    cor: string;
    preco: number;
    descricao(): string;
    calcularPrecoComDesconto(desconto: number): number;
  }  