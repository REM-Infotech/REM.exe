import { Bot } from "../types/bot"
import { getAllBotsAction } from "../service/api"
import React, { useState, useEffect } from 'react'
import { TUseGetBots, TGetBots, TReturnBots } from "../types/useGetBots"

const useGetBots: TUseGetBots = () => {
    const [bots, setBots] = useState<Bot[] | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    const fetchData: TGetBots = async() => {
        setIsLoading(true);

        let data = await getAllBotsAction();

        setIsLoading(false);


        return data
    }

    useEffect(() => {

        fetchData()
        .then(response => {
            if(response.error) {
                setError(response.error)
                return
            }

            setBots(response.data.bots)
        })
        .catch(e => {
            setError(e)
        })

    },[])

    return { bots, isLoading, error } as TReturnBots
}

export default useGetBots;
