import React, {useContext} from 'react';
import Home from "./Home";
import AboutMe from "./AboutMe";
import {navItems} from "../utils/constants";
import StarWars from "./StarWars";
import Contact from "./Contact";
import {SWContext} from "../utils/context";
import {Route, Routes, Switch} from "react-router-dom";
import ErrorPage from "./ErrorPage";


const Main = () => {
    const {setMainHero} = useContext(SWContext)
    return (
        <Routes>
            {['/', `/${navItems[0].route}`, `/${navItems[0].route}/:hero`].map(path =>
            <Route path={path} key={path} element={<Home/>}/>)}
            <Route path={`/${navItems[1].route}`} element={<AboutMe changeHero={setMainHero}/>}>
                <Route path={':hero'} element={<AboutMe/>}/>
            </Route>
                <Route path={`/${navItems[2].route}`} element={<StarWars/>}/>
               <Route path={`/${navItems[3].route}`} element={<Contact/>}/>
            <Route element={<ErrorPage/>}/>
        </Routes>


        // <Switch>
        //     <Route path={['/', `/${navItems[0].route}`, `/${navItems[0].route}/:hero`]} exact component={Home}/>
        //     <Route path={[`/${navItems[1].route}`,`/${navItems[1].route}/:hero` ]} exact
        //            render={(routeProps) => <AboutMe {...routeProps} changeHero={setMainHero}/>}/>
        //     <Route path={`/${navItems[2].route}`} exact component={StarWars}/>
        //     <Route path={`/${navItems[3].route}`} exact component={Contact}/>
        //     <Route component={ErrorPage}/>
        // </Switch>
    );
};

export default Main;



