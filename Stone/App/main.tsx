import React from "react";
import { createRoot } from 'react-dom/client';
import { LOG_INFO } from "../Runtime/Core/Log";

import Navbar from "./components/Navbar";

import "./main.css"

function App() {
      return (
          <div>
              <Navbar></Navbar>
          </div>
      );  
}

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App></App>);

LOG_INFO("Initing Stone Engine....");