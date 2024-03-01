import React from "react";
import "./App.css";
import MannualPage from "./pages/MannualPage"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ResultsPage from "./pages/ResultsPage";
function App() {
  return (
    <div className="vh-100 gradient-custom">
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/results" element={<ResultsPage />} />
            <Route path="/mannual" element={<MannualPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
