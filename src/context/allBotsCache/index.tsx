import React, { createContext, useState, useEffect } from 'react';
import { TAllBotsCacheContext, TAllBotsCacheProviderProps, TBot } from './allBotsCache';
import useGetBots from '../../hooks/useGetBots';

export const AllBotsCacheContext = createContext<TAllBotsCacheContext | null>(null);

const AllBotsCacheProvider: React.FC<TAllBotsCacheProviderProps> = ({ children }) => {
    // const [allBots, setAllBots] = useState<TBot[]>([]);
    const { bots, isLoading, error } = useGetBots();

    return ( 
        <AllBotsCacheContext.Provider 
            value={{
                bots, 
                isLoading, 
                error
            }}
        >
            {children}
        </AllBotsCacheContext.Provider>
    );
}

export default AllBotsCacheProvider;