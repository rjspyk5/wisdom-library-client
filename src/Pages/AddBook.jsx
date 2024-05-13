import React from "react";
import { useAxiosSequre } from "../Hooks/useAxiosSecure";
import { useAuth } from "../Hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export const AddBook = () => {
  const axiosSequre = useAxiosSequre();
  const { user } = useAuth();
  const navigate = useNavigate();

  const sweetAlert = (msx) => {
    Swal.fire({
      icon: "success",
      title: msx,
    });
  };

  const errorAlert = (msz) =>
    Swal.fire({
      icon: "error",

      title: msz,
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const bookName = form.get("name");
    const photo = form.get("photo");
    const quantit = form.get("quantity");
    const quantity = parseInt(quantit);
    if (quantity < 1) {
      return errorAlert("Quantity can't be negative or zero");
    }
    const authorName = form.get("author");
    const catagory = form.get("catagory");
    const description = form.get("description");
    const rating = form.get("rating");
    const about = form.get("about");
    const bookInfo = {
      bookName,
      photo,
      quantity,
      authorName,
      catagory,
      description,
      rating,
      about,
    };
    axiosSequre
      .post(`/books?email=${user.email}`, bookInfo)
      .then(() => {
        sweetAlert("Books added successfully");
        navigate("/all");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="w-1/2 ">
          <div className="card  shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Book Name</span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Book Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Author Name</span>
                  </label>
                  <input
                    name="author"
                    type="text"
                    placeholder="Author Name"
                    className="input input-bordered"
                  />
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image</span>
                </label>
                <input
                  name="photo"
                  type="text"
                  placeholder="Image Url"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Short Description</span>
                </label>
                <textarea
                  className="border p-4 rounded-md"
                  placeholder="Short Description"
                  name="description"
                  id=""
                  rows="3"
                ></textarea>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Quantity</span>
                  </label>
                  <input
                    name="quantity"
                    type="number"
                    placeholder="Quantity of the book"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Catagory</span>
                  </label>
                  <select
                    className="p-3 border rounded-md"
                    name="catagory"
                    id=""
                  >
                    <option value="Novel">Novel</option>
                    <option value="History">History</option>
                    <option value="Sci-fi">Sci-fi</option>
                    <option value="Thriller">Thriller</option>
                  </select>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Rating</span>
                  </label>
                  <select className="p-3 border rounded-md" name="rating" id="">
                    <option value="5">5</option>
                    <option value="4">4</option>
                    <option value="3">3</option>
                    <option value="2">2</option>
                    <option value="1">1</option>
                  </select>
                </div>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">About the Book</span>
                </label>
                <input
                  name="about"
                  type="text"
                  placeholder="About the book"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn bg-[#4CAF50] text-white">
                  Add the book
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
