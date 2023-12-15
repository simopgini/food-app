import "@/styles/globals.css";
import React from "react";
import MobileNavbar from "@/components/MobileNavbar";
import DesktopNavbar from "@/components/DesktopNavbar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <DesktopNavbar />
      <Component {...pageProps} />
      <MobileNavbar />
    </>
  );
}
