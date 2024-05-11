import React from "react";
import { useAxiosSequre } from "../Hooks/useAxiosSecure";

export const AddBook = () => {
  const axiosSequre = useAxiosSequre();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const bookName = form.get("name");
    const photo = form.get("photo");
    const quantity = form.get("quantity");
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
      .post("/books", bookInfo)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="w-1/2 ">
          <div className="card  shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
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
                  <span className="label-text">Author Name</span>
                </label>
                <input
                  name="author"
                  type="text"
                  placeholder="Author Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Catagory</span>
                </label>
                <input
                  name="catagory"
                  type="text"
                  placeholder="Catagory"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Short Description</span>
                </label>

                <input
                  name="description"
                  type="text"
                  placeholder="Short Description"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <select className="p-2 border rounded-md" name="rating" id="">
                  <option value="5">5</option>
                  <option value="4">4</option>
                  <option value="3">3</option>
                  <option value="2">2</option>
                  <option value="1">1</option>
                </select>
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
                <button className="btn btn-primary">Add the book</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
