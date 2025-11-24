"use client";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import styles from "../styles/style";

const ContactForm = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a07ec709-7576-42b0-96d8-966669b32b19");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message || "Something went wrong!");
      }
    } catch (error) {
      console.log("Error", error);
      setResult("Something went wrong!");
    }
  };

  const handleReset = () => {
    setResult("");
    document.querySelector("form").reset();
  };

  return (
    <div className="grid md:grid-cols-1 lg:grid-cols-2 p-[100px] bg-cover bg-center" style={{ backgroundImage: "url('/contact-us-bk-image.jpg')" }}>
      {/* Right: Background Image */}
      <div
        className="bg-cover bg-center rounded-tl-[10px] rounded-tr-none rounded-br-none rounded-bl-[10px] lg:block hidden xl:block"
        style={{ backgroundImage: "url('/rectangle.jpg')" }}
      ></div>

      {/* Left: Contact Form */}
      <div
        className={`${styles.sectionn} flex flex-col gap-[30px] bg-[#f8f8f8] rounded-tl-none rounded-tr-[10px] rounded-br-[10px] rounded-bl-none border border-[color:var(--stroke,#A9A6A6)] p-[50px] md:p-[20px] formm`}
      >
        <div className="flex flex-col gap-[30px]">
          <h2 className={`${styles.heading1} text-black md:text-left text-center`}>Contact Us</h2>
          <form className="space-y-4" onSubmit={onSubmit}>
            <div className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  required
                  className="px-5 py-[10px] border-[2px] border-dark-grey rounded-md"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  required
                  className="px-5 py-[10px] border-[2px] border-dark-grey rounded-md"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="px-5 py-[10px] border-[2px] border-dark-grey rounded-md"
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  required
                  className="px-5 py-[10px] border-[2px] border-dark-grey rounded-md"
                />
              </div>

              <input
                type="text"
                name="company"
                placeholder="Company"
                required
                className="px-5 py-[10px] border-[2px] border-dark-grey rounded-md w-full"
              />

              <textarea
                name="comments"
                placeholder="Comments"
                rows="5"
                required
                className="px-5 py-[10px] border-[2px] border-dark-grey rounded-md w-full"
              />
            </div>

            {/* Buttons */}
            <div className="m-0 flex lg:flex-row md:flex-row sm:flex-row gap-2">
              <button
                type="submit"
                className="flex h-[47px] px-5 py-2.5 text-white items-center gap-[10px] rounded-[5px] bg-curious-blue hover:bg-[#0B6FA9] w-full sm:w-auto"
              >
                <span>Send Request</span>
                <FaArrowRight size={20} />
              </button>
              <button
                type="button"
                onClick={handleReset}
                className={`${styles.button} bg-tangerine text-white py-[10px] px-[20px] rounded-[5px] hover:bg-orange-500 transition w-full sm:w-auto`}
              >
                Reset
              </button>
            </div>
          </form>
          <span>{result}</span>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;