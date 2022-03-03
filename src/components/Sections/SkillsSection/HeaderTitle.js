import React, { Component } from 'react'
import { motion } from 'framer-motion'

export default class HeaderTitle extends Component {

    constructor ( props ){
        super(props);
        this.state = {
            titleText: props.titleText,
            selected: props.selected ? true : false,
        };
    }


    HeaderStyle = {
        flexBasis: '100px',
        flexGrow: 1,
        textAlign: 'center',
        color: 'rgb(87, 110, 215)',
        textDecoration: 'underline wavy rgb(87, 110, 215)',
        textUnderlineOffset: '0.3em',
    }

    HeaderStyleDeselected = {
        flexBasis: '100px',
        flexGrow: 1,
        textAlign: 'center',
        color: 'rgb(178, 188, 242)',
    }

    render() {
        if(this.state.selected){
            return (
                <h2 style={this.HeaderStyle}>{this.state.titleText}</h2>
            )
        }
        return (

            <h2 style={this.HeaderStyleDeselected}>{this.state.titleText}</h2>
        )
    }
}
