import React, { Component } from 'react'
import ReactSpeedometer from "react-d3-speedometer";

export default class Speedometer extends Component{
    static defaultProps = {
        height: 300,
        width: 500,
    }
    render(){
        return (
            <div style={{width: this.props.width, height: this.props.width}}>
                <ReactSpeedometer
                    minValue={0}
                    maxValue={500}
                    value={250}
                />
            </div>

        )
    }
}
