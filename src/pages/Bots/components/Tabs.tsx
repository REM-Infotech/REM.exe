import { Badge, Box, Button, CircularProgress, Tab } from '@mui/material';
import { default as TabsElement } from '@mui/material/Tabs';
import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { BotSettingsContext } from '../../../context/botSettings';
import { BotSettingsContextType, ErrorLog } from '../../../context/botSettings/botSettings';
import { colors } from '../../../service/theme';
import { downloadBots } from '../../../service/createBotFile';
import useAuthStore from '../../../context/authStore';

type Props = {
    tab1?: React.ReactNode;
    tab2?: React.ReactNode;
    tab3?: React.ReactNode;
}

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

type TErrorsLabelProps = {
    errorsLog: ErrorLog[]
}

const a11yProps = (index: number) => {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const TabPanel = (props: TabPanelProps) => {
    const { children, value, index, ...other } = props;

    return (
        <TabPanelContainer
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
            className='scroll_enabled'
        >
        {value === index && (
            <Box sx={{ p: 3 }}>
                {children}
            </Box>
        )}
        </TabPanelContainer>
    );
}

const ErrorLabel = (props: TErrorsLabelProps) => {

    return (
        <Badge 
            badgeContent={props.errorsLog.length} 
            max={99}
            color="error"
            sx={{
                '& .MuiBadge-badge': {
                    right: -5,
                    border: `2px solid ${colors.primary}`,
                    padding: '0 4px',
                },
            }}
        >
            Erros
        </Badge>
    )
}

const Tabs = (props: Props) => {
    const { 
        errorsLog,
        execBot,
        isRunning
     } = useContext(BotSettingsContext);
     const { token } = useAuthStore(state => ({ token: state.token }))
    const [value, setValue] = useState<number>(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

  return (
    <>
    <Box 
        sx={{ 
            borderBottom: 1, 
            borderColor: 'divider',
            position: 'relative',
            '& .MuiTab-root.MuiTab-textColorPrimary': {
                color: 'white',
                opacity: .5
            },
            '& .MuiTab-root.MuiTab-textColorPrimary:hover': {
                opacity: 1
            },
            '& .MuiTab-root.MuiTab-textColorPrimary.Mui-selected': {
                opacity: 1
            },
            '& .MuiTabs-indicator': {
                backgroundColor: 'white'
            },
            '& .MuiTabs-flexContainer': {
                justifyContent: 'center'
            }
        }}
    >
            <ButtonContainer>
                <Button
                    variant='contained'
                    disableElevation
                    endIcon={isRunning? <CircularProgress color='secondary' size={20} /> : <PowerSettingsNewIcon />}
                    onClick={() => execBot()}
                    disabled={isRunning}
                >
                    <ButtonText disabled={isRunning}>
                        {isRunning? 'Robô ligado' : 'Ligar robô'}
                    </ButtonText>
                </Button>
            </ButtonContainer>
        <TabsElement 
            value={value} 
            onChange={handleChange} 
            aria-label="basic tabs example"
        >   
            <Tab label="Processos" {...a11yProps(0)} />
            <Tab label="Configurações" {...a11yProps(1)} disabled />
            <Tab label={<ErrorLabel errorsLog={errorsLog} />} {...a11yProps(2)} />
        </TabsElement>
    </Box>
    <TabPanel value={value} index={0}>
        {props.tab1}
    </TabPanel>
    <TabPanel value={value} index={1}>
        {props.tab2}
    </TabPanel>
    <TabPanel value={value} index={2}>
        {props.tab3}
    </TabPanel>
    </>
  )
}

export default Tabs;

const TabPanelContainer = styled.div`
    max-height: 90%;
`
const ButtonContainer = styled.div`
    position: absolute;
    right: 1rem;
    z-index: 9999;
    top: 5px;
`
const ButtonText = styled.span<{disabled: boolean}>`
    color: ${colors.secondary};
`