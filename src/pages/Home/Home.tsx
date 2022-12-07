import React from 'react'
import { leftMenuActives } from '../../constants/leftMenuActives'
import LeftMenu from '../../components/LeftMenu'
import styled from 'styled-components'
import GridItem from './components/GridItem'
import useGetBots from '../../hooks/useGetBots'
import { CircularProgress } from '@mui/material';

type Props = {}

const Home = (props: Props) => {
  const { bots, isLoading, error } = useGetBots();

  if(isLoading) {
    return (
      <LeftMenu active={leftMenuActives.bot}>
        <ProgressContainer>
          <CircularProgress color='secondary' size={100} />
        </ProgressContainer>
      </LeftMenu>
    )
  }
  
  return (
    <LeftMenu active={leftMenuActives.bot}>
        <Grid>
          {bots.map((bot, index) => 
            <GridItem
              index={index}
              key={bot.id}
              bot={bot}
            />
          )}
        </Grid>
    </LeftMenu>
  )
}

export default Home;

const Container = styled.div`
`
const Grid = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`
const ProgressContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
`