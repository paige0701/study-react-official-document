import React from 'react';
import './App.css';
import Clock from "./Clock";
import ToggleBtn from "./ToggleBtn";
import LoginControl from "./LoginControl";
import NumberList from "./NumberList";
import Blog from "./Blog";
import NameForm from "./Forms";
import FlavorForm from "./Forms";
import Calculator from "./Calculator";

const App = () => {
    const temp = [
        <Clock></Clock>,
        <ToggleBtn></ToggleBtn>,
        <LoginControl/>,
        <NumberList/>,
        <Blog/>,
        <NameForm/>,
        <FlavorForm/>,
        <Calculator/>
    ]

    return (
        temp[7]
    )}

export default App;
