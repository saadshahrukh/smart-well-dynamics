import React from "react";
import styles from "../styles/style";

const Banner = () => {
  return (
    <section
      className="flex items-center justify-center text-center text-white h-[800px] sm:h-[600px] md:h-[500px] lg:h-[800px] bg-cover bg-top"
      style={{ backgroundImage: `url('/hero.png')` }}
    >
      <div className={`${styles.boxWidth} flex flex-col gap-5 lg:px-[280px]`}>
        <h1 className={`${styles.headline} `}>
          Smart Solutions for a Dynamic World
        </h1>
        <p className={` ${styles.paragraph_m}`}>
          SMARTs is a real-time platform providing the E&P industry with MWD
          Data Audit, QC, and actionable insights to optimize wellbore placement
          and drainage.
        </p>
      </div>
    </section>
  );
};
export default Banner;
