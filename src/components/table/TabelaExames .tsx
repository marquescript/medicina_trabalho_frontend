import { useState } from "react";
import { Exame } from "../../types/Exame";
import { TabelaGenerica } from "./TabelaGenerica";

export const TabelaExames = () => {
    const [exames] = useState<Exame[]>([
        { id: 1, tipo_exame: "Exame de Sangue", valor_exame: "150" },
        { id: 2, tipo_exame: "Exame de Urina", valor_exame: "80" },
        { id: 3, tipo_exame: "Raio-X", valor_exame: "200" }
    ]);

    const colunas = {
        tipo_exame: {
            label: "Tipo de Exame",
            render: (item: Exame) => item.tipo_exame
        },
        valor_exame: {
            label: "Valor do Exame",
            render: (item: Exame) => item.valor_exame
        }
    };

    return (
        <TabelaGenerica dados={exames} colunas={colunas} entidade={"Exames"} />
    );
};
