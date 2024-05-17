import React, {useContext} from 'react';
import {characters, friendImgs, friends} from "../utils/constants";
import Friend from "./Friend";
import {SWContext} from "../utils/context";

const Friends = () => {
    const value = useContext(SWContext)
    return (
        <section className="float-end w-50 row border border-light mx-3">
            <h3 className="col-12 text-center">Friends</h3>
            <div className="row mx-auto">
                {characters.filter(item => item !== value.mainHero).map((item, index) => {
                   return <Friend img={friends[item].img} key={index}
                                  item={item} changeHero={value.setMainHero}/>
                })}
            </div>
        </section>
    );
};

export default Friends;