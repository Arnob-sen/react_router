import React from "react";
import { BrowserRouter,Route, Routes } from "react-router-dom";

import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import Card from "./component/Card";


function App() {
 return(
  <BrowserRouter>
  <div className="App">
  <Navbar />
  <switch>
  <Routes>
  <Route  path='/' Component={Home} />
  <Route path='/about' Component={About} />
  <Route path='/contact' Component={Contact} />
  <Route path='/:user' Component={Card}/>
  </Routes>
  </switch>
  </div>
  </BrowserRouter>

 )
}

export default App;
