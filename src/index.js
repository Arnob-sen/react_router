import React from "react";
import App from './App';
import { createRoot } from 'react-dom/client';
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import Navbar from "./component/Navbar";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
    
    <App />
    
)