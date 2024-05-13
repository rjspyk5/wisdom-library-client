import { useEffect, useState } from "react";
import { BookCard } from "./BookCard";
import { useAxiosSequre } from "../../Hooks/useAxiosSecure";
import { useAuth } from "../../Hooks/useAuth";

export const AllBooks = () => {
  const [data, setdata] = useState([]);
  const { user } = useAuth();
  const [loading, setloading] = useState(true);
  const [filter, setfilter] = useState("all");

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

  return (
    <div>
      <div>
        <select
          onChange={(e) => setfilter(e.target.value)}
          className="select select-bordered w-full max-w-xs"
        >
          <option value="all">All Books</option>
          <option value="available">Available Books</option>
        </select>
      </div>
      {loading ? (
        <div className="min-h-[500px] flex justify-center items-center">
          <div>
            <span className="loading loading-bars loading-lg"></span>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.map((el) => (
            <BookCard key={el._id} book={el} />
          ))}
        </div>
      )}
    </div>
  );
};
