import React from 'react';
import { Button, IconButton  } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import CircularProgress from '@mui/material/CircularProgress';
import ClearIcon from '@mui/icons-material/Clear';
import { Bot } from '../../../types/bot';
import useDownloadBot from '../../../hooks/useDownloadBot';
import styled from 'styled-components';
import useDownloadedBotsStore from '../../../context/downloadedBotsStore';

type Props = {
    bot: Bot
}

const ButtonDownloadBot = (props: Props) => {
    const { download, isLoading, hasError, removeDownload } = useDownloadBot();
    const { saved } = useDownloadedBotsStore(state => ({ saved: state.saved }));
    const botAlreadyDownloaded = saved[props.bot.id];

    const downloadOrRemoveBot = () => {
        if(botAlreadyDownloaded) {
            removeDownload(props.bot);
            return
        }
        
        download(props.bot)
    }

    return (
        <Container>
            {/* <Button 
                size="large"
                variant='text'
                disableElevation
                onClick={() => download(props.bot)}
                endIcon={<OpenInNewIcon />}
            >
                { isLoading? 'Baixando...' : 'Baixar' }
            </Button> */}
            <IconButton 
                aria-label="download bot" 
                component="label"
                disabled={isLoading}
                onClick={() => downloadOrRemoveBot()}
            >
                {isLoading? <CircularProgress size={17} /> : botAlreadyDownloaded ? <ClearIcon /> : <DownloadIcon />}
            </IconButton>
            
        </Container>
    )
}

export default ButtonDownloadBot;

const Container = styled.div``