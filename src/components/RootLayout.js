import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

function RootLayout() {
  return (
    <div className="App">
      <Navbar/>
      <div id='layout'>
        <Sidebar/>
        <Outlet/>
      </div>
    </div>
  );
}

export default RootLayout;
