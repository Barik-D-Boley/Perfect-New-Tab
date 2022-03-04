/* Misc */
import React from 'react';
import "./Styling/main.css";

/* Routing */
import ReactDOM from "react-dom";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

/* Pages */
import Home from "./Pages/Home"

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    </BrowserRouter>,
  document.getElementById('root')
);