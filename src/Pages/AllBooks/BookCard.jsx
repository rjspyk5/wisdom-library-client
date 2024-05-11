import React from "react";
import { Link } from "react-router-dom";

export const BookCard = ({ book }) => {
  return (
    <div>
      <div className="card card-compact  bg-base-200 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <p>Book Name: {book.name}</p>
          <p>Author Name:{book.author}</p>
          <p>Catagory:{book.catagory}</p>
          <p>Rating:{book.rating}</p>
        </div>
        <Link to={`/update/${book._id}`} className="btn m-5">
          Update
        </Link>
      </div>
    </div>
  );
};
