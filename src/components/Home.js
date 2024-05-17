import friend0 from '../images/main.jpg'
import Hero from "./Hero";
import Friends from "./Friends";

import FarGalaxyLoad from "./FarGalaxyLoad";

import React, {useContext, useEffect, useState} from 'react';
import {characters, defaultHero, friendImgs, friends} from "../utils/constants";
import {SWContext} from "../utils/context";
import {useParams} from "react-router-dom";


const Home = (props) => {
    // const[mainHero, setMainHero] = useState(friend0);
    // const changeHero = (hero_index) => {
    //     let key = characters[hero_index];
    //     setMainHero(friends[key].img)
    // }
    const value = useContext(SWContext)
    const {hero} = useParams();
    let key = hero;
    useEffect(() => {
    //    let key = props.match.params.hero;
        if(!key || !characters.includes(key))
            key = defaultHero;
        value.setMainHero(key);
    }, [hero])

    return (
        <main className="clearfix">
            <Hero/>
            <Friends/>
            <FarGalaxyLoad/>
        </main>
    );
};

export default Home;

