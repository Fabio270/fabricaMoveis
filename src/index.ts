import { Estilos } from "./enums/Estilos";
import { Cadeira } from "./models/Cadeira";
import { Cliente } from "./models/Cliente";
import { Conjunto } from "./models/Conjunto";
import { MesaDeCentro } from "./models/MesaDeCentro";
import { Sofa } from "./models/Sofa";
import * as readlineSync from 'readline-sync';

const clientes: Cliente[] = [];

function listarClientes(clientes: Cliente[]) {
    if (clientes.length === 0) {
        console.log("Nenhum cliente encontrado.");
        return;
    }

    console.log("Clientes cadastrados:");
    clientes.forEach((cliente, index) => {
        console.log(`${index + 1}. ${cliente.nome}`);
    });
}

function menu() {
    console.log(`
    1. Criar novo cliente
    2. Adicionar conjunto a um cliente
    3. Adicionar movel a um conjunto
    4. Listar conjuntos de um cliente
    5. Sair
    `);
}

function obterEstilo(): Estilos {
    console.log(`
    Escolha um estilo:
    1. Vitoriano
    2. Moderno
    3. Art Deco
    `);
    const estilo = parseInt(readlineSync.question("Digite o numero do estilo: ") || "0");
    switch (estilo) {
        case 1: return Estilos.Vitoriano;
        case 2: return Estilos.Moderno;
        case 3: return Estilos.ArtDeco;
        default: throw new Error("Estilo inválido.");
    }
}

while (true) {
    menu();
    const opcao = parseInt(readlineSync.question("Escolha uma opcao: ") || "0");

    switch (opcao) {
        case 1: // Criar novo cliente
            const nomeCliente = readlineSync.question("Digite o nome do cliente: ") || "";
            clientes.push(new Cliente(nomeCliente));
            console.log(`Cliente ${nomeCliente} criado com sucesso!`);
            break;

        case 2: // Adicionar conjunto a um cliente
            listarClientes(clientes);
            const nomeClienteConjunto = readlineSync.question("Digite o nome do cliente para adicionar um conjunto: ") || "";
            const clienteEncontrado = clientes.find(c => c.nome === nomeClienteConjunto);
            if (clienteEncontrado) {
                const conjuntoExistente = clienteEncontrado.conjunto;
                if (conjuntoExistente) {
                    console.log("O cliente ja possui um conjunto. Nao e possivel adicionar outro.");
                    break
                }
                const estiloConjunto = obterEstilo();
                const conjunto = new Conjunto(estiloConjunto);
                clienteEncontrado.adicionarConjunto(conjunto);
            } else {
                console.log("Cliente não encontrado.");
            }
            break;

        case 3: // Adicionar móvel a um conjunto
            listarClientes(clientes);
            const nomeClienteMovel = readlineSync.question("Digite o nome do cliente para adicionar um movel: ") || "";
            const clienteMovel = clientes.find(c => c.nome === nomeClienteMovel);
            if (clienteMovel) {
                const conjuntoExistente = clienteMovel.conjunto;
                if (!conjuntoExistente) {
                    console.log("O cliente não possui nenhum conjunto.");
                    break
                }
                let continuarCompra = ""
                const estiloMovel = obterEstilo();
                if (estiloMovel != conjuntoExistente?.estilo) {
                    console.log("O estilo do conjunto é diferente do móvel que você está tentando comprar, tem certeza que deseja continuar?");
                    continuarCompra = readlineSync.question("Continuar? 1-> sim, 2-> negativo\n") || "invalido";
                    console.log(continuarCompra);
                }
            
                if (continuarCompra == "1" || continuarCompra == "sim" || continuarCompra == "") {
                    const tipoMovel = readlineSync.question("Digite o numero do tipo do movel desejado (1.Cadeira, 2.Mesa de Centro, 3.Sofa): ") || "";
                    let novoMovel;

                    switch (tipoMovel.toLowerCase()) {
                        case "1":
                            novoMovel = new Cadeira(estiloMovel);
                            break;
                        case "2":
                            novoMovel = new MesaDeCentro(estiloMovel);
                            break;
                        case "3":
                            novoMovel = new Sofa(estiloMovel);
                            break;
                        default:
                            console.log("Tipo de movel inválido.");
                            continue;
                    }


                    conjuntoExistente.adicionarMovel(novoMovel);
                }
            } else {
                console.log("Cliente não encontrado.");
            }
            break;

        case 4: // Listar conjuntos de um cliente
            listarClientes(clientes);
            const nomeClienteListar = readlineSync.question("Digite o nome do cliente para listar os conjuntos: ") || "";
            const clienteListar = clientes.find(c => c.nome === nomeClienteListar);
            if (clienteListar) {
                console.log(clienteListar.listarConjunto());
            } else {
                console.log("Cliente não encontrado.");
            }
            break;

        case 5: // Sair
            console.log("Saindo...");
            process.exit();
            break;

        default:
            console.log("Opção inválida.");
    }
}
