import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";

import { DatabaseProvider } from "./contexts/DatabaseContext.jsx";
import { HeaderProvider } from "./contexts/HeaderContext.jsx";
import Hero from "./components/Hero/Hero.jsx";
import CallToAction from "./components/CallToAction/CallToAction.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <DatabaseProvider>
      <HeaderProvider>
        <Header />
      </HeaderProvider>
      <Hero />
      <CallToAction />
      <Footer />
    </DatabaseProvider>
  );
}

export default App;
