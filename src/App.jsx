import Header from './Content/header/Header'
import Footer from './Content/footer/Footer'
import Topcontacts from './Content/Topcontacts'
import { Outlet, ScrollRestoration } from "react-router-dom";
import LocoMotive from './utils/LocoMotive';
import Loader from './Components/Loader';
import { useState, useEffect } from 'react';
import PopupAnnouncement from './Content/heroPage/PopupAnnouncement';
import { Flash } from './Components/Flash';

function App() {

  useEffect(() => {
    const timer = setTimeout(() => {
      const popupData = localStorage.getItem("popUpChecked");
      if (popupData) {
        const { expiresAt } = JSON.parse(popupData);
        if (new Date().getTime() > expiresAt) {
          // Popup expired, clear it from localStorage
          localStorage.removeItem("popUpChecked");
          // console.log("hit2");
          setShowPopup(true);
        }
      } else {
        // No popup data found, resume default behaviour        
        setShowPopup(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const [showPopup, setShowPopup] = useState(false);

  const closePopup = () => {
    const expirationTime = new Date().getTime() + 24 * 60 * 60 * 1000; // Current time + 24 hours in milliseconds
    localStorage.setItem("popUpChecked", JSON.stringify({ expiresAt: expirationTime }));
    setShowPopup(false);
  };

  return (
    <LocoMotive>
      {/* <div className='w-full h-auto'> */}
      <div className='w-full bg-white min-h-screen flex flex-col items-center p-light relative overflow-x-hidden pt-[120px]'>
        <ScrollRestoration />
        <Flash />
        <Topcontacts />
        <Header />
        <Outlet />
        <Footer />
        <Loader />
        <PopupAnnouncement showPopup={showPopup} onClose={closePopup} />
      </div>
    </LocoMotive>
  )
}

export default App
