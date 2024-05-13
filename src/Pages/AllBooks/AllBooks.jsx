import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { BookCard } from "./BookCard";
import { useAxiosSequre } from "../../Hooks/useAxiosSecure";
import { useAuth } from "../../Hooks/useAuth";

export const AllBooks = () => {
  const [data, setdata] = useState([]);
  const { user } = useAuth();
  const axiosSequre = useAxiosSequre();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    user &&
      axiosSequre
        .get(`/books?email=${user.email}`)
        .then((res) => setdata(res.data));
  };
  return (
    <div>
      <h1>All Books</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((el) => (
          <BookCard key={el._id} book={el} />
        ))}
      </div>
    </div>
  );
};
