import Link from "next/link";
import React from "react";
import { IoMail } from "react-icons/io5";
import styles from "../styles/style";

const Footer = () => {
  return (
    <footer className="bg-black py-5 text-white">
      <div className="flex flex-col items-center gap-2.5">
        {/* Navigation Links */}
        <div className="flex">
          {["Login", "Terms & Condition", "Privacy Policy"].map(
            (item, index, arr) => (
              <span
                key={index}
                className={`cursor-pointer px-4 ${
                  index !== arr.length - 1 ? "border-r-2 border-white" : ""
                } ${styles.paragraph_m}`}
              >
                {item}
              </span>
            )
          )}
        </div>

        {/* Contact Info */}
        <div className="flex items-center gap-2">
          <IoMail size={24} />
          <a
            href="mailto:info@smartwelldynamics.com"
            className={`${styles.paragraph_m}`}
          >
            info@smartwelldynamics.com
          </a>
        </div>

        {/* Copyright */}
        <h6 className={`${styles.paragraph_m} text-center`}>
          Copyright © 2025, All Rights Reserved. Powered by{" "}
          <Link href="https://www.dijination.net/"> DIJINATION LLC</Link>
        </h6>
      </div>
    </footer>
  );
};

export default Footer;
