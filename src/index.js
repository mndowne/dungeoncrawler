import React from "react";
import ReactDOM from "react-dom";

require('./css/style.css');


class Map extends React.Component {
    constructor(props) {
        super(props);

        this.makemap = this.makemap.bind(this);

    }

    makemap(){

        var startCorner = Math.floor(Math.random() * 4);

        var roomLength = Math.floor(Math.random() * 6) + 3;
        var roomWidth = Math.floor(Math.random() * 6) + 3;

        var roomcorner = 2;

        // for (var corner = 1; 
        
    }

    render() {

        return(
            <div id="Map"> 
                <Enemy />
                <Player />
                
            </div>
        );
    }
}





class Player extends React.Component {
    constructor(props) {
        super(props);

        this.state = { alive : "dead" };
    }

    render() {

        return(
            <div id="player"> </div>
        );
    }
}






class Enemy extends React.Component {
    constructor(props) {
        super(props);

        this.state = { alive : "dead" };
    }

    render() {

        return(
            <div id="enemy"> </div>
        );
    }
}





class App extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <div>
                <Map />
                Hello World
            </div>
        );
    }
}

const app = document.getElementById('app');

ReactDOM.render(<App /> , app);
