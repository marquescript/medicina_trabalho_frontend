import { useButtonContext } from "../../contexts/ButtonContext";
import "./header.css";


export const Header = () => {

    const buttonCtx = useButtonContext();

    const buttons = ["Empresas", "Funcionarios", "Medicos", "Consultas", "Atestados", "Exames"];

    const handleAddButton = (value: string) => {
        buttonCtx?.addSelectedValue(value);
    }

    return (

        <div className="header">
            <div className="content-header">
            <div className="header-title">Medicina do trabalho</div>
            <div>
            {buttons.map((button) => (
                        <button key={button} onClick={() => handleAddButton(button)} className="button-header">
                            {button}
                        </button>
                    ))}
            </div>

            </div>
        </div>
    )

}