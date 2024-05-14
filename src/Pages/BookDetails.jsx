import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import moment from "moment";
import Swal from "sweetalert2";

import { BiStar } from "react-icons/bi";
import { BiSolidStar } from "react-icons/bi";
import { useAuth } from "../Hooks/useAuth";
import { useAxiosSequre } from "../Hooks/useAxiosSecure";

export const BookDetails = () => {
  const sweetAlert = (msx) => {
    Swal.fire({
      icon: "success",
      text: msx,
    });
  };
  const errorAlert = (msz) =>
    Swal.fire({
      icon: "error",

      text: msz,
    });
  const [book, setbook] = useState({});
  const { id } = useParams();
  const axiosSequre = useAxiosSequre();
  const { user } = useAuth();
  const fetchData = () =>
    axiosSequre.get(`/book/${id}`).then((res) => setbook(res.data));
  const handleBorrow = (e) => {
    e.preventDefault();
    const userName = user?.displayName;
    const email = user?.email;
    const bookId = book._id;
    const photo = book.photo;
    const category = book.catagory;
    const bookName = book.bookName;
    const returnDate = e.target.returnn.value;
    const borrowDate = moment().format("YYYY-MM-DD");
    axiosSequre
      .post(`/borrow/${bookId}`, {
        userName,
        email,
        bookId,
        returnDate,
        photo,
        bookName,
        borrowDate,
        category,
      })
      .then((res) => {
        fetchData();
        if (res.data === "duplicate request") {
          document.getElementById("my_modal_1").close();
          return errorAlert("You have already borrowd this book.");
        }
        if (res.data === "limit end") {
          document.getElementById("my_modal_1").close();
          return errorAlert(
            "Limit Exceeded,each person is allowed to borrow up to three books"
          );
        }

        document.getElementById("my_modal_1").close();
        sweetAlert(`Successfully borrowed ${bookName}`);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="px-8 max-w-[1150px] mx-auto">
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
                  value={user?.email}
                  disabled
                  type="email"
                  placeholder="email"
                  className="input input-bordered px-2"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  disabled
                  value={user?.displayName}
                  type="text"
                  className="input input-bordered px-2"
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

            <div className="flex gap-4 mt-3">
              <button
                className="btn flex-grow bg-green-500 text-white"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
          <form method="dialog" className="">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
        </div>
      </dialog>
      {/* Modal end */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10 py-10">
        <div className="md:col-span-2 p-8 border ">
          <img
            className="rounded-lg w-4/5 mx-auto h-[400px]"
            src={book?.photo}
            alt=""
          />
        </div>
        <div className="md:col-span-3">
          <div className="ml-4">
            <h1 className="font-bold text-3xl mb-5">{book?.bookName}</h1>
            <p className="opacity-60 mb-5">by {book?.authorName}</p>
          </div>
          <table className="table w-full md:w-2/3 text-lg">
            <tbody>
              <tr>
                <td className="font-bold">Rating </td>
                <td>
                  <Rating
                    style={{ maxWidth: 140 }}
                    value={book?.rating}
                    readOnly
                  />
                </td>
              </tr>
              <tr>
                <td className="font-bold">Catergory </td>
                <td>{book?.catagory}</td>
              </tr>
              <tr>
                <td className="font-bold">Available Quantity </td>
                <td>{book?.quantity}</td>
              </tr>
              <tr>
                <td className="font-bold">About this book </td>
                <td>{book?.about}</td>
              </tr>
              <tr>
                <td className="font-bold">Description </td>
                <td>{book?.description}</td>
              </tr>
            </tbody>
          </table>
          <button
            onClick={() => document.getElementById("my_modal_1").showModal()}
            disabled={parseInt(book?.quantity) === 0 ? true : false}
            className="btn"
          >
            Borrow
          </button>
        </div>
      </div>
    </div>
  );
};
