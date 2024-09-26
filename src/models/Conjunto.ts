import { Estilos } from "../enums/Estilos";
import { IMobilia } from "../interfaces/IMobilia";

export class Conjunto {
    estilo: Estilos;
    moveis: IMobilia[];

    constructor(estilo: Estilos, moveis: IMobilia[] = []) {
        this.estilo = estilo;
        this.moveis = moveis;
    }

    adicionarMovel(movel: IMobilia): void {
        this.moveis.push(movel);
        console.log("Móvel adicionado com sucesso!");
    }

    descricaoConjunto(): string {
        // Cria uma lista de descrições dos móveis
        const descricoesMoveis = this.moveis.map(movel => movel.descricao()).join("\n ");
        return `Conjunto de móveis no estilo ${this.estilo}, contendo ${this.moveis.length} móveis: ${descricoesMoveis}`;
    }
}
