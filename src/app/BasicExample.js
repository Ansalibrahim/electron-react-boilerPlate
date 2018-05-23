import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import WorldMap from './worldMap';
import GoogleMapsImplemenation from './GoogleMapsImplemenation';
import ChartSample from './ChartSample';
  
  const About = () => (
    <div>
      <h2>About</h2>
    </div>
  )
  
  const Topic = ({ match }) => (
    <div>
      <h3>{match.params.topicId}</h3>
    </div>
  )
  
  const Topics = ({ match }) => (
    <div>
      <h2>Topics</h2>
    </div>
  )
  
  const routes = [
    {
      path: "/",
      exact: true,
      sidebar: () => <div>D3 WorldMap!</div>,
      main: () => <WorldMap/>
    },
    {
      path: "/GoogleMapsImplemenation",
      sidebar: () => <div>Google Map</div>,
      main: () => <GoogleMapsImplemenation/>
    },
    {
      path: "/ChartSample",
      sidebar: () => <div>D3Samples!</div>,
      main: () => <ChartSample/>
    }
  ];

  const BasicExample = () => (
    // // <Router>
    // //   <div>
    // //     <ul>
    //       <li><Link to="/">WorldMap</Link></li>
    //       <li><Link to="/about">About</Link></li>
    //       <li><Link to="/topics">Topics</Link></li>
    // //     </ul>
  
    // //     <hr/>
  
    // //     <Route exact path="/" component={WorldMap}/>
    // //     <Route path="/about" component={About}/>
    // //     <Route path="/topics" component={Topics}/>
    // //   </div>
    // // </Router>
    <Router>
    <div style={{ display: "flex" }}>
      <div
        style={{
          padding: "10px",
          width: "20%",
          background: "#f0f0f0",
          position: 'absolute',
          zIndex: 4000,
        }}
      >
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li><Link to="/">D3 WorldMap</Link></li>
          <li><Link to="/GoogleMapsImplemenation">GoogleMaps</Link></li>
          <li><Link to="/ChartSample">D3Samples</Link></li>
        </ul>

        {routes.map((route, index) => (
          // You can render a <Route> in as many places
          // as you want in your app. It will render along
          // with any other <Route>s that also match the URL.
          // So, a sidebar or breadcrumbs or anything else
          // that requires you to render multiple things
          // in multiple places at the same URL is nothing
          // more than multiple <Route>s.
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.sidebar}
          />
        ))}
      </div>

      <div style={{ flex: 1, padding: "10px" }}>
        {routes.map((route, index) => (
          // Render more <Route>s with the same paths as
          // above, but different components this time.
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        ))}
      </div>
    </div>
  </Router>
  )
  export default BasicExample