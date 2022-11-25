import React from 'react'
import { leftMenuActives } from '../../constants/leftMenuActives'
import LeftMenu from '../../components/LeftMenu'
import styled from 'styled-components'
import GridItem from './components/GridItem'
import { Bot } from '../../types/Bots'
import { bots } from '../../constants/bots'

type Props = {}

const Home = (props: Props) => {
  return (
    <LeftMenu active={leftMenuActives.bot}>
      <Container>
        <Grid>
          {bots.map(bot => 
            <GridItem
              key={bot.id}
              bot={bot}
            />
          )}
        </Grid>
      </Container>
    </LeftMenu>
  )
}

export default Home;

const Container = styled.div`
  padding-top: 1rem;
`
const Grid = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`