import React from "react";
import { useLoaderData } from "react-router-dom";
import { BookCard } from "./BookCard";

export const AllBooks = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <h1>All Books</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.map((el) => (
          <BookCard key={el._id} book={el} />
        ))}
      </div>
    </div>
  );
};
