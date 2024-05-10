import React from "react";

export const HeadingSection = ({ heading, subheading }) => {
  return (
    <div className="space-y-5 my-10">
      <h1 className="text-center font-bold text-3xl">{heading}</h1>
      <h2 className="text-center">{subheading}</h2>
    </div>
  );
};
