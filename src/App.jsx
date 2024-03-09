import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";

import { DatabaseProvider } from "./contexts/DatabaseContext.jsx";
import { HeaderProvider } from "./contexts/HeaderContext.jsx";
import Hero from "./components/Hero/Hero.jsx";

function App() {
  return (
    <DatabaseProvider>
      <HeaderProvider>
        <Header />
        <Hero />
      </HeaderProvider>
    </DatabaseProvider>
  );
}

export default App;
