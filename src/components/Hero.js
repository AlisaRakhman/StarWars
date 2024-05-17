import React, {useContext} from 'react';
import {SWContext} from "../utils/context";
import {friends} from "../utils/constants";

const Hero = () => {
    const{mainHero} = useContext(SWContext)
    return (
        <section className="float-start w-25 my-3 mx-2 left">
            {/*<img src={require("../images/main.jpg")} alt="Hero" className="w-100 me-1"/>*/}
            <img src={friends[mainHero].img} alt={friends[mainHero].name} className="w-100 me-1"/>
        </section>
    );
};

export default Hero;