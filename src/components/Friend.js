import React from 'react';
import {characters, navItems} from "../utils/constants";
import {Link, useNavigate} from "react-router-dom";

const Friend = (props) => {
    const navigate = useNavigate();
    let styles = "col-4 p-1"
    if(props.index===6)
      styles += " left_bottom_img";
    // return <Link className={styles} to={`/${navItems[0].route}/${props.item}`}><img className={'w-100'} src={props.img} index={props.index}
    //                onClick={() => props.changeHero(props.item)} alt="friend1"/></Link>
    return <img className={styles} src={props.img} alt={props.item}
    onClick={() => navigate(`/${navItems[0].route}/${props.item}`)}/>
};

export default Friend;