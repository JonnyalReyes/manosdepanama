import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";

import { DatabaseProvider } from "./contexts/DatabaseContext.jsx";
import { HeaderProvider } from "./contexts/HeaderContext.jsx";
import CallToAction from "./components/CallToAction/CallToAction.jsx";

function App() {
  return (
    <DatabaseProvider>
      <HeaderProvider>
        <Header />
        <CallToAction />
      </HeaderProvider>
    </DatabaseProvider>
  );
}

export default App;
