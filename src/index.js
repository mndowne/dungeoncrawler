import React from "react";
import ReactDOM from "react-dom";

require('./css/style.css');


class Map extends React.Component {
    constructor(props) {
        super(props);

        this.makemap = this.makemap.bind(this);

    }

    makemap(){

        let mapArray1 = [];
        let mapArray2 = [];
        var startCorner = Math.floor(Math.random() * 4);

        var roomLength = Math.floor(Math.random() * 6) + 3;
        var roomWidth = Math.floor(Math.random() * 6) + 3;

        var roomcorner = 2;

        for (var j = 0; j < roomLength; j++){
            mapArray1 = [];
            for (let t = 0; t < roomWidth; t++){
                mapArray1.push(<div className="map"></div>);
            }
            mapArray2.push(<div className="row">{mapArray1}</div>);
        }
                
        return mapArray2;
    }

    render() {

        return(
            <div>
                <div className="map"> 
                    <Enemy />
                    <Player />
                    
                </div>
                <div className="map"></div>
                {this.makemap()}
            </div>
            
        );
    }
}





class Screen extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {

        return(
            <div id="screen">
                <Map />
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
                <h1 id="title">Dungeon World</h1>
                <Screen />
            </div>
        );
    }
}

const app = document.getElementById('app');

ReactDOM.render(<App /> , app);
