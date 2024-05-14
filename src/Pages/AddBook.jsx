import { useAxiosSequre } from "../Hooks/useAxiosSecure";
import { useAuth } from "../Hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import bg from "../assets/image/stackright.jpg";

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
      <div className="">
        <div className="w-full ">
          <section>
            <section className="relative py-10 ">
              <div className="absolute inset-0">
                <img className="object-cover w-full h-full" src={bg} alt="" />
              </div>
              <div className="absolute inset-0 bg-[#00000075]"></div>
              <div className="relative max-w-2xl px-4 mx-auto sm:px-0">
                <div className="overflow-hidden rounded-md shadow-md">
                  <div className="card  shadow-2xl bg-base-100">
                    <h1 className="text-center pt-4 font-bold text-2xl">
                      Add Book
                    </h1>
                    <form
                      onSubmit={handleSubmit}
                      className="card-body py-5 px-14"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Book Name</span>
                          </label>
                          <input
                            name="name"
                            type="text"
                            placeholder="Book Name"
                            className="input min-h-10 h-10 input-bordered"
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
                            className="input input-bordered min-h-10 h-10"
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
                          className="input input-bordered min-h-10 h-10"
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Short Description</span>
                        </label>
                        <textarea
                          className=" p-4 h-32 input input-bordered "
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
                            className="input input-bordered min-h-10 h-10"
                            required
                          />
                        </div>

                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Catagory</span>
                          </label>
                          <select
                            className="select select-bordered w-full max-w-xs min-h-10 h-10"
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
                          <select
                            className="select select-bordered w-full max-w-xs min-h-10 h-10"
                            name="rating"
                            id=""
                          >
                            <option value="5">5</option>
                            <option value="4">4</option>
                            <option value="3">3</option>
                            <option value="2">2</option>
                            <option value="1">1</option>
                          </select>
                        </div>
                      </div>

                      <div className="form-control">
                        <label className="label ">
                          <span className="label-text">About the Book</span>
                        </label>
                        <textarea
                          className=" p-4 h-28 input input-bordered "
                          placeholder="About this book"
                          name="about"
                          id=""
                          rows="3"
                        ></textarea>
                      </div>
                      <div className="form-control mt-6">
                        <button
                          type="submit"
                          className="btn bg-[#4CAF50] text-white"
                        >
                          Add the book
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </section>
        </div>
      </div>
    </div>
  );
};
