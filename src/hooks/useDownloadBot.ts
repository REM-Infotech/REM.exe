import React, { useState } from 'react';
import { downloadBotAction } from '../service/api';
import useAuthStore from '../context/authStore';
import { Bot } from '../types/bot';
import { IBot, TUseDownloadBot } from '../types/useDownloadBot';
import { createBotFile, deleteBotFile } from '../service/createBotFile';
import useDownloadedBotsStore from '../context/downloadedBotsStore';

const useDownloadBot: TUseDownloadBot = () => {
    const { token } = useAuthStore(state => ({ token: state.token }));
    const { setSaved, removeSaved } = useDownloadedBotsStore(state => ({ setSaved: state.setSaved, removeSaved: state.removeSaved }))
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [hasError, setHasError] = useState<boolean>(false);

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

        await createBotFile(botFile)
            .then(data => setSaved(botFile.id))
            .catch(error => {
                setHasError(true);
            });

        
        setIsLoading(false)

    }

    const removeDownload = async(bot: Bot) => {
        setIsLoading(true);
        const botFile: IBot = {
            ...bot,
            content: null
        }

        await deleteBotFile(botFile)
            .then(res => removeSaved(bot.id))
            .catch(err => setHasError(true));

        setIsLoading(false);
    }

    return { download, isLoading, hasError, removeDownload }
}

export default useDownloadBot;