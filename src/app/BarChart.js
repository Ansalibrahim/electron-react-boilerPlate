import React, { Component } from 'react'
import {BarChart} from 'react-easy-chart';
export default class Map extends Component {
    static defaultProps = {
        height: 450,
        width: 650,
        data: [
            {x: 'A', y: 20},
            {x: 'B', y: 30},
            {x: 'C', y: 40},
            {x: 'D', y: 20},
            {x: 'E', y: 40},
            {x: 'F', y: 25},
            {x: 'G', y: 5},
            {x: 'H', y: 76},
            {x: 'I', y: 34},
            {x: 'J', y: 10},
            {x: 'K', y: 60},
            {x: 'L', y: 40},
            {x: 'M', y: 45},
            {x: 'N', y: 25},

        ],
    }
    constructor(props) {
        super(props);
        this.state = { 
            width: 0,
            height: 0,
         };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
      }
      
      componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
      }
      
      componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
      }
      
      updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
      }
render() {
    return (
        
        <BarChart
            axisLabels={{x: 'My x Axis', y: 'My y Axis', y2: 'My second y Axis'}}
            axes
            grid
            colorBars
            height={this.props.height}
            width={this.props.width}
            interpolate={'cardinal'}
            y2Type="linear"
            lineData={this.props.data}
            data={this.props.data}
        />
    )
  }
}