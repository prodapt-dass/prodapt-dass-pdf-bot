
import React, { Component } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import addFunnel from 'highcharts/modules/funnel';
import '../Styles/Pyramid.css'

// Initialize the funnel module
addFunnel(Highcharts);
 
class FunnelChart extends Component {
  constructor(props) {
    super(props);
 
    // Define your chart configuration options
    this.options = {
      chart: {
        type: "pyramid",
        backgroundColor: "transparent",
      },
      title: {
        text: "",
      },
      plotOptions: {
        series: {
          dataLabels: {
            enabled: true,
            // format: '<b>{point.name}</b> ({point.y})',
            // format: '{point.percentage:.1f}%',
            format: "<b>{point.name}</b>: {point.y}",
            // color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black',
            softConnector: false,
            connectorWidth: 0,
            inside: true,
            color: "black",
            style: {
              fontSize: "8px", // Set the font size here
            },
          },
          center: ["50%", "25%"],
          width: "60%",
          height: "40%",
        },
      },
      legend: {
        enabled: false,
      },
      credits: {
        enabled: false, // Remove Highcharts watermark
      },
      series: [
        {
          name: "Data",
          data: [
            ["p1", 20],
            ["p2", 20],
            ["p3", 30],
            ["p4", 40],
            ["p5", 40],
          ],
        },
      ],
    };
  }
 
  render() {
    const chartStyle = {
     
      // background: 'none',
      width:"250px",
      height:"40px",
      marginTop:"-15px",
 
    };
 
    return (
      <div style={chartStyle}>
        <HighchartsReact highcharts={Highcharts} options={this.options} className="pyramid-main" />
      </div>
    );
  }
}
 
export default FunnelChart;
 