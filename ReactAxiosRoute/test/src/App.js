import React from "react";
import List from "./components/List";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import "../src/App.css"
import { ListDetail } from "./components/ListDetail";
import Login from "./components/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />}></Route>
        <Route path="list" element={<List />}></Route>
        <Route path="/list/:id" element={<ListDetail />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
