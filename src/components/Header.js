import React, {useContext} from 'react';
import Navigation from "./Navigation";
import {SWContext} from "../utils/context";
import {friends} from "../utils/constants";

const Header = () => {
    const {mainHero} = useContext(SWContext);
    return (
        <header className="rounded-top-3">
            <Navigation/>
            <h1 className="pt-5 text-center">{friends[mainHero].name}</h1>
        </header>
    );
};

export default Header;