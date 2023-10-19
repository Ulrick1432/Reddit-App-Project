//This file is primary used for routing
import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import AppLayout from "./AppLayout.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path=":query" element={<AppLayout />}/> {/*Se sidste svar fra chat GPT*/}
        </Route>
      </Routes>
      {/*Her skal jeg have mine Routes og Route*/}
    </BrowserRouter>
  );
}

export default App;
