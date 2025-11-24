"use client";

import styles from "../styles/style";
import Image from "next/image";

const ChartCard = ({ iconSrc, title, description, children }) => {
  return (
    <div className="flex flex-col gap-2.5">
      <div className="flex items-center gap-2 bg-curious-blue px-5 py-2.5 rounded-[5px]">
        <Image src={iconSrc} alt="Icon" width={30} height={30} />
        <h2 className={`${styles.heading2} text-white`}>{title}</h2>
      </div>
      <p className={`${styles.placeholder} text-black `} >{description}</p>
      <div className="mt-5">{children}</div>
    </div>
  );
};

export default ChartCard;
