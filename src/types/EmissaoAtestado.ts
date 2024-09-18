import { Consulta } from "./Consulta";

export type EmissaoAtestado = {
    id: number;
    consulta: Consulta;
    descricao: string;
}