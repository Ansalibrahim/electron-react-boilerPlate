import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import BarChart from './BarChart'
import AreaChart from './AreaChart'
import SpeedoMeter from './SpeedoMeter'
const AnyReactComponent = ({ city, population }) => <div><img style={{height: 50, width: 50}} src={require('./icons8-user-location-64.png')} /></div>;
export default class Map extends Component {
  static defaultProps = {
    center: { lat: 40.7446790, lng: -73.9485420 },
    zoom: 11
  }
  constructor(props) {
    super(props);
    this.state = { 
        width: 0,
        height: 0,
        cities: [
            { name: "Tokyo", coordinates: [139.6917,35.6895], population: 37843000 },
            { name: "Jakarta", coordinates: [106.8650,-6.1751], population: 30539000 },
            { name: "Delhi", coordinates: [77.1025,28.7041], population: 24998000 },
            { name: "Manila", coordinates: [120.9842,14.5995], population: 24123000 },
            { name: "Seoul", coordinates: [126.9780,37.5665], population: 23480000 },
            { name: "Shanghai", coordinates: [121.4737,31.2304], population: 23416000 },
            { name: "Karachi", coordinates: [67.0099,24.8615], population: 22123000 },
            { name: "Beijing", coordinates: [116.4074,39.9042], population: 21009000 },
            { name: "New York", coordinates: [-74.0059,40.7128], population: 20630000 },
            { name: "Guangzhou", coordinates: [113.2644,23.1291], population: 20597000 },
            { name: "Sao Paulo", coordinates: [-46.6333,-23.5505], population: 20365000 },
            { name: "Mexico City", coordinates: [-99.1332,19.4326], population: 20063000 },
            { name: "Mumbai", coordinates: [72.8777,19.0760], population: 17712000 },
            { name: "Osaka", coordinates: [135.5022,34.6937], population: 17444000 },
            { name: "Moscow", coordinates: [37.6173,55.7558], population: 16170000 },
            { name: "Dhaka", coordinates: [90.4125,23.8103], population: 15669000 },
            { name: "Greater Cairo", coordinates: [31.2357,30.0444], population: 15600000 },
            { name: "Los Angeles", coordinates: [-118.2437,34.0522], population: 15058000 },
            { name: "Bangkok", coordinates: [100.5018,13.7563], population: 14998000 },
            { name: "Kolkata", coordinates: [88.3639,22.5726], population: 14667000 },
            { name: "Buenos Aires", coordinates: [-58.3816,-34.6037], population: 14122000 },
            { name: "Tehran", coordinates: [51.3890,35.6892], population: 13532000 },
            { name: "Istanbul", coordinates: [28.9784,41.0082], population: 13287000 },
            { name: "Lagos", coordinates: [3.3792,6.5244], population: 13123000 },
            { name: "Shenzhen", coordinates: [114.0579,22.5431], population: 12084000 },
            { name: "Rio de Janeiro", coordinates: [-43.1729,-22.9068], population: 11727000 },
            { name: "Kinshasa", coordinates: [15.2663,-4.4419], population: 11587000 },
            { name: "Tianjin", coordinates: [117.3616,39.3434], population: 10920000 },
            { name: "Paris", coordinates: [2.3522,48.8566], population: 10858000 },
            { name: "Lima", coordinates: [-77.0428,-12.0464], population: 10750000 },
          ],
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
      <div style={{height: this.state.height, width: this.state.width}}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: 'AIzaSyD50JBhZ4ZhmtoXLoXGqxRtnfnRCgQdvxk',
            language: 'en',
            region: 'in',
          }}
          defaultCenter={{ lat: 28.7041, lng: 77.1025 }}
          defaultZoom={ 0 }
        >
        {this.state.cities.map((city, index) => {
            return (
                <AnyReactComponent
                    key={ city.name + '_' + index}
                    lat={ city.coordinates[1] }
                    lng={ city.coordinates[0] }
                    text={ city.name }
                />
            );
        })}
        </GoogleMapReact>
        <div style={{
            position: 'absolute',
            backgroundColor:'white',
            flexDirection: 'row',
            bottom:0,
            height: this.state.height/3,
            width: this.state.width}}>
            
            <div style={{display: 'inline-block'}}>
              <BarChart
                height= {this.state.height/3}
                width= {this.state.width/2.2}
                />
            </div>
            <div style={{display: 'inline-block'}}>
              <AreaChart
                height= {this.state.height/3}
                width= {this.state.width/2.2}/>
            </div>
           
        </div>
      </div>
    )
  }
}