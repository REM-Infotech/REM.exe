import { Route, Routes } from "react-router-dom";
import React from 'react';
import Home from "../pages/Home/Home";

type Props = {}

const UserRoutes = (props: Props) => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
    </Routes>
  )
}

export default UserRoutes;