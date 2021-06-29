import banner from './banner.png';
import menu from './menu.png';
import close from './close.png';
import React, { useState } from "react";

import './App.css';
function App() {

    const [isActive, setActive] = useState("true");

    const handleToggle = () => {
        setActive(!isActive);
    };
    const handleToggleCls = () => {
        setActive(!isActive);
    };
    return (
        <div className="img_bck">
            <div className="container flx_itm mnu_cont">
                <img className="mble_tgle" onClick={handleToggle} src={menu} alt="menu"></img>
                <img className={`mble_close_tgle ${!isActive ? "cls" : ""}`} onClick={handleToggleCls} src={close} alt="close"></img>
                <div className="logo">
                    <div>Maxeon</div>
                </div>
                <div className={`right_menu ${!isActive ? "mble_mnu" : ""}`}>
                    <nav className="flx_itm">
                        <a href="/html/">Products</a>
                        <a href="/css/">Features</a>
                        <a href="/css/">Use Cases</a>
                        <a href="/js/">Pricing</a>
                        <div className="btn_css">
                            <a href="" className="btn_login">Login</a>
                        </div>
                    </nav>
                </div>
            </div>
            <div className="left_content">
                    Where words fail, Music speaks.
                </div>
        </div>

    );
}

export default App;
