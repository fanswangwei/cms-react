import React, { Component } from 'react';
import './App.scss';
import PublicHeader from "./publicComponents/publicHeader";

class App extends Component {
    constructor (props){
        super(props);
        this.changeBG = this.changeBG.bind(this)
    }
    changeBG(argu){
        this.setState(prevProps => ({

        }))
        console.log(argu);
    }
    render() {
        return (
            <div className="App">
                <PublicHeader changeBG={this.changeBG}/>
            </div>
        );
    }
}

export default App;
