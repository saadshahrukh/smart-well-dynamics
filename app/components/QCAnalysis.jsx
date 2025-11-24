import ChartCard from "./ChartCard";
import DrillLogDetails from "./Charts/DrillLogDetails";

const ChartsSection = () => {
  return (
    <div className="w-full">
      <ChartCard
        iconSrc="/line-chart.svg"
        title="Wellbore Parameter Tracking and Fluctuation Analysis"
        description="Tracks variables such as TVD (True Vertical Depth), Northing, Azimuth, Dip, Inclination, and BTotal against measured depth, with a focus on parameters like Inclination, Azimuth, Dip, and BTotal, which exhibit more fluctuations."
        children={<DrillLogDetails />}
      />
    </div>
  );
};

export default ChartsSection;
