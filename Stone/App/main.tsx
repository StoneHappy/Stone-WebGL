import ReactDOM from 'react-dom';
import React from "react"
import { createRoot } from 'react-dom/client';
import { LOG_INFO } from "../Runtime/Core/Log";

import Navbar from "./components/Navbar";

import "./main.css"
import File from './components/Menu';

function App() {
    return (
        <File></File>
    );
}

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App></App>);

LOG_INFO("Initing Stone Engine....");