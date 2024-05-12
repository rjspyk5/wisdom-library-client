import React from "react";
import { useLoaderData } from "react-router-dom";
import Rating from "react-rating";

import { BiStar } from "react-icons/bi";
import { BiSolidStar } from "react-icons/bi";
import { useAuth } from "../Hooks/useAuth";

export const BookDetails = () => {
  const book = useLoaderData();
  const { user } = useAuth();
  const handleBorrow = (e) => {
    e.preventDefault();
    const userName = user.displayName;
    const email = user.email;
    const bookId = book._id;
    const returnDate = e.target.returnn.value;
  };

  return (
    <>
      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_1" className="modal sm:modal-middle">
        <div className="modal-box">
          <form onSubmit={handleBorrow} className="card-body">
            <div className="flex flex-col md:flex-row gap-3">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  value={user.email}
                  disabled
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  disabled
                  value={user.displayName}
                  type="text"
                  className="input input-bordered"
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Returing Date</span>
              </label>
              <input
                name="returnn"
                required
                type="date"
                className="input input-bordered"
              />
            </div>

            <div className="flex gap-4">
              <button className="w-full btn" type="submit">
                Submit
              </button>
              <form method="dialog" className="">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
            </div>
          </form>
        </div>
      </dialog>
      {/* Modal end */}
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
            onClick={() => document.getElementById("my_modal_1").showModal()}
            disabled={parseInt(book.quantity) === 0 ? true : false}
            className="btn"
          >
            Borrow
          </button>
        </div>
      </div>
    </>
  );
};
