import React, { useState } from 'react'
import BotSettingsProvider from '../../../context/botSettings';
import styled from 'styled-components';
import ProcessTab from './components/ProcessTab';
import Tabs from './components/Tabs';

type Props = {}

const Tab2 = () => {
  return (
    <Container>
      <div>Em breve...</div>
      <div></div>
    </Container>
  )
}
const Tab3 = () => {
  return (
    <Container>
      <div>Em breve...</div>
      <div></div>
    </Container>
  )
}
const MovBot = (props: Props) => {

  return (
    <Container>
      <BotSettingsProvider>
        <Tabs
          tab1={<ProcessTab />}
          tab2={<Tab2 />}
          tab3={<Tab3 />}
        />
      </BotSettingsProvider>
    </Container>
  )
}

export default MovBot;

const Container = styled.div`
  -webkit-app-region: no-drag;
`
