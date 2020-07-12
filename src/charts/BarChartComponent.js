import React, { Component } from 'react';
import BarChart from './BarChart';

class BarChartComponent extends Component {

    state = {
        temps: {},
        city: 'sf', // city whose temperatures to show
      };

      componentDidMount() {
        fetch(`${process.env.PUBLIC_URL}/sf.json`)
        .then(response => response.json())
        .then(sf => {
          sf.forEach(day => day.date = new Date(day.date));
          this.setState({temps: {sf}});
        });
      }
  
      render() {
        const data = this.state.temps[this.state.city];
    
        return (
          <div>
            <h1>
              2020 Temperatures for Dubai - Bar Chart
            </h1>
            <BarChart data={data} />
          
          </div>
        );
      }
    
}
 
export default BarChartComponent;