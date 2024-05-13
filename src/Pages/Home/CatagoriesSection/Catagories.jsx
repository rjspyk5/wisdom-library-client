import { useEffect, useState } from "react";
import { CatagoriesCard } from "./CatagoriesCard";
import { useAxiosSequre } from "../../../Hooks/useAxiosSecure";

export const Catagories = () => {
  const [catagoryName, setcatagoryName] = useState([]);
  const [loading, setloading] = useState(true);
  const axiosSequre = useAxiosSequre();
  useEffect(() => {
    setloading(true);
    axiosSequre.get("/categories").then((res) => {
      setcatagoryName(res.data);
      setloading(false);
    });
  }, []);

  return (
    <>
      {loading ? (
        <div className="min-h-[500px] flex justify-center items-center">
          <div>
            <span className="loading loading-bars loading-lg"></span>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
          {catagoryName.map((el) => (
            <CatagoriesCard key={el._id} info={el} />
          ))}
        </div>
      )}
    </>
  );
};
