"use client";

import Card from "@/app/components/Card";
import styles from "../styles/style";

const Solutions = () => {
  return (
    <div className={`${styles.boxWidth} flex flex-col gap-16 my-24 `}>
      <div className="flex flex-col justify-center items-center">
        <h3 className={`${styles.heading3} text-curious-blue`}>
          Our Key Solutions
        </h3>
        <h2 className={`${styles.heading1} text-black text-center`}>
          Tailored to Fit Your Needs
        </h2>
      </div>

      <div
        className={` flex md:flex-row flex-col items-center justify-between gap-5`}
      >
        <Card
          imageSrc="/image-1.png"
          title="Realtime Survey Audit/QC"
          description="Data Audit/Quality Control is used to highlight good practices and implement them company wide, thus increasing operational efficiencies, reducing costs and increasing service safety and highlighting slowly deteriorating conditions contributing to continual improvements."
          iconSrc="/realtime-survey-audit.svg"
        />
        <Card
          imageSrc="/image-3.png"
          title="Mag. Storm Survey Rectifier (MSSR)"
          description="A Geomagnetic Storm is a temporary disturbance casused by Solar winds and/or cloud of magnetic field. MSSR is a passive solution that removes effects of Solar Storms, so that drilling can continue during an active storm - reducing operational costs and increasing safety."
          iconSrc="/storm-survey-rectifier.svg"
        />
        <Card
          imageSrc="/image-2.png"
          title="BHA Non-Magnetic Space Calculator"
          description="BHA Sensors can be protected by adding proper non-mag collars above and below its highly magnetized components. SMARTs BHA Calculator is a utility that helps to identify the correct signature to be used for a defined Run - before drilling operations start."
          iconSrc="/space-calculator.svg"
        />
      </div>
    </div>
  );
};

export default Solutions;
