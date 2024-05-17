import React, {useContext} from 'react';
import {SWContext} from "../utils/context";
import {Link} from "react-router-dom";
// let {text} = props
const NavItem = ({item}) => {
    const value = useContext(SWContext);
    return  (item.route === 'home' || item.route === 'about_me')?
        <Link className="nav-item btn btn-danger border border-light rounded-pill"
              to={`/${item.route}/${value.mainHero}`}>{item.title}</Link> :
    <Link className="nav-item btn btn-danger border border-light rounded-pill"
                             to={`/${item.route}`}>{item.title}</Link>

};

export default NavItem;