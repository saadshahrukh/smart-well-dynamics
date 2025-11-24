import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

const ToolFaceDepthChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const chartInstance = echarts.init(chartRef.current);

    const option = {
      title: {
        text: "ToolFaces w.r.t Measured Depth",
        subtext: "using Polar Map\nwww.smartwelldynamics.com",
        x: "right",
      },
      legend: {
        data: ["Gravity Toolface", "Magnetic Toolface"],
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
        top: "80",
        right: "120",
        feature: {
          restore: { show: true, title: "Restore" },
          // saveAsImage: { show: true, title: 'Save' }
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
        dimensions: ["Measured Depth", "Gravity Toolface", "Magnetic Toolface"],
        source: [
          [0.24, 0.8355799, 1.59622992],
          [99.36, 179.1582493, 358.2220928],
          [200.28, 0.17154374, 0.5760585],
          [299.45, 179.8073934, 359.7297346],
          [400.62, 0.61824962, 0.88022104],
          [499.91, 179.5988245, 358.931849],
          [600.86, 0.62842823, 1.41961178],
          [699.21, 179.5955007, 359.0594302],
          [800.09, 0.38215262, 1.02412899],
          [899.25, 179.7953731, 359.6071302],
          [1000.59, 0.11116448, 0.28524707],
          [1099.72, 179.2359932, 358.6926242],
          [1200.2, 0.59065721, 1.06869531],
          [1299.54, 179.7459184, 358.8243438],
          [1400.16, 0.30622222, 1.14769366],
          [1499.05, 179.4207238, 359.1966322],
          [1600.25, 0.8997878, 1.91581104],
          [1699.85, 179.2073884, 358.3392989],
          [1800.36, 0.64575243, 0.85721934],
          [1899.87, 179.5510707, 359.5200414],
          [2023.56, 0.29476394, 1.12648961],
          [2083.07, 359.9979835, 181.7822755],
          [2143.94, 0.2375555, 179.7147187],
          [2172.58, 359.0735711, 179.193364],
          [2233.53, 0.80230149, 180.7734395],
          [2292.53, 359.282751, 179.3259258],
          [2353.5, 0.67973529, 180.667657],
          [2412.94, 359.4674755, 179.537552],
          [2473.88, 0.96264862, 180.9036488],
          [2501.71, 359.550819, 179.6225365],
          [2562.99, 90.90936592, 268.8850472],
          [2621.5, 89.59350636, 265.9373357],
          [2683, 90.9990052, 265.5494295],
          [2741.91, 89.20156704, 262.5701998],
          [2803.02, 90.40496004, 262.4570909],
          [2861.89, 89.01279559, 260.3715101],
          [2923.13, 90.77240688, 261.775629],
          [2951.41, 89.30952216, 260.2979925],
          [3240.11, 0.81608796, 171.774902],
          [3238.52, 359.3979238, 170.3908331],
          [3299.8, 90.58847379, 261.5160291],
          [3358.91, 359.0346963, 169.9583883],
          [3420.38, 0.87654183, 171.7949963],
          [3478.69, 359.876538, 170.776773],
          [3539.95, 0.09371311, 170.9936067],
          [3598.61, 359.8536082, 170.8322447],
          [3660.24, 0.2308863, 171.197636],
          [3718.66, 359.6233997, 170.5910492],
          [3779.75, 0.20955904, 171.1644673],
          [3838.74, 359.1586861, 170.0624381],
          [3899.65, 0.92311524, 171.8639547],
          [3959.32, 359.8533746, 170.7888994],
          [4019.55, 0.63540925, 171.6185553],
          [4079.14, 359.5080533, 170.4074079],
          [4139.48, 0.68212986, 171.5835728],
          [4198.89, 359.4793902, 170.4591489],
          [4259.45, 0.57517037, 171.5514822],
          [4318.61, 359.822084, 170.7649281],
        ],
      },
      series: [
        {
          coordinateSystem: "polar",
          name: "Gravity Toolface",
          type: "scatter",
          symbolSize: 4,
          symbol: "diamond",
          encode: {
            radius: "Measured Depth",
            angle: "Gravity Toolface",
            tooltip: [0, 1],
          },
        },
        {
          coordinateSystem: "polar",
          name: "Magnetic Toolface",
          type: "scatter",
          symbolSize: 4,
          encode: {
            radius: "Measured Depth",
            angle: "Magnetic Toolface",
            tooltip: [0, 2],
          },
        },
      ],
    };

    chartInstance.setOption(option);

    // Cleanup function to dispose of chart instance on unmount
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

export default ToolFaceDepthChart;
