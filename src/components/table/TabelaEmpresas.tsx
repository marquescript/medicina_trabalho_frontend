import { useEffect, useState } from "react";
import { Empresa } from "../../types/Empresa";
import "./table.css";
import { TabelaGenerica } from "./TabelaGenerica";
import { api } from "../../utils/api";

export const TabelaEmpresas = () => {
    const [empresa, setEmpresa] = useState<Empresa[]>([]);

    const getEmpresas = async () => {
        try {
            const response = await api.get("/empresa?item=10");
            setEmpresa(response.data.data);
        } catch (error) {
            if (error instanceof Error) console.log(error.message);
        }
    };

    useEffect(() => {
      getEmpresas();
    }, []);

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
