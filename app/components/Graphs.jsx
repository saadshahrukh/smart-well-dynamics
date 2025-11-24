"use client";

import QCAnalysis from "./QCAnalysis";
import PolarVisualization from "./PolarVisualization";
import PQSReport from "./PQSReport";
import SmartGraph from "./SmartGraph";
import styles from "../styles/style";

const Graphs = () => {
  return (
    <div className={`${styles.boxWidth} flex flex-col gap-10 my-14 `}>
      <div className="flex flex-col justify-center items-center">
        <h3 className={`${styles.heading3} text-curious-blue`}>
          Our Graph & Analytics
        </h3>
        <h2 className={`${styles.heading1} text-black text-center`}>
          Visualizing Data for Smarter Decisions
        </h2>
      </div>
      <QCAnalysis />
      <PolarVisualization />
      <PQSReport />
      <SmartGraph />
    </div>
  );
};

export default Graphs;
