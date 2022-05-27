import React from "react";
import { createRoot } from 'react-dom/client';
import { LOG_INFO } from "../Runtime/Core/Log";

import Navbar from "./components/Navbar";

import * as Spaces from "react-spaces";



import "./main.css"

function App() {
    return (
        <Spaces.ViewPort>
            <Spaces.Top size = "3%" className = "TopSpace"></Spaces.Top>
            <Spaces.Fill>
                <Spaces.LeftResizable size="20%" className = "LeftSpace" minimumSize={200} maximumSize={400}></Spaces.LeftResizable>
            </Spaces.Fill>
        </Spaces.ViewPort>
    );
}

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App></App>);

LOG_INFO("Initing Stone Engine....");