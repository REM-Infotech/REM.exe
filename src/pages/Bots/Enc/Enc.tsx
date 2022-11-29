import React, { useState } from 'react'
import BotSettingsProvider from '../../../context/botSettings';
import styled from 'styled-components';
import Tabs from '../components/Tabs';
import ErrorTab from '../components/ErrorTab';
import ProcessTab from './components/ProcessTab';

type Props = {}

const Tab2 = () => {
  return (
    <Container>
      <div>Em breve...</div>
      <div></div>
    </Container>
  )
}
const EncBot = (props: Props) => {

  return (
    <Container>
      <BotSettingsProvider>
        <Tabs
          tab1={<ProcessTab />}
          tab2={<Tab2 />}
          tab3={<ErrorTab />}
        />
      </BotSettingsProvider>
    </Container>
  )
}

export default EncBot;

const Container = styled.div`
  -webkit-app-region: no-drag;
`
