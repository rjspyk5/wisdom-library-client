import { useEffect, useState } from "react";
import { BookCard } from "./BookCard";
import { useAxiosSequre } from "../../Hooks/useAxiosSecure";
import { useAuth } from "../../Hooks/useAuth";

export const AllBooks = () => {
  const [data, setdata] = useState([]);
  const { user } = useAuth();
  const [loading, setloading] = useState(true);

  const axiosSequre = useAxiosSequre();
  useEffect(() => {
    setloading(true);
    fetchData();
  }, []);

  const fetchData = () => {
    user &&
      axiosSequre.get(`/books?email=${user.email}`).then((res) => {
        setdata(res.data);
        setloading(false);
      });
  };
  return (
    <div>
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
