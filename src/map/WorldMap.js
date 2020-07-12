import React, { Component } from 'react'
import { geoMercator, geoPath } from 'd3-geo'

class WorldMap extends Component {
  render() {
    const projection = geoMercator()
      .scale(120)
      .translate([430,250])
    const pathGenerator = geoPath().projection(projection)
    const countries = this.props.data
      .map((d,i) => <path
        key={"path" + i}
        d={pathGenerator(d)}
        className="countries"
      />)
    return <svg width='800' height='500'>
      {countries}
    </svg>
  }
}

export default WorldMap