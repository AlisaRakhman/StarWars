import React, {Component} from 'react';
import {baseUrl} from "../utils/constants";

class FarGalaxyLoad extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "...LOADING"
        }
    }
componentDidMount() {


        if(sessionStorage.getItem('text')){
            this.setState({
                text: sessionStorage.getItem('text')
            })
        }
        else{
            let part = Math.floor(Math.random()*5 + 1);
            fetch(baseUrl+'films/'+part)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    sessionStorage.setItem('text', data.opening_crawl);
                    this.setState({
                        text: data.opening_crawl
                    })
                })
                .catch(e => {
                    this.setState({text:"Bad REQUEST"})
                })
        }
}

    render() {
        return (
            <div className={"farGalaxy"}>
                {this.state.text}
            </div>
        );
    }
}

export default FarGalaxyLoad;