import React from "react";
import { Carasoul } from "./Carasoul";
import "animate.css";
import { HeadingSection } from "./../../Components/HeadingSection";
import { Catagories } from "./CatagoriesSection/Catagories";
import { ContactUs } from "../../Components/ContactUs";
import { StylishCard } from "../../Components/StylishCard";

export const Home = () => {
  return (
    <>
      <div className=" animate__animated animate__fadeIn animate__slower relative">
        <Carasoul />
      </div>
      <div>
        <HeadingSection
          heading="Catagories"
          subheading="Browse through our range of categories to find your next literary adventure"
        />
      </div>
      <div>
        <Catagories />
      </div>
    </>
  );
};
