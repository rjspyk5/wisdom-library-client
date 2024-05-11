import React from "react";
import { Link } from "react-router-dom";

export const BookCard = ({ book, button }) => {
  console.log(book);
  return (
    <div>
      <div className="card card-compact p-5 bg-base-200 shadow-xl">
        <figure>
          <img className="w-full h-60" src={book.photo} alt="Shoes" />
        </figure>

        <div className="">
          <p className="text-center font-black text-2xl">{book.bookName}</p>

          <p className="text-center opacity-60">by {book.authorName}</p>

          <p className="text-center">Catergory : {book.catagory}</p>
          <p className="text-center">Rating : {book.rating}</p>
        </div>
        {!button ? (
          <Link to={`/update/${book._id}`} className="btn">
            Update
          </Link>
        ) : (
          <Link to={`/book/${book._id}`} className="btn">
            View Details
          </Link>
        )}
      </div>
    </div>
  );
};
