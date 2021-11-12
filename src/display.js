import React, { Component } from "react";

import { connect } from 'react-redux';

class Display extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            myArr: ['iam 1', 'iam 2', 'iam 3']
        };
    }
    render() {
        return (
            <>
                <h1>{this.props.count}</h1>
                <ul>
                    {
                       this.state.myArr.map((index, data) => {
                           return (
                               <li key={index}>
                                   {data}
                               </li>
                           );
                       }) 
                    }
                </ul>
            </>
        );
    }
} 

const mapStatetoProps = (state) => {
   return {
     count: state.count   
    }
}

export default connect(mapStatetoProps)(Display);
