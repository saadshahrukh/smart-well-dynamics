import ChartCard from "./ChartCard";
import HeatmapChart from "./Charts/HeatmapChart";
import KpiSuccessRateChart from "./Charts/KpiSuccessRateChart";

const ChartsSection = () => {
  return (
    <div>
      <ChartCard
        iconSrc="/bar-chart.svg"
        title="SMARTs Performance Quality Score Report"
        description="The bar chart compares the performance of three categories—B Total, G Total, and Dip—across measured values, with each success rate represented by a bar filled proportionally to its percentage, offering a clear and concise summary of key performance indicators (KPIs)."
      >
        {/* Use grid layout where the left column takes 2/3 and right column takes 1/3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="col-span-2">
            <HeatmapChart />
          </div>
          <div className="col-span-1">
            <KpiSuccessRateChart />
          </div>
        </div>
      </ChartCard>
    </div>
  );
};

export default ChartsSection;
