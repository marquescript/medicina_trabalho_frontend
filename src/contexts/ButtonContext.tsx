import { createContext, ReactNode, useContext, useState } from "react";

type ButtonContextType = {
    selectedValue: string;
    addSelectedValue: (value: string) => void;
}

const ButtonContext = createContext<ButtonContextType | null>(null);

export const ButtonProvider = ({children}: {children: ReactNode}) => {

    const [selectedValue, setSelectedValue] = useState<string>("");

    const addSelectedValue = (value: string) => {
        setSelectedValue(value);
    }

    return (
        <ButtonContext.Provider value={{selectedValue, addSelectedValue}}>
            {children}
        </ButtonContext.Provider>
    )

}

export const useButtonContext = () => {
    return useContext(ButtonContext);
};