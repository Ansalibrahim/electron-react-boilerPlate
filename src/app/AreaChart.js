import React, { Component } from 'react'
import {AreaChart} from 'react-easy-chart';
export default class Map extends Component {
  static defaultProps = {
    height: 450,
    width: 650,
  }
  render() {
    return (
      
       <AreaChart
            xType={'time'}
            axes
            xTicks={5}
            yTicks={3}
            dataPoints
            grid
            noAreaGradient
            tickTimeDisplayFormat={'%d %m'}
            interpolate={'cardinal'}
            width={this.props.width}
            height={this.props.height}
            data={[
            [
                { x: '1-Jan-15', y: 20 },
                { x: '1-Feb-15', y: 10 },
                { x: '1-Mar-15', y: 33 },
                { x: '1-Apr-15', y: 45 },
                { x: '1-May-15', y: 15 }
            ], [
                { x: '1-Jan-15', y: 10 },
                { x: '1-Feb-15', y: 15 },
                { x: '1-Mar-15', y: 13 },
                { x: '1-Apr-15', y: 15 },
                { x: '1-May-15', y: 10 }
            ]
            ]}
        />
    )
  }
}