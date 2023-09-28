import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import AppLayout from "./AppLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
        </Route>
      </Routes>
      {/*Her skal jeg have mine Routes og Route*/}
    </BrowserRouter>
  );
}

export default App;
