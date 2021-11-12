import React, { Component } from "react";

import { connect } from 'react-redux';

import {
    inc,
    dec
} from './action';

class Button extends Component {
    constructor(props) {
        super(props);
        this.state= {
            value: 0
        };
    }
    inc = () => {
        this.props.inc();
    }
    dec = () => {
        this.props.dec();
    }
    render() {
        return (
            <>
                <button onClick={this.inc}> 
                    +
                </button>
                <button onClick={this.dec}> 
                    -
                </button>
            </>
        );
    }
}

const mapDispatchtoProps = (dispatch) => {
    return {
        inc: () => dispatch(inc()),
        dec: () => dispatch(dec())
    };
}

export default connect('',mapDispatchtoProps)(Button);
