
import {baseUrl, characters, defaultHero} from "../utils/constants";
import React, {useContext, useEffect, useState} from 'react';
import {friends} from "../utils/constants";
import {SWContext} from "../utils/context";
import {useParams} from "react-router-dom";

const AboutMe = (props) => {
    const[data, setData] = useState({});
    const {mainHero} = useContext(SWContext);
    let {hero} = useParams();

    useEffect(() => {
    //    let key = props.match.params.hero;
        if(!characters.includes(hero))
            hero = defaultHero;
   //     setMainHero(key);
        props.changeHero(hero);
        let heroInfo = JSON.parse(sessionStorage.getItem(hero));
        if(!heroInfo) {
            fetch(friends[hero].url)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    setData({...data})
                    sessionStorage.setItem(hero, JSON.stringify({...data}))
                })
        }
        else setData(heroInfo)


    }, []);
    return (
        <div className={'farGalaxy'}>
            <p>"name": {data.name}</p>
            <p>"birth_year": {data.birth_year}</p>
            <p>"eye_color": {data.eye_color}</p>
            <p>"gender": {data.gender}</p>
            <p>"hair_color": {data.hair_color}</p>
            <p>"height": {data.height}</p>
            <p>"skin_color": {data.skin_color}</p>
        </div>
    );
};

export default AboutMe;
