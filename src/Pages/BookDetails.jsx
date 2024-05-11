import React from "react";
import { useLoaderData } from "react-router-dom";
import Rating from "react-rating";

import { BiStar } from "react-icons/bi";
import { BiSolidStar } from "react-icons/bi";

export const BookDetails = () => {
  const book = useLoaderData();

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
      <div className="md:col-span-2 p-8 border ">
        <img className="rounded-lg w-full" src={book.photo} alt="" />
      </div>
      <div className="md:col-span-3">
        <div className="ml-4">
          <h1 className="font-bold text-3xl mb-5">{book.bookName}</h1>
          <p className="opacity-60 mb-5">by {book.authorName}</p>
        </div>

        <table className="table w-2/3 text-lg">
          <tr>
            <td className="font-bold">Rating </td>
            <td>
              {" "}
              <Rating
                initialRating={book.rating}
                emptySymbol={<BiStar className="text-yellow-400" />}
                fullSymbol={<BiSolidStar className="text-yellow-400" />}
                readonly
              />
            </td>
          </tr>
          <tr>
            <td className="font-bold">Catergory </td>
            <td>{book.catagory}</td>
          </tr>
          <tr>
            <td className="font-bold">Available Quantity </td>
            <td>{book.quantity}</td>
          </tr>
          <tr>
            <td className="font-bold">About this book </td>
            <td>{book.about}</td>
          </tr>
          <tr>
            <td className="font-bold">Description </td>
            <td>{book.description}</td>
          </tr>
          <div className="ml-4">
            <p className="font-bold text-lg">Description </p>
            <p>{book.description}</p>
          </div>
        </table>
        <button
          disabled={parseInt(book.quantity) === 0 ? true : false}
          className="btn"
        >
          Borrow
        </button>
      </div>
    </div>
  );
};
