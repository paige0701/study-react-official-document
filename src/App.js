import React from 'react';
import './App.css';
import Clock from "./Clock";
import ToggleBtn from "./ToggleBtn";
import LoginControl from "./LoginControl";
import NumberList from "./NumberList";
import Blog from "./Blog";

const App = () => {
    const temp = [
        <Clock></Clock>,
        <ToggleBtn></ToggleBtn>,
        <LoginControl/>,
        <NumberList/>,
        <Blog/>
    ]

    return (
        temp[4]
    )}

export default App;
