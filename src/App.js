import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import {defaultHero, navItems} from "./utils/constants";
import {SWContext} from "./utils/context";

import React, {useState} from 'react';

const App = () => {
const[mainHero, setMainHero] = useState(defaultHero);
    return (
        <div className="App container-fluid">
            <SWContext.Provider value={{
            mainHero,setMainHero
            }}>
                <Header/>
                <Main/>
            </SWContext.Provider>
            <Footer/>
        </div>
    );
};

export default App;


