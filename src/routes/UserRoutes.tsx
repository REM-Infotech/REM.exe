import { Route, Routes } from "react-router-dom";
import React from 'react';
import Home from "../pages/Home/Home";
import MovBot from "../pages/Bots/Mov/Mov";
import PetBot from "../pages/Bots/Pet/Pet";
import InfBot from "../pages/Bots/Inf/Inf";
import ParBot from "../pages/Bots/Par/Par";

type Props = {}

const UserRoutes = (props: Props) => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/bot/mov/:botID' element={<MovBot/>} />
      <Route path='/bot/pet/:botID' element={<PetBot/>} />
      <Route path='/bot/inf/:botID' element={<InfBot/>} />
      <Route path='/bot/par/:botID' element={<ParBot/>} />
    </Routes>
  )
}

export default UserRoutes;