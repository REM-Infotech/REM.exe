import React from 'react'
import { leftMenuActives } from '../../constants/leftMenuActives'
import LeftMenu from '../../components/LeftMenu'

type Props = {}

const Home = (props: Props) => {
  return (
    <LeftMenu active={leftMenuActives.bot}>
      <div>Home</div>
    </LeftMenu>
  )
}

export default Home;