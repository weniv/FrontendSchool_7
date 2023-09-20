import React from "react";
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from "react-dom/client";
import App from "./App";
import App2 from "./App2";
import App3 from './App3';
import App4 from "./App4";
import { DarkMode } from "./DarkMode";
import ClassLifeCycle from "./ClassLifeCycle";
import Wrap from "./HookLifeCycle";
import LayoutEffect from "./LayoutEffect";


const container = document.getElementById("root");
const root = createRoot(container);
root.render(<LayoutEffect />);
