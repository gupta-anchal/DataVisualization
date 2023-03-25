import React, { useEffect, useState } from "react";
import ReactEcharts from "echarts-for-react";
import WineData from "./../wineData.json";

const ScatterChart = () => {
  const [scatterOption, setScatterOption] = useState({}); //Store the details about the scatter chart

  useEffect(() => {
    getDataForScatterChart(); //Function to be invoked when the component loads for the first time
  }, []);

  const getDataForScatterChart = () => {
    const colorIntensityData = [];
    WineData.map((item) => {
      //Fetch the data of Color Intensity from the data set
      return colorIntensityData.push(
        item.Color_intensity ? item.Color_intensity : 0
      );
    });

    const hueData = [];
    WineData.map((item) => {
      //Fetch the data of Hue from the data set
      return hueData.push(item.Hue ? item.Hue : 0);
    });

    let tempScatterOption = {
      //Setup for all the details required for the implementation of Scatter Chart from ECharts.
      xAxis: {
        data: colorIntensityData,
        name: "Color Intensity",
      },
      yAxis: {
        type: "value",
        name: "Hue",
      },
      series: [
        {
          data: hueData,
          type: "scatter",
        },
      ],
    };
    setScatterOption(tempScatterOption); //Updating state for ScatterOption
  };

  return <ReactEcharts option={scatterOption} />; //Rendering the Scatter Chart
};

export default ScatterChart;
