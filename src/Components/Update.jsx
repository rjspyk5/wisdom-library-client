import { useLoaderData, useNavigate } from "react-router-dom";
import { useAxiosSequre } from "../Hooks/useAxiosSecure";
import { useAuth } from "../Hooks/useAuth";
import Swal from "sweetalert2";
import bg from "../assets/image/stackright.jpg";

export const Update = () => {
  const bookPrevInfo = useLoaderData();
  const { user } = useAuth();
  const navigate = useNavigate();
  const axiosSequre = useAxiosSequre();
  const sweetAlert = (msx) => {
    Swal.fire({
      icon: "success",
      title: msx,
    });
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    const photo = e.target.photo.value;
    const name = e.target.name.value;
    const author = e.target.author.value;
    const catagory = e.target.catagory.value;
    const rating = e.target.rating.value;
    const data = { photo, name, author, catagory, rating };

    axiosSequre
      .patch(`/book/${bookPrevInfo._id}?email=${user.email}`, data)
      .then((res) => {
        sweetAlert("Successfully updated");
        navigate("/all");
      })
      .catch((er) => console.log(er));
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
                      Update Book
                    </h1>
                    <form onSubmit={handleUpdate} className="card-body">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Image</span>
                        </label>
                        <input
                          defaultValue={bookPrevInfo.photo}
                          name="photo"
                          type="text"
                          placeholder="Give photo url"
                          className="input input-bordered min-h-10 h-10"
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Book Name</span>
                        </label>
                        <input
                          defaultValue={bookPrevInfo.bookName}
                          name="name"
                          type="text"
                          placeholder="Book Name"
                          className="input input-bordered min-h-10 h-10"
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Author Name</span>
                        </label>
                        <input
                          defaultValue={bookPrevInfo.authorName}
                          name="author"
                          type="text"
                          placeholder="Author Name"
                          className="input input-bordered min-h-10 h-10"
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Catagory</span>
                          </label>
                          <select
                            defaultValue={bookPrevInfo.catagory}
                            className="select select-bordered w-full min-h-10 h-10"
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
                            defaultValue={bookPrevInfo.rating}
                            className="select select-bordered w-full min-h-10 h-10"
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

                      <div className="form-control mt-6">
                        <button className="btn text-white bg-[orange]">
                          Save Changes
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
