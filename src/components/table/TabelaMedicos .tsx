import { useEffect, useState } from "react";
import { Medico } from "../../types/Medico";
import { TabelaGenerica } from "./TabelaGenerica";
import { api } from "../../utils/api";

export const TabelaMedicos = () => {
    const [medicos, setMedicos] = useState<Medico[]>([]);

    const getMedicos = async () => {
        try {
            const response = await api.get("/medico?items=10");
            setMedicos(response.data.data);
        } catch (error) {
            if (error instanceof Error) console.log(error.message);
        }
    };

    useEffect(() => {
        getMedicos();
    }, []);

    const colunas = {
        nome: {
            label: "Nome",
            render: (item: Medico) => item.nome
        },
        crm: {
            label: "CRM",
            render: (item: Medico) => item.crm
        },
        especialidade: {
            label: "Especialidade",
            render: (item: Medico) => item.especialidade
        }
    };

    return (
        <TabelaGenerica dados={medicos} colunas={colunas} entidade={"Médicos"} />
    );
};
