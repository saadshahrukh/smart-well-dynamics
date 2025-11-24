import ChartCard from "./ChartCard";
import DepthOrientationChart from "./Charts/DepthOrientationChart";
import ToolFaceDepthChart from "./Charts/ToolFaceDepthChart";

const ChartsSection = () => {
  return (
    <div>
      <ChartCard
        iconSrc="/polar-graph.svg"
        title="SMARTs Polar Visualizations"
        description="This graph shows the orientation of the wellbore as it progresses with depth, helping to analyze the directional drilling path and ensure it aligns with planned trajectories."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Inclination and Azimuth chart */}
          <DepthOrientationChart />
          {/* Gravity and Magnetic Toolface chart */}
          <ToolFaceDepthChart />
        </div>
      </ChartCard>
    </div>
  );
};

export default ChartsSection;
