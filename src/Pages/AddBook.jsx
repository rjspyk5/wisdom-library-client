import React from "react";

export const AddBook = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="w-1/2 ">
          <div className="card  shadow-2xl bg-base-100">
            <form className="card-body">
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
                  type="text"
                  placeholder="Short Description"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <input
                  type="number"
                  placeholder="rating"
                  className="input input-bordered"
                  required
                />
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
