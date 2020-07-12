import React, { Component } from "react";
import worlddata from './world'
import { geoCentroid } from 'd3-geo'
import WorldMap from './WorldMap'

//const appdata = worlddata.features.filter(d => geoCentroid(d)[0] < -20)
const appdata = worlddata.features

class WorldMapComponent extends Component {
  render() {
    return (
      
      <div>
            <h1>
              World Map - 2020
            </h1>
            <WorldMap data={appdata} />
            
          </div>

    );
  }
}
 
export default WorldMapComponent;