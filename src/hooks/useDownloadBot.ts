import React, { useState } from 'react';
import { downloadBotAction } from '../service/api';
import useAuthStore from '../context/authStore';
import { Bot } from '../types/bot';
import { IBot, TUseDownloadBot } from '../types/useDownloadBot';
import { createBotFile } from '../service/createBotFile';
import useDownloadedBotsStore from '../context/downloadedBotsStore';

const useDownloadBot: TUseDownloadBot = () => {
    const { token } = useAuthStore(state => ({ token: state.token }));
    const { setSaved } = useDownloadedBotsStore(state => ({ setSaved: state.setSaved }))
    const [isLoading, setIsLoading] = useState<Boolean>(false);
    const [hasError, setHasError] = useState<Boolean>(false);

    const download = async(bot: Bot) => {
        setIsLoading(true);

        const request = {
            link: bot.link
        }
        const response = await downloadBotAction(token, request);
        const botFile: IBot = {
            ...bot,
            content: response.data
        }
        console.log(botFile);

        await createBotFile(botFile)
            .then(data => setSaved(botFile.id))
            .catch(error => {
                setHasError(true);
            });

        
        setIsLoading(false)

    }

    return { download, isLoading, hasError }
}

export default useDownloadBot;