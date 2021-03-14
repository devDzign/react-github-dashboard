import React from 'react';
import ReactFC from "react-fusioncharts";

const Pie3D = ({data}) => {

  const chartConfigs = {
    type: "pie3d", // The chart type
    width: "100%", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        //Set the chart caption
        caption: 'Languages',
        theme: 'fusion',
        decimals: 0,
        pieRadius: '55%',
        // paletteColors: ['#000000', "#00dbdf", "#001bdf", "#f5d000"]
      },
      // Chart Data
      data: data
    }
  };

  return (<ReactFC {...chartConfigs} />);

};

export default Pie3D;
