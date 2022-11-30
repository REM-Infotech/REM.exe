import { Box, Button, Tab } from '@mui/material';
import { default as TabsElement } from '@mui/material/Tabs';
import React, { useState } from 'react';
import styled from 'styled-components';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

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

const Tabs = (props: Props) => {
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
                    endIcon={<PowerSettingsNewIcon />}
                >
                    Ligar robô
                </Button>
            </ButtonContainer>
        <TabsElement 
            value={value} 
            onChange={handleChange} 
            aria-label="basic tabs example"
        >   
            <Tab label="Processos" {...a11yProps(0)} />
            <Tab label="Configurações" {...a11yProps(1)} disabled />
            <Tab label="Erros" {...a11yProps(2)} />
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