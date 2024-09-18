import { useState } from "react";
import { Empresa } from "../../types/Empresa";
import "./table.css";
import { TabelaGenerica } from "./TabelaGenerica";

export const TabelaEmpresas = () => {
    const [empresa] = useState<Empresa[]>([
        { id: 1, nome_fantasia: "Empresa X", cnpj: "4234234234", razao_social: "aaaaaaaaaa" },
        { id: 2, nome_fantasia: "Empresa Y", cnpj: "5345345555", razao_social: "bbbbbbbbbb" },
        { id: 3, nome_fantasia: "Empresa Z", cnpj: "7677775666", razao_social: "cccccccccc" }
    ]);

    const colunas = {
        nome_fantasia: {
            label: "Nome Fantasia",
            render: (item: Empresa) => item.nome_fantasia
        },
        cnpj: {
            label: "CNPJ",
            render: (item: Empresa) => item.cnpj
        },
        razao_social: {
            label: "Razão Social",
            render: (item: Empresa) => item.razao_social
        }
    };

    return (
        <TabelaGenerica dados={empresa} colunas={colunas} entidade={"Empresas"} />
    );
};
