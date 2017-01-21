import React from "react";
import ReactDOM from "react-dom";

require('./css/style.css');

class App extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <div>
                Hello World
            </div>
        );
    }
}

const app = document.getElementById('app');

ReactDOM.render(<App /> , app);
