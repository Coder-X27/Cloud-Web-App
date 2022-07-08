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
          <div className="container">
            <Navbar title='iNotesApp' />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
