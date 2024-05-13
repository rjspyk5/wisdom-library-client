import { useEffect, useState } from "react";
import { CatagoriesCard } from "./CatagoriesCard";
import { useAxiosSequre } from "../../../Hooks/useAxiosSecure";

export const Catagories = () => {
  const [catagoryName, setcatagoryName] = useState([]);
  const axiosSequre = useAxiosSequre();
  useEffect(() => {
    axiosSequre.get("/categories").then((res) => setcatagoryName(res.data));
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 ">
      {catagoryName.map((el) => (
        <CatagoriesCard key={el._id} info={el} />
      ))}
    </div>
  );
};
