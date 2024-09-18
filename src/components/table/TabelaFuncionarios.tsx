import { useState } from "react";
import { Funcionario } from "../../types/Funcionario";
import { TabelaGenerica } from "./TabelaGenerica";

export const TabelaFuncionarios = () => {
    const [funcionarios] = useState<Funcionario[]>([
        {
            id: 1,
            nome: "João",
            cpf: "12345678901",
            telefone: "123456789",
            ocupacao: "Desenvolvedor",
            empresa: { id: 1, nome_fantasia: "Empresa X", cnpj: "", razao_social: "" }
        }
    ]);

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
