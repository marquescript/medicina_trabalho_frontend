import { useEffect, useState } from "react";
import { EmissaoAtestado } from "../../types/EmissaoAtestado";
import { TabelaGenerica } from "./TabelaGenerica";
import { api } from "../../utils/api";

export const TabelaEmissoesAtestado = () => {
    const [emissoes, setEmissoes] = useState<EmissaoAtestado[]>([]);

    const getAtestados = async () => {
        try {
            const response = await api.get("/atestado?items=10");
            setEmissoes(response.data.data);
        } catch (error) {
            if (error instanceof Error) console.log(error.message);
        }
    };

    useEffect(() => {
        getAtestados();
    }, []);

    const colunas = {
        funcionario: {
            label: "Funcionário",
            render: (item: EmissaoAtestado) => item?.consulta?.funcionario?.nome || "Não disponível"
        },
        medico: {
            label: "Médico",
            render: (item: EmissaoAtestado) => item?.consulta?.medico?.nome || "Não disponível"
        },
        data_consulta: {
            label: "Data da Consulta",
            render: (item: EmissaoAtestado) => {
                const data = item?.consulta?.data_consulta;
                return data ? new Date(data).toLocaleDateString() : "Data não disponível";
            }
        },
        descricao: {
            label: "Descrição",
            render: (item: EmissaoAtestado) => item?.descricao || "Descrição não disponível"
        }
    };

    return (
        <TabelaGenerica dados={emissoes} colunas={colunas} entidade={"Emissões de Atestado"} />
    );
};
