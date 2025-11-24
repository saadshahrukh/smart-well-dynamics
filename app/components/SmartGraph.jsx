import ChartCard from "./ChartCard";
import Smart3DChart from "./Charts/EChart";

const ChartsSection = () => {
  return (
    <div>
      <ChartCard
        iconSrc="/e-chart.svg"
        title="SMARTs QC Analysis (3D)"
        description="This 3D visualization of SMARTS QC Analysis displays well trajectories with Easting, Northing, and Depth. Colors represent depth variations, while side plots provide additional trajectory insights. The analysis ensures accurate well placement and drilling efficiency."
      >
        <Smart3DChart />
      </ChartCard>
    </div>
  );
};

export default ChartsSection;
