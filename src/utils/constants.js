
import friend1 from '../images/friend1.jpg'
import friend2 from '../images/friend2.jpg'
import friend3 from '../images/friend3.jpg'
import friend4 from '../images/friend4.jpg'
import friend5 from '../images/friend5.jpg'
import friend6 from '../images/friend6.jpg'
import friend7 from '../images/friend7.jpg'
import friend8 from '../images/friend8.jpg'
import friend9 from '../images/friend9.jpg'
import friend0 from '../images/main.jpg'

export const baseUrl = 'https://sw-info-api.herokuapp.com/v1/';
//https://sw-info-api.herokuapp.com/v1/peoples/1
// export const friendImgs = [friend1, friend2, friend3, friend4, friend5, friend6, friend7, friend8,
// friend9]

export const friends = {
    luke: {
        name: "Luke Skywalker",
        img: friend0,
        url: `${baseUrl}peoples/1`,
    },
    r2d2: {
        name: "R2-D2",
        img: friend1,
        url: `${baseUrl}peoples/3`,
    },
    c3po: {
        name: "C-3PO",
        img: friend2,
        url: `${baseUrl}peoples/2`,
    },
    ewok: {
        name: "Wicket Systri Warrick",
        img: friend3,
        url: `${baseUrl}peoples/30`,
    },
    chewbacca: {
        name: "Chewbacca",
        img: friend4,
        url: `${baseUrl}peoples/13`,
    },
    han_solo: {
        name: "Han Solo",
        img: friend5,
        url: `${baseUrl}peoples/14`,
    },
    leia: {
        name: "Leia Organa",
        img: friend6,
        url: `${baseUrl}peoples/5`,
    },
    falcon: {
        name: "Millenium Falcon",
        img: friend7,
        url: `${baseUrl}transports/10`,
    },
    obi_wan: {
        name: "Obi-Wan Kenobi",
        img: friend8,
        url: `${baseUrl}peoples/10`,
    },
    yoda: {
        name: "Yoda",
        img: friend9,
        url: `${baseUrl}peoples/0`,
    },
};
export  const characters = Object.keys(friends);
export const defaultHero = characters[0];
export const navItems = [
    {title:'Home', route: 'home'},
    {title: 'About me', route: 'about_me'},
    {title: 'Star wars', route: 'star_wars'},
    {title: 'Contact', route: 'contact'}
];



