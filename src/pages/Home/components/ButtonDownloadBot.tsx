import React from 'react';
import { Button } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Bot } from '../../../types/bot';
import useDownloadBot from '../../../hooks/useDownloadBot';

type Props = {
    bot: Bot
}

const ButtonDownloadBot = (props: Props) => {
    const { download, isLoading } = useDownloadBot();

    return (
        <Button 
        size="large"
        variant='contained'
        sx={{
            width: '100%'
        }}
        disableElevation
        onClick={() => download(props.bot)}
        endIcon={<OpenInNewIcon />}
    >
        { isLoading? 'Baixando...' : 'Baixar' }
    </Button>
    )
}

export default ButtonDownloadBot;