import React from "react";
import { createRoot } from 'react-dom/client';
import Navbar from "./components/Navbar";

import "./main.css"

import Log from "../Runtime/Core/Log";

function App() {
      return (
          <div>
              <Navbar></Navbar>
          </div>
      );  
}

Log("asdasd");
const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App></App>);