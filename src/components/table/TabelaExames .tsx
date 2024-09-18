import { useEffect, useState } from "react";
import { Exame } from "../../types/Exame";
import { TabelaGenerica } from "./TabelaGenerica";
import { api } from "../../utils/api";

export const TabelaExames = () => {
    const [exames, setExames] = useState<Exame[]>([]);

    const getExames = async () => {
        try {
            const response = await api.get("/exame?item=10");
            setExames(response.data.data);
        } catch (error) {
            if (error instanceof Error) console.log(error.message);
        }
    };

    useEffect(() => {
        getExames();
    }, []);

    const colunas = {
        tipo_exame: {
            label: "Tipo de Exame",
            render: (item: Exame) => item.tipo_exame
        },
        valor_exame: {
            label: "Valor do Exame",
            render: (item: Exame) => `R$ ${item.valor_exame}`
        }
    };

    return (
        <TabelaGenerica dados={exames} colunas={colunas} entidade={"Exames"} />
    );
};
