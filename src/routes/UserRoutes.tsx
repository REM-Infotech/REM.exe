import { Route, Routes } from "react-router-dom";
import React from 'react';
import Login from '../pages/Login/Login';

type Props = {}

const AdminRoutes = (props: Props) => {
  return (
    <Routes>
      <Route path='/' element={<Login/>} />
    </Routes>
  )
}

export default AdminRoutes;