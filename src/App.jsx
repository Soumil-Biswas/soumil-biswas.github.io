import Header from './Content/header/Header'
import Footer from './Content/footer/Footer'
import { Outlet, ScrollRestoration } from "react-router-dom";
import LocoMotive from './utils/LocoMotive';
import Loader from './Components/Loader';
import { useState, useEffect } from 'react';
import { Flash } from './Components/Flash';

function App() {
  return (
    <LocoMotive>
      {/* <div className='w-full h-auto'> */}
      <div className='w-full bg-white min-h-screen magic-center justify-between relative overflow-x-hidden'>
        <ScrollRestoration />
        <Flash />
        <Header />
        <Outlet />
        <Footer />
        <Loader />
      </div>
    </LocoMotive>
  )
}

export default App
