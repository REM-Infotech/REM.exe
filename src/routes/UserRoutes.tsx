import { Route, Routes } from "react-router-dom";
import React from 'react';
import Home from "../pages/Home/Home";
import MovBot from "../pages/Bots/Mov/Mov";
import PetBot from "../pages/Bots/Pet/Pet";

type Props = {}

const UserRoutes = (props: Props) => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/bot/mov/:botID' element={<MovBot/>} />
      <Route path='/bot/pet/:botID' element={<PetBot/>} />
    </Routes>
  )
}

export default UserRoutes;