import React from 'react';
import './App.css';
import Clock from "./Clock";
import ToggleBtn from "./ToggleBtn";
import LoginControl from "./LoginControl";
import NumberList from "./NumberList";
import Blog from "./Blog";
import NameForm from "./Forms";
import FlavorForm from "./Forms";

const App = () => {
    const temp = [
        <Clock></Clock>,
        <ToggleBtn></ToggleBtn>,
        <LoginControl/>,
        <NumberList/>,
        <Blog/>,
        <NameForm/>,
        <FlavorForm/>
    ]

    return (
        temp[5]
    )}

export default App;
