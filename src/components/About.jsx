import React from "react";
import MainContent from "./MainContent";
import MainButton from "./MainButton";
import about_image from "../assets/about_image.png";
import tick from "../assets/Tick.png";
import rating from "../assets/rating.svg";

const About = () => {
  return (
    <section className="flex flex-1 flex-row justify-between items-center">
      <div className="relative">
        <img src={about_image} alt="" className="w-[100%] h-[100%] z-0" />

        <div className="flex flex-col justify-center items-center absolute top-[-51px] left-[63px] bg-white p-[21px] shadow-md opacity-16 shadow-gray-500">
          <img src={tick} alt="" />
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-title_color font-poppins font-regular text-[47px] leading-[51px]">
              4.8
            </h1>
            <img src={rating} alt="" />
            <p className="text-text_light font-regular font-poppins text-[12px]">
              Trusted on
            </p>
            <p className="text-title_color font-regular font-poppins text-[12px]">
              500+ Reviews
            </p>
          </div>
        </div>
        <div className="flex flex-row flex-1 max-w-[390px] justify-center items-center gap-[21px] px-[21px] py-[8px] bg-white absolute right-0 bottom-0">
          <div className="flex flex-row items-center justify-center gap-[6px]">
            <p className="text-title_color font-poppins font-semibold text-[32px] leading-[38px] ">250+</p>
            <p className="text-text_light">Property Sale</p>
          </div>
          <div className="flex flex-row items-center justify-center gap-[6px]">
          <p className="text-title_color font-poppins font-semibold text-[32px] leading-[38px] ">550+</p>
            <p className="text-text_light">Apartment Rent</p>
          </div>
        </div>
      </div>
      <div>
        <MainContent
          text_tag={"ABOUT US"}
          text_h={"How much is your property worth now?"}
          text_p={
            "We have built our reputation as true local area experts. We have gained more knowledge about buyer interests, our neighborhood and the market than any other brand because we live locally and work for local people."
          }
          style_h={"max-w-[450px]"}
          style_p={"max-w-[440px]"}
        />
        <div className="">
          <MainButton text={"Learn More"} styles={"text-primary bg-text_primary max-w-[140px] shadow-sm opacity-24 shadow-text_primary"}/>
        </div>
      </div>
    </section>
  );
};

export default About;
