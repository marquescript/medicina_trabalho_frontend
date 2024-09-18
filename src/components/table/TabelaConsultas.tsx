import { useEffect, useState } from "react";
import "./table.css";
import { TabelaGenerica } from "./TabelaGenerica";
import { Consulta } from "../../types/Consulta";
import { api } from "../../utils/api";

export const TabelaConsultas = () => {
    const [consulta, setConsulta] = useState<Consulta[]>([]);

    const getConsultas = async () => {
        try {
            const response = await api.get("/consulta?items=10");
            setConsulta(response.data.data);
        } catch (error) {
            if (error instanceof Error) console.log(error.message);
        }
    };

    useEffect(() => {
        getConsultas();
    }, []);

    const colunas = {
        funcionario: {
            label: "Funcionário",
            render: (item: Consulta) => item?.funcionario?.nome || "Não disponível"
        },
        medico: {
            label: "Médico",
            render: (item: Consulta) => item?.medico?.nome || "Não disponível"
        },
        data_consulta: {
            label: "Data da Consulta",
            render: (item: Consulta) => {
                const data = item?.data_consulta;
                return data ? new Date(data).toLocaleDateString() : "Data não disponível";
            }
        },
        exame: {
            label: "Exame",
            render: (item: Consulta) => item?.exame?.tipo_exame || "Não disponível"
        }
    };
    

    return (
        <TabelaGenerica dados={consulta} colunas={colunas} entidade={"Consultas"} />
    );
};
 