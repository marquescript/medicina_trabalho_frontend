import { Empresa } from "./Empresa";

export type Funcionario = {
    id: number;
    nome: string;
    cpf: string;
    telefone: string;
    ocupacao: string;
    empresa: Empresa;
}