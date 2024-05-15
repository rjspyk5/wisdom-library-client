import { useEffect, useState } from "react";
import { PiGridFourFill } from "react-icons/pi";
import { useAxiosSequre } from "../../Hooks/useAxiosSecure";
import { useAuth } from "../../Hooks/useAuth";
import { StylishCard } from "../../Components/StylishCard";
import { GridView } from "./GridView";
import { PiListBulletsFill } from "react-icons/pi";
import { HeadingSection } from "../../Components/HeadingSection";

export const AllBooks = () => {
  const [data, setdata] = useState([]);
  const { user } = useAuth();
  const [loading, setloading] = useState(true);
  const [filter, setfilter] = useState("all");
  const [view, setview] = useState(true);

  const axiosSequre = useAxiosSequre();
  useEffect(() => {
    if (filter === "all") {
      fetchData();
    }
    if (filter === "available") {
      setloading(true);
      const updateData = data.filter((el) => parseInt(el.quantity) > 0);
      setdata(updateData);
      setloading(false);
    }
  }, [filter]);

  const fetchData = () => {
    setloading(true);
    user &&
      axiosSequre
        .get(`/books?email=${user.email}`)
        .then((res) => {
          setdata(res.data);
          setloading(false);
        })
        .catch(() => setloading(false));
  };

  const cardView = (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-3 gap-4 mb-14 md:gap-8">
      {data.map((el) => (
        <StylishCard key={el._id} book={el} />
      ))}
    </div>
  );
  const gridView = (
    <>
      <div className="my-14">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="*:p-1">
                <th>Image</th>
                <th>Name</th>
                <th>Author Name</th>
                <th>Category</th>
                <th>Rating</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((el) => (
                <GridView key={el._id} book={el} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
  return (
    <div className="px-8 max-w-[1150px] mx-auto">
      <HeadingSection
        heading="All books"
        subheading="Explore our shelves for your next great read. With genres to suit every taste, finding your next favorite book is just a click away!"
      />
      <div className="flex my-10 mx-4 justify-between">
        <select
          onChange={(e) => setfilter(e.target.value)}
          className="select md:min-h-10 min-h-8 md:h-10 h-8 select-bordered w-32 md:w-40"
        >
          <option value="all">All</option>
          <option value="available">Available</option>
        </select>

        <span className="flex bg-base-200 rounded-lg">
          <button
            onClick={() => setview(false)}
            className={`p-1 px-2 md:px-4 flex items-center rounded-l-lg   ${
              view ? "text-white" : "bg-base-300 "
            }`}
          >
            List
            <PiListBulletsFill />
          </button>
          <button
            onClick={() => setview(true)}
            className={`p-1 px-2 md:px-4  flex rounded-r-lg  items-center ${
              view ? "bg-base-300 " : "text-white"
            }`}
          >
            Grid
            <PiGridFourFill />
          </button>
        </span>
      </div>

      {loading ? (
        <div className="min-h-[500px] flex justify-center items-center">
          <div>
            <span className="loading loading-bars loading-lg"></span>
          </div>
        </div>
      ) : view ? (
        cardView
      ) : (
        gridView
      )}
    </div>
  );
};
