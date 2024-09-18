import { useState } from "react";
import { EmissaoAtestado } from "../../types/EmissaoAtestado";
import { TabelaGenerica } from "./TabelaGenerica";

export const TabelaEmissoesAtestado = () => {
    const [emissoes] = useState<EmissaoAtestado[]>([
        {
            id: 1,
            consulta: {
                id: 1,
                funcionario: {
                    id: 1,
                    nome: "João",
                    cpf: "12345678901",
                    telefone: "123456789",
                    ocupacao: "Desenvolvedor",
                    empresa: { id: 1, nome_fantasia: "Empresa X", cnpj: "", razao_social: "" }
                },
                medico: {
                    id: 1,
                    nome: "Dr. A",
                    crm: "123456",
                    especialidade: "Clínico Geral"
                },
                data_consulta: new Date(),
                exame: {
                    id: 1,
                    tipo_exame: "Exame X",
                    valor_exame: "100"
                }
            },
            descricao: "Atestado de Saúde"
        }
    ]);

    const colunas = {
        funcionario: {
            label: "Funcionário",
            render: (item: EmissaoAtestado) => item.consulta.funcionario.nome
        },
        medico: {
            label: "Médico",
            render: (item: EmissaoAtestado) => item.consulta.medico.nome
        },
        data_consulta: {
            label: "Data da Consulta",
            render: (item: EmissaoAtestado) => item.consulta.data_consulta.toLocaleDateString()
        },
        descricao: {
            label: "Descrição",
            render: (item: EmissaoAtestado) => item.descricao
        }
    };

    return (
        <TabelaGenerica dados={emissoes} colunas={colunas} entidade={"Emissões de Atestado"} />
    );
};
