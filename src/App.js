import React from "react";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";


function App() {
 return(
  <BrowserRouter>
  <div className="App">
  <Navbar />
  <Routes>
  <Route  path='/' Component={Home} />
  <Route path='/about' Component={About} />
  <Route path='/contact' Component={Contact} />
  </Routes>
  </div>
  </BrowserRouter>

 )
}

export default App;
