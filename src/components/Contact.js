
import {baseUrl} from "../utils/constants";
import './Contact.css'

import React, {useEffect, useState} from 'react';

const Contact = () => {
    const[planets, setPlanets] = useState([]);

    useEffect(()=>{
        let temp = JSON.parse(sessionStorage.getItem('planets'));
        if(!temp) {
            fetch(baseUrl + 'planets')
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    let planets = data.map(item => item.name)
                    setPlanets(planets)
                    sessionStorage.setItem('planets', JSON.stringify(planets))
                })
        }
        else setPlanets(temp);

    },[]);
    return (
        <div className={'container'}>
            <form>

                <label htmlFor="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

                <label htmlFor="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

                <label htmlFor="planet">Planet</label>
                <select id="planet" name="planet">
                    {
                        planets.map((pl, index) =>
                            <option value={pl} key={index}>{pl}</option>
                        )
                    }
                </select>

                <label htmlFor="subject">Subject</label>
                <textarea id="subject" name="subject" placeholder="Write something.."></textarea>

                <input type="submit" value="Submit"/>

            </form>
        </div>
    );
};

export default Contact;
