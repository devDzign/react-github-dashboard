import React from 'react';
import ReactFC from "react-fusioncharts";

const Column3D = ({data}) => {

  const chartConfigs = {
    type: "column3D", // The chart type
    width: "100%", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        //Set the chart caption
        caption: 'Most Popular',
        yAxisName: 'Stars',
        xAxisName: 'Repos',
        xAxisNameFontSize: '16px',
        YAxisNameFontSize: '16px',
      },
      // Chart Data
      data: data
    }
  };

  return (<ReactFC {...chartConfigs} />);
};

export default Column3D;
