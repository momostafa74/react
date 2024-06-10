import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Index from "./component/index";
import Navbar from "./component/Navbar";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Index />} />
            <Route path="/Contact" element={<Index />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
