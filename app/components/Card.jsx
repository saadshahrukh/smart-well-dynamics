"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "../styles/style";

const Card = ({ imageSrc, title, description, iconSrc }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-full max-w-[393px] rounded-[5px] overflow-hidden shadow-lg cursor-pointer transition-transform duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image */}
      <div className="relative w-full h-[302px] ">
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300"
        />
        {/* Title on top, centered */}
        <h2
          className={`${
            styles.heading2
          } absolute top-0 left-0 w-full text-white text-center transition-transform duration-300 px-7 ${
            isHovered ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
          }`}
          style={{ top: "50%", transform: "translateY(-50%)" }}
        >
          {title}
        </h2>
      </div>

      {/* Overlay Content (Sliding from Bottom) */}
      <div
        className={`absolute inset-x-0 bottom-0 bg-[#192E5B]  bg-opacity-90 text-white p-6 h-full w-full rounded-lg transition-all duration-500 ${
          isHovered ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
      >
        {/* Centering Content but Aligning Text to Left */}
        <div className="flex flex-col  justify-center items-start h-full">
          {/* Icon and Title in Row */}
          <div className="flex items-center gap-2 mb-4 ">
            <Image
              src={iconSrc}
              alt="Icon"
              width={40}
              height={40}
              className="mx-auto"
            />
            <h2 className={`${styles.paragraph}`}>{title}</h2>
          </div>

          {/* Description */}
          <p className={`${styles.subtitle}`}>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
