import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import CreatePosts from "./CreatePosts";
import ShowPosts from "./ShowPosts";



function App() {
  return(
    <div className="App">
      <Router>
      <Routes>
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/createPosts" element={<CreatePosts/>} />
          <Route path="/showPosts" element={<ShowPosts/>} />
          </Routes>
          <ul>
            <li>
              <Link to="/signin">SignIn</Link>
            </li>
            <li>
              <Link to="/signup">SignUp</Link>
            </li>
            <li>
              <Link to="/createPosts">createPosts</Link>
            </li>
            <li>
              <Link to="/showPosts">showPosts</Link>
            </li>
          </ul>
      </Router>
    </div>
  );
}

export default App;