import React, { useState } from "react";
import { Outlet } from "react-router";

import Header from "./components/Header/Header";

import ITEMS from "./constants/constants";

import "./App.scss";

function App() {
  const [state, setState] = useState({ items: ITEMS, cart: [] });

  return (
    <div className="App">
      <Header />
      <Outlet context={[state, setState]} />
    </div>
  );
}

export default App;
