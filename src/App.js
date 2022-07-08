import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import React from 'react'
import NoteState from "./context/notes/NoteState";
import About from "./Components/About";

function App() {

  return (
    <>
      <NoteState>
        <Router>
          <Navbar title='iNotesApp' />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About/>} />
          </Routes>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
