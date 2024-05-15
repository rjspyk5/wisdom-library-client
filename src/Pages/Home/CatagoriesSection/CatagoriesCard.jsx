import { Link } from "react-router-dom";

export const CatagoriesCard = ({ info }) => {
  return (
    <div className="bg-base-200 rounded-badge bg-gradient-to-tr from-base-100 to-base-300 shadow-lg p-3 md:p-5 flex justify-around items-center">
      <img
        className="rounded-lg w-10 md:w-14 lg:w-16"
        src={info.photo}
        alt=""
      />
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-bold text-sm md:text-xl">{info.category}</h1>
        <Link
          to={`/category/${info.category}`}
          className="btn bg-orange-500 text-white md:mt-1 mt-2 btn-sm px-1 md:btn-md"
        >
          Explore
        </Link>
      </div>
    </div>
  );
};
