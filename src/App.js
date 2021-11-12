import React, { Component } from "react";

import Button from './button';
import Display from "./display";

class App extends Component {
    constructor(props) {
        super(props);
        this.state= {
            value: 0
        };
    }

    static getDerivedStateFromProps(props, state) {
        return null;
    }
    getVal = (value) => {
        this.setState({
            value
        })
    }
    render() {
        return (
            <>
                <Display value={this.state.value}/>
                <Button getVal= {this.getVal}/>
            </>
        );
    }
} 

export default App;
