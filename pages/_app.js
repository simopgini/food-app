import "@/styles/globals.css";
import React from "react";
import MobileNavbar from "@/components/MobileNavbar";
import DesktopNavbar from "@/components/DesktopNavbar";

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <div className='xs:h-screen'> */}
      {/* </div> */}
        <DesktopNavbar />
        <Component {...pageProps} />
        <MobileNavbar  />
    </>
  );
}
