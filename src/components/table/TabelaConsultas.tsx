import { useState } from "react";
import "./table.css";
import { TabelaGenerica } from "./TabelaGenerica";
import { Consulta } from "../../types/Consulta";

export const TabelaConsultas = () => {
    const [consulta] = useState<Consulta[]>([
        {
            id: 1,
            funcionario: {
                id: 1,
                nome: "João",
                cpf: "12345678901",
                telefone: "123456789",
                ocupacao: "Desenvolvedor",
                empresa: { id: 1, nome_fantasia: "Empresa X", cnpj: "", razao_social: "" }
            },
            medico: { id: 1, nome: "aaaa", crm: "4234234", especialidade: "asdad" },
            data_consulta: new Date(),
            exame: {
                id: 1,
                tipo_exame: "aa",
                valor_exame: ""
            }
        }
    ]);

    const colunas = {
        funcionario: {
            label: "Funcionário",
            render: (item: Consulta) => item.funcionario.nome
        },
        medico: {
            label: "Médico",
            render: (item: Consulta) => item.medico.nome
        },
        data_consulta: {
            label: "Data da Consulta",
            render: (item: Consulta) => item.data_consulta.toLocaleDateString()
        },
        exame: {
            label: "Exame",
            render: (item: Consulta) => item.exame.tipo_exame
        }
    };

    return (
        <TabelaGenerica dados={consulta} colunas={colunas} entidade={"Consultas"} />
    );
};
 