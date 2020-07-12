import React from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import LineChartComponent from './charts/LineChartComponent';
import WorldMapComponent from './map/WorldMapComponent';
import BarChartComponent from './charts/BarChartComponent';

function App() {
  return (
    <HashRouter>
    <div className="App">
             <h1>React D3js Demo</h1>
          <ul className="header">
            <li><NavLink exact to="/">Chart</NavLink></li>
            <li><NavLink to="/barchart">Bar Chart</NavLink></li>
            <li><NavLink to="/worldmap">World Map</NavLink></li>
          </ul>
          <div className="content">

           <Route exact path="/" component={LineChartComponent}/>
            <Route path="/barchart" component={BarChartComponent}/>
            <Route path="/worldmap" component={WorldMapComponent}/>

          </div>
    </div>
    </HashRouter>
  );
}

export default App;
