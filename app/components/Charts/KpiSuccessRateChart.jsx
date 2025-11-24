import { useEffect, useRef } from "react";
import * as echarts from "echarts";

const KpiSuccessRateChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Initialize chart only after the component has mounted
    const dom = chartRef.current;
    const myChart = echarts.init(dom);

    const max = 100;
    const value = [87.0, 82.0, 96.0];
    const YAxis = ["87.00%", "82.00%", "96.00%"];

    const option = {
      title: {
        text: "KPIs Success Rate",
        subtext: "www.smartwelldynamics.com",
        x: "right",
        right: 30,
      },
      grid: {
        left: "20%",
        right: "20%",
        height: "43%",
        top: "30%",
      },
      xAxis: {
        type: "value",
        max: max,
        splitLine: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
        axisTick: {
          show: false,
        },
      },
      yAxis: [
        {
          type: "category",
          inverse: true,
          data: ["B Total", "G Total", "Dip"],
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            margin: 10,
            textStyle: {
              color: "#o3FF",
              fontSize: 16,
            },
          },
        },
        {
          type: "category",
          inverse: true,
          data: YAxis,
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            margin: 10,
            textStyle: {
              color: "#00FF",
              fontSize: 16,
            },
          },
        },
      ],
      series: [
        {
          type: "bar",
          barWidth: 35, // Reduced slightly to maintain spacing
          barCategoryGap: "40%", // Increase spacing between bars
          legendHoverLink: false,
          silent: true,
          itemStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 1,
              y2: 0,
              colorStops: [
                { offset: 0, color: "#009bc0" },
                { offset: 1, color: "#037a9b" },
              ],
              globalCoord: false,
            },
          },
          data: value,
        },
        {
          type: "bar",
          barWidth: 42, // Keep slightly larger than main bars
          barGap: "-100%", // Ensures background bars align with front bars
          label: {
            normal: {
              show: false,
              position: "right",
              textStyle: { color: "#000" },
            },
          },
          itemStyle: {
            normal: {
              color: "rgba(0,0,0,0)",
              borderWidth: 2,
              borderColor: "#004E77",
            },
          },
          data: [max, max, max],
          z: 5, // Keep it behind the main bars
        },
        {
          type: "pictorialBar",
          itemStyle: { color: "#002fb0" },
          symbolRepeat: "fixed",
          symbolMargin: "10",
          symbol: "rect",
          symbolClip: true,
          symbolSize: [4, 48],
          symbolPosition: "start",
          symbolOffset: [0, -2],
          symbolBoundingData: max,
          data: value,
        },
      ],
    };

    if (option && typeof option === "object") {
      myChart.setOption(option, true);
    }

    // Dispose chart on cleanup
    return () => {
      myChart.dispose();
    };
  }, []);

  return (
    <div className="w-full bg-white shadow-lg p-4 rounded-lg">
      <div
        id="KpiSuccessRateChart"
        ref={chartRef}
        className="w-full h-[325px]"
      ></div>
    </div>
  );
};

export default KpiSuccessRateChart;
