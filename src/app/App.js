//This file is primary used for routing
import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import AppLayout from "./AppLayout.js";

function App() {
  return (
    <div data-testid='app'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}> {'renders the AppLayout component when the path matches "/"'}
            <Route path=":query" element={<AppLayout />}/> {'Used in the SearchBar. this changes based on a search'}
            <Route path="/r/:selectedTopic" element={<AppLayout />} /> {'used in the Header. this changes based on the selected topic'}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
