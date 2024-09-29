import useLocalStorage from '@/hooks/useLocalStorage';
import React, { createContext, useEffect, useState } from 'react';


export interface GlobalValues {
    username: string,
    setUsername: React.Dispatch<React.SetStateAction<string>>;
    selectedCharacter: string;
    setSelectedCharacter: React.Dispatch<React.SetStateAction<string>>;
}


export const GlobalContext = createContext<GlobalValues | null>(null);


const GlobalValueProvider = ({ children }: { children: React.ReactNode; }) => {

    const { setItem, getItem } = useLocalStorage();

    const [username, setUsername] = useState("");
    const [selectedCharacter, setSelectedCharacter] = useState("");



    useEffect(() => {

        if (!username || !selectedCharacter)
            return;

        setItem('username', username);
        setItem('selectedCharacter', selectedCharacter);

    }, [username, selectedCharacter]);

    useEffect(() => {

        const setValuesFromLocalStorage = async () => {
            const name = await getItem('username');
            const character = await getItem('selectedCharacter');

            if (name && character) {
                setUsername(name);
                setSelectedCharacter(character);
            }
        };

        setValuesFromLocalStorage();

    }, []);

    return (
        <GlobalContext.Provider value={{
            username,
            setUsername,
            selectedCharacter,
            setSelectedCharacter
        }}>
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalValueProvider;