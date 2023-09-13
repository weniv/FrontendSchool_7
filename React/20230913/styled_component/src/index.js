import React from "react";
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from "react-dom/client";
// import App from "./App";
// import App1 from "./App1";
// import App2 from "./App2";
// import App3 from "./App3";
// import App4 from "./App4";
// import App5 from "./App5";
import 실습 from "./실습";

const container = document.getElementById("root");
const root = createRoot(container);
// root.render(<App />);
// root.render(<App1 />);
// root.render(<App2 />);
// root.render(<App3 />);
// root.render(<App4 />);
// root.render(<App5 />);
root.render(<실습 />);

