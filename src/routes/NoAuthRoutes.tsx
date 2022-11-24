import { Route, Routes } from "react-router-dom";
import React from 'react';
import Login from '../pages/Login/Login';

type Props = {}

const NoAuthRoutes = (props: Props) => {
  return (
    <Routes>
      <Route path='/' element={<Login/>} />
    </Routes>
  )
}

export default NoAuthRoutes;