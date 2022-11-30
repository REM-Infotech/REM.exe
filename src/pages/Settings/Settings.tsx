import React from 'react'
import LeftMenu from '../../components/LeftMenu';
import styled from 'styled-components';
import { leftMenuActives } from '../../constants/leftMenuActives';
import FormSettings from './components/FormSettings';

type Props = {}

const Settings = (props: Props) => {
  return (
    <LeftMenu active={leftMenuActives.settings}>
      <Container>
        <FormSettings />
      </Container>
    </LeftMenu>
  )
}

export default Settings;

const Container = styled.div`
  width: 100%;
`