import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter

import "./index.css";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    {" "}
    {/* Wrap your App component with BrowserRouter */}
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// Old code
// import React from 'react'
// import ReactDOM from 'react-dom'
// import { BrowserRouter as Router } from 'react-router-dom'

// import './index.css'
// import App from './App'

// ReactDOM.render(
// 	<Router>
// 		<App />
// 	</Router>,
// 	document.getElementById('root')
// )
