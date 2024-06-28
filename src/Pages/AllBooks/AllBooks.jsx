import { useEffect, useState } from "react";
import { useAxiosSequre } from "../../Hooks/useAxiosSecure";
import { useAuth } from "../../Hooks/useAuth";
import { StylishCard } from "../../Components/StylishCard";
import { GridView } from "./GridView";
import { HeadingSection } from "../../Components/HeadingSection";
import { SearchBook } from "../../Components/SearchBook";
import { useAxiosPublic } from "../../Hooks/useAxiosPublic";

export const AllBooks = () => {
  const [data, setdata] = useState([]);
  const { user } = useAuth();
  const [loading, setloading] = useState(true);
  const [filter, setfilter] = useState("all");
  const [view, setview] = useState("card");

  const axiosSequre = useAxiosSequre();
  const axiosPublic = useAxiosPublic();

  const handleSearch = async (e, value, clearField) => {
    e.preventDefault();
    setloading(true);
    const result = await axiosPublic.get(`/search/books?text=${value}`);
    setdata(result.data);
    setloading(false);
    clearField("");
  };

  useEffect(() => {
    if (filter === "all") {
      fetchData();
    }
    if (filter === "available") {
      setloading(true);
      const updateData = data.filter((el) => parseInt(el?.quantity) > 0);
      setdata(updateData);
      setloading(false);
    }
  }, [filter]);

  const fetchData = () => {
    setloading(true);
    if (user?.email) {
      axiosSequre
        .get(`/books?email=${user?.email}`)
        .then((res) => {
          setdata(res.data);
          setloading(false);
        })
        .catch(() => setloading(false));
    }
  };
  const notAvailable = (
    <div className="my-5 min-h-[100px] flex justify-center items-center">
      <h1 className="text-2xl font-bold">No books found</h1>
    </div>
  );

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
      <div className="flex flex-col md:flex-row my-10 gap-2 justify-between">
        <select
          onChange={(e) => setfilter(e.target.value)}
          className="select md:min-h-10 min-h-8 md:h-10 h-8 select-bordered max-w-30 md:max-w-40"
        >
          <option value="all">All</option>
          <option value="available">Available</option>
        </select>
        <SearchBook handleSearch={handleSearch} />
        <select
          onChange={(e) => setview(e.target.value)}
          className="select md:min-h-10 min-h-8 md:h-10 h-8 select-bordered max-w-30 md:max-w-40"
        >
          <option value={"card"}>CardView</option>
          <option value={"table"}>TableView</option>
        </select>
      </div>

      {loading ? (
        <div className="min-h-[500px] flex justify-center items-center">
          <div>
            <span className="loading loading-bars loading-lg"></span>
          </div>
        </div>
      ) : data.length < 1 ? (
        notAvailable
      ) : view == "card" ? (
        cardView
      ) : (
        gridView
      )}
    </div>
  );
};
