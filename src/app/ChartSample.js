import React, { Component } from 'react'
import BarChart from './BarChart'
import AreaChart from './AreaChart'
export default class Map extends Component {
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
      <div style={{
          width: this.state.width,
      justifyContent: 'center',
      alignItems: 'center',
      height: this.state.height,
      borderColor: 'red',
      marginTop: 100,
      borderWidth: 2 }}>
        <p>Bar chart</p>
        <div style={{width: 650, height: 450}}>
            <BarChart/>
        </div>
        <p>Area Chart</p>
        <div style={{width: 750, height: 250}}>
            <AreaChart/>
        </div>
      </div>
    )
  }
}