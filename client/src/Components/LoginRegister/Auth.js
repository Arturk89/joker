import React from 'react'
import Login from './Components/Login';
import Register from './Components/Register';
import Wallpaper from './Components/Wallpaper';
import { NavLink, Route } from 'react-router-dom';

import "./style.scss";

const Auth = () => {
    return (
        <div className="auth">
            <div className="leftSide">
                <Wallpaper />
            </div>
            <div className="rightSide">

            </div>
        </div>
    )
}

export default Auth;
