"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Estilos_1 = require("./enums/Estilos");
const Cadeira_1 = require("./models/Cadeira");
const Cliente_1 = require("./models/Cliente");
const Conjunto_1 = require("./models/Conjunto");
const MesaDeCentro_1 = require("./models/MesaDeCentro");
const Sofa_1 = require("./models/Sofa");
const readlineSync = __importStar(require("readline-sync"));
const clientes = [];
function listarClientes(clientes) {
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
function obterEstilo() {
    console.log(`
    Escolha um estilo:
    1. Vitoriano
    2. Moderno
    3. Art Deco
    `);
    const estilo = parseInt(readlineSync.question("Digite o numero do estilo: ") || "0");
    switch (estilo) {
        case 1: return Estilos_1.Estilos.Vitoriano;
        case 2: return Estilos_1.Estilos.Moderno;
        case 3: return Estilos_1.Estilos.ArtDeco;
        default: throw new Error("Estilo inválido.");
    }
}
while (true) {
    menu();
    const opcao = parseInt(readlineSync.question("Escolha uma opcao: ") || "0");
    switch (opcao) {
        case 1: // Criar novo cliente
            listarClientes(clientes);
            const nomeCliente = readlineSync.question("Digite o nome do cliente: ") || "";
            clientes.push(new Cliente_1.Cliente(nomeCliente));
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
                    break;
                }
                const estiloConjunto = obterEstilo();
                const conjunto = new Conjunto_1.Conjunto(estiloConjunto);
                clienteEncontrado.adicionarConjunto(conjunto);
            }
            else {
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
                    break;
                }
                const estiloMovel = obterEstilo();
                if (estiloMovel != (conjuntoExistente === null || conjuntoExistente === void 0 ? void 0 : conjuntoExistente.estilo)) {
                    console.log("Não é permitido formar conjuntos de estilos diferentes de móveis.");
                    break;
                }
                const tipoMovel = readlineSync.question("Digite o numero do tipo do movel desejado (1.Cadeira, 2.Mesa de Centro, 3.Sofa): ") || "";
                let novoMovel;
                switch (tipoMovel.toLowerCase()) {
                    case "1":
                        novoMovel = new Cadeira_1.Cadeira(estiloMovel);
                        break;
                    case "2":
                        novoMovel = new MesaDeCentro_1.MesaDeCentro(estiloMovel);
                        break;
                    case "3":
                        novoMovel = new Sofa_1.Sofa(estiloMovel);
                        break;
                    default:
                        console.log("Tipo de movel inválido.");
                        continue;
                }
                conjuntoExistente.adicionarMovel(novoMovel);
            }
            else {
                console.log("Cliente não encontrado.");
            }
            break;
        case 4: // Listar conjuntos de um cliente
            listarClientes(clientes);
            const nomeClienteListar = readlineSync.question("Digite o nome do cliente para listar os conjuntos: ") || "";
            const clienteListar = clientes.find(c => c.nome === nomeClienteListar);
            if (clienteListar) {
                console.log(clienteListar.listarConjunto());
            }
            else {
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
