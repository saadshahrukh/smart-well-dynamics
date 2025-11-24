import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

const DepthOrientationChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const chartInstance = echarts.init(chartRef.current);

    let option = {
      title: {
        text: "Inclination and Azimuth w.r.t Measured Depth",
        subtext: "using Polar Map\nwww.smartwelldynamics.com",
        x: "right",
      },
      legend: {
        data: ["Inclination", "Azimuth"],
        orient: "vertical",
        align: "right",
        left: 5,
      },
      toolbox: {
        show: true,
        showTitle: true,
        itemGap: 20,
        orient: "vertical",
        left: "right",
        top: 80,
        right: 120,
        feature: {
          restore: { show: true },
        },
      },
      polar: {},
      tooltip: {
        trigger: "item",
        axisPointer: {
          type: "cross",
        },
      },
      angleAxis: {
        type: "value",
        startAngle: 90,
        min: 0,
        max: 360,
      },
      radiusAxis: {},
      dataZoom: [
        {
          type: "slider",
          radiusAxisIndex: 0,
          bottom: 5,
          showDetail: true,
          realtime: true,
          show: true,
        },
        {
          type: "inside",
          radiusAxisIndex: 0,
        },
      ],
      dataset: {
        dimensions: ["Measured Depth", "Inclination", "Azimuth"],
        source: [
          [30.54, 0.15, 341.32],
          [60.72, 2.18, 19.39],
          [90.58, 4.76, 20.05],
          [120.9, 6.92, 19.55],
          [150.56, 9.23, 20.91],
          [180.49, 11.44, 19.23],
          [210.06, 14.36, 20.62],
          [240.55, 17.1, 19.05],
          [270.66, 19.56, 20.23],
          [300.63, 22.53, 19.16],
          [330.85, 24.75, 20.95],
          [360.2, 27.29, 19.45],
          [390.38, 29.71, 20.01],
          [420.08, 32.52, 19.09],
          [450.7, 35.29, 20.16],
          [480.31, 37.57, 19.8],
          [510.44, 40.54, 20.11],
          [540.63, 42.97, 19.25],
          [570.24, 45.2, 20.81],
          [600.66, 47.82, 19.62],
          [630.61, 50.79, 20.02],
          [660.69, 53.14, 19.45],
          [690.99, 56.07, 20.99],
          [720.21, 58.07, 19.77],
          [750.02, 60.66, 20.86],
          [780.56, 63.07, 19.18],
          [810.53, 66, 20.25],
          [840.31, 68.42, 19.44],
          [870.63, 70.57, 20.1],
          [900.67, 73.26, 19.02],
          [930.52, 75.94, 20.21],
          [960.13, 78.63, 19.62],
          [990.01, 81.33, 20.13],
          [1020.87, 84.05, 19.18],
          [1050.81, 86.33, 20.64],
          [1080.26, 88.7, 19.95],
          [1110.29, 89.44, 19.45],
          [1140.91, 90.12, 20.98],
          [1170.07, 89.71, 19.55],
          [1200.84, 90.17, 20.92],
          [1230.48, 89.29, 19.06],
          [1260.88, 90.12, 20.42],
          [1290.31, 89.29, 19.07],
          [1320.11, 90.67, 20.32],
          [1350.01, 89.7, 19.32],
          [1380.61, 90.99, 20.93],
          [1411, 89.13, 19.96],
          [1440.14, 90.75, 20.63],
          [1470.42, 89.69, 19.98],
          [1500.3, 90.55, 20.71],
          [1530.73, 89.65, 19.24],
          [1560.41, 90.94, 20.87],
          [1590, 89.05, 19.8],
          [1620.23, 90.12, 20.09],
          [1650.65, 89.34, 19.04],
          [1680.82, 90.74, 20.06],
          [1710.74, 89.94, 19.85],
          [1740.37, 90.32, 20.57],
          [1770.07, 89.81, 19.86],
          [1800.15, 90.41, 20.54],
          [1830.79, 89.31, 19.84],
          [1860.03, 90.2, 20.43],
          [1890.13, 89.93, 19.39],
          [1920.08, 90, 20.08],
          [1950.64, 89.94, 19.37],
          [1980.67, 90.33, 20.91],
          [2010.39, 89.41, 19.04],
          [2040.36, 90.58, 20.6],
          [2070.89, 89.39, 19.7],
          [2100.36, 90.78, 20],
          [2130.31, 89.96, 19.33],
          [2160.59, 90.58, 20.49],
          [2190.31, 89.56, 19.67],
          [2220.44, 90.49, 20.72],
          [2250.42, 89.31, 19.04],
        ],
      },
      series: [
        {
          coordinateSystem: "polar",
          name: "Inclination",
          type: "scatter",
          symbolSize: 3,
          symbol: "diamond",
          encode: {
            radius: "Measured Depth",
            angle: "Inclination",
            tooltip: [0, 1],
          },
        },
        {
          coordinateSystem: "polar",
          name: "Azimuth",
          type: "scatter",
          symbolSize: 3,
          encode: {
            radius: "Measured Depth",
            angle: "Azimuth",
            tooltip: [0, 2],
          },
        },
      ],
    };

    chartInstance.setOption(option);

    // Cleanup on unmount
    return () => {
      chartInstance.dispose();
    };
  }, []);

  return (
    <div className="w-full bg-white shadow-lg p-4 rounded-lg">
      <div ref={chartRef} className="w-full h-[600px]"></div>
    </div>
  );
};

export default DepthOrientationChart;
