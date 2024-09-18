import { useState } from "react";
import { Medico } from "../../types/Medico";
import { TabelaGenerica } from "./TabelaGenerica";

export const TabelaMedicos = () => {
    const [medicos] = useState<Medico[]>([
        { id: 1, nome: "Dr. João", crm: "123456", especialidade: "Cardiologista" },
        { id: 2, nome: "Dra. Maria", crm: "654321", especialidade: "Pediatra" },
        { id: 3, nome: "Dr. Pedro", crm: "789012", especialidade: "Dermatologista" }
    ]);

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
