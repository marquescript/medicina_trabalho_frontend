import "./table.css";

interface TabelaProps<T> {
    dados: T[];
    colunas: {
        [key: string]: {
            label: string; 
            render: (item: T) => React.ReactNode; 
        };
    };
    entidade: string;
}

export const TabelaGenerica = <T extends Record<string, any>>({
    dados,
    colunas,
    entidade
}: TabelaProps<T>) => {
    const headers = Object.keys(colunas);

    const safeDados = Array.isArray(dados) ? dados : [];

    return (
        <div className="container">
            <h2>Lista de {entidade}</h2>
            <table>
                <thead>
                    <tr>
                        {headers.map((header) => (
                            <th key={header}>{colunas[header].label}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {safeDados.map((item) => (
                        <tr key={item.id}>
                            {headers.map((header) => (
                                <td key={header}>
                                    {colunas[header].render(item)}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
