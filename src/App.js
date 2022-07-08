import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Home from "./components/Home";
import FormError from "./components/FormError";
import CssModule from "./components/cssModules/css_module";
import Memo from "./components/CallBack/Index";
import MemoDemo from "./components/Memo/MemoDemo";


function App() {
    return (
        <div className="App" id="wrapper">
            <BrowserRouter>
                <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/form-validation" element={<FormError />} />
                <Route path="/css-module" element={<CssModule />} />
                <Route path="/memo" element={<Memo />} />
                <Route path="/memo-demo" element={<MemoDemo />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
