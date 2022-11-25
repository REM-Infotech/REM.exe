import React from 'react'
import { leftMenuActives } from '../../constants/leftMenuActives'
import LeftMenu from '../../components/LeftMenu'
import styled from 'styled-components'
import GridItem from './components/GridItem'
import { Bot } from '../../types/Bots'

type Props = {}

const bots: Bot[] = [
  {
    id: 1,
    title: 'Anexar Nota Técnica',
    description: 'Robô para anexar notas técnicas em lote no e-Law.',
    type: 'not',
    plataform: 'elaw',
    chips: [
      {
        label: 'e-Law',
        link: 'elaw'
      }
    ]
  },
  {
    id: 2,
    title: 'Encerramento de processos',
    description: 'Robô para encerrar processos em lote no e-Law.',
    type: 'enc',
    plataform: 'elaw',
    chips: [
      {
        label: 'e-Law',
        link: 'elaw'
      }
    ]
  },
  {
    id: 3,
    title: 'Movimentação',
    description: 'Robô para obter as movimentações de processos no e-SAJ',
    type: 'mov',
    plataform: 'esaj',
    chips: [
      {
        label: 'e-SAJ',
        link: 'esaj'
      },
      {
        label: 'Movimentação',
        link: 'move'
      },
    ]
  },
  {
    id: 4,
    title: 'Movimentação',
    description: 'Robô para obter as movimentações de processos no Projudi',
    type: 'mov',
    plataform: 'projudi',
    chips: [
      {
        label: 'Projudi',
        link: 'projudi'
      },
      {
        label: 'Movimentação',
        link: 'move'
      },
    ]
  },
  {
    id: 5,
    title: 'Peticionar',
    description: 'Robô para obter realizar peticionamento em massas de processos no Projudi.',
    type: 'pet',
    plataform: 'projudi',
    chips: [
      {
        label: 'Projudi',
        link: 'projudi'
      },
      {
        label: 'Peticionamento',
        link: 'pet'
      },
    ]
  },
]

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