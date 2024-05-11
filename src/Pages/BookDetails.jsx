import React from "react";
import { useLoaderData } from "react-router-dom";

export const BookDetails = () => {
  const book = useLoaderData();
  console.log(book);
  return (
    <div className="grid grid-cols-1 md:grid-cols-5">
      <div className="md:col-span-2 p-8 border">
        <img className="rounded-lg" src={book.photo} alt="" />
      </div>
      <div className="md:col-span-3"></div>
    </div>
  );
};
