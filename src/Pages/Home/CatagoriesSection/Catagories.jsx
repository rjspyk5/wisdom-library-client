import React from "react";
import { CatagoriesCard } from "./CatagoriesCard";

export const Catagories = () => {
  return (
    <div className="grid grid-cols-4 gap-6 ">
      <CatagoriesCard />
      <CatagoriesCard />
      <CatagoriesCard />
      <CatagoriesCard />
    </div>
  );
};
