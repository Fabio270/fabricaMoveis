import { Conjunto } from "./Conjunto";

export class Cliente {
    nome: string;
    conjunto: Conjunto | null;

    constructor(nome: string) {
        this.nome = nome;
        this.conjunto = null;
    }

    adicionarConjunto(conjunto: Conjunto): void {
            this.conjunto = conjunto;
            console.log(`${conjunto.descricaoConjunto()} adicionado ao cliente ${this.nome}.`);
    }

    listarConjunto(): string {
        if (this.conjunto) {
            return `Cliente: ${this.nome}\n ${this.conjunto.descricaoConjunto()}`;
        } else {
            return `Cliente: ${this.nome} não possui nenhum conjunto.`;
        }
    }
}
