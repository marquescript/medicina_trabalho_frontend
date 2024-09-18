import { Exame } from "./Exame";
import { Funcionario } from "./Funcionario";
import { Medico } from "./Medico";

export type Consulta = {
    id: number;
    funcionario: Funcionario;
    medico: Medico;
    data_consulta: Date;
    exame: Exame;
}