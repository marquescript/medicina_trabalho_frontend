import { useEffect, useState } from "react";
import { Funcionario } from "../../types/Funcionario";
import { TabelaGenerica } from "./TabelaGenerica";
import { api } from "../../utils/api";

export const TabelaFuncionarios = () => {
    const [funcionarios, setFuncionarios] = useState<Funcionario[]>([]);

    const getFuncionarios = async () => {
        try {
            const response = await api.get("/funcionario?item=10");
            setFuncionarios(response.data.data);
        } catch (error) {
            if (error instanceof Error) console.log(error.message);
        }
    };

    useEffect(() => {
        getFuncionarios();
    }, []);

    const colunas = {
        nome: {
            label: "Nome",
            render: (item: Funcionario) => item.nome
        },
        cpf: {
            label: "CPF",
            render: (item: Funcionario) => item.cpf
        },
        telefone: {
            label: "Telefone",
            render: (item: Funcionario) => item.telefone
        },
        ocupacao: {
            label: "Ocupação",
            render: (item: Funcionario) => item.ocupacao
        },
        empresa: {
            label: "Empresa",
            render: (item: Funcionario) => item.empresa.nome_fantasia
        }
    };

    return (
        <TabelaGenerica dados={funcionarios} colunas={colunas} entidade={"Funcionários"} />
    );
};
