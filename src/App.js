import React from "react";
import Childcare from './components/Childcare';
import Workout from "./components/Workout";
import Community from "./components/Community";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import "./App.css";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'


function App() {
  return (
      <div className="app">
        <NavBar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/childcare" element={<Childcare />}></Route>
          <Route path="/workout" element={<Workout/>}></Route>
          <Route path="/community" element={<Community />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
