import { useButtonContext } from "../../contexts/ButtonContext"
import { TabelaConsultas } from "../table/TabelaConsultas"
import { TabelaEmissoesAtestado } from "../table/TabelaEmissoesAtestado"
import { TabelaEmpresas } from "../table/TabelaEmpresas"
import { TabelaExames } from "../table/TabelaExames "
import { TabelaFuncionarios } from "../table/TabelaFuncionarios"
import { TabelaMedicos } from "../table/TabelaMedicos "



export const Body = () => {

    const buttonCtx = useButtonContext();

    const renderTable = () => {
        switch (buttonCtx?.selectedValue) {
            case "Empresas":
                return <TabelaEmpresas />;
            case "Funcionarios":
                return <TabelaFuncionarios />;
            case "Medicos":
                return <TabelaMedicos />;
            case "Consultas":
                return <TabelaConsultas />;
            case "Atestados":
                return <TabelaEmissoesAtestado />;
            case "Exames":
                return <TabelaExames />; 
            default:
                return <TabelaEmpresas />;
        }
    };

    return (
        <>
            {renderTable()}
        </>
    )

}