import React from 'react';
import { Button, IconButton  } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import CircularProgress from '@mui/material/CircularProgress';
import DeleteIcon from '@mui/icons-material/Delete';
import { Bot } from '../../../types/bot';
import useDownloadBot from '../../../hooks/useDownloadBot';
import styled from 'styled-components';
import useDownloadedBotsStore from '../../../context/downloadedBotsStore';

type Props = {
    bot: Bot
}

const ButtonDownloadBot = (props: Props) => {
    const { download, isLoading } = useDownloadBot();
    const { saved } = useDownloadedBotsStore(state => ({ saved: state.saved }));
    const botAlreadyDownloaded = saved[props.bot.id];

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
            onClick={() => download(props.bot)}
        >
            {isLoading? <CircularProgress size={17} /> : botAlreadyDownloaded ? <DeleteIcon /> : <DownloadIcon />}
        </IconButton>
            
        </Container>
    )
}

export default ButtonDownloadBot;

const Container = styled.div``