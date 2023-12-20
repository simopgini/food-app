import "@/styles/globals.css";
import React from "react";
import MobileNavbar from "@/components/MobileNavbar";
import DesktopNavbar from "@/components/DesktopNavbar";
import { FavouritesProvider } from "@/store/FavoritesContext";

const App = ({ Component, pageProps }) => {
  return (
    <FavouritesProvider>
      <DesktopNavbar />
      <Component {...pageProps} />
      <MobileNavbar />
    </FavouritesProvider>
  );
};
export default App;
