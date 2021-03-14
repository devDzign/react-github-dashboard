import React from 'react';
import ReactFC from "react-fusioncharts";

const Bar3D =  ({data}) => {

  const chartConfigs = {
    type: "bar3d", // The chart type
    width: "100%", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        //Set the chart caption
        caption: 'Most Forked',
        yAxisName: 'Forks',
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

export default Bar3D;
