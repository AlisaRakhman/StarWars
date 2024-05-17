import React from 'react';
import {navItems} from "../utils/constants";
import NavItem from "./NavItem";

const Navigation = () => {
    return (
        <nav>
            <ul className="nav fixed-top mt-2 ms-5 gap-2">
                {
                    navItems.map((item, index) =>
                    <NavItem item={item} key={index}/>)
                }
            </ul>
        </nav>
    );
};

export default Navigation;