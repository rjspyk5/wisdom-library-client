import { useLoaderData } from "react-router-dom";
import { useAxiosSequre } from "../Hooks/useAxiosSecure";
import { useAuth } from "../Hooks/useAuth";

export const Update = () => {
  const bookPrevInfo = useLoaderData();
  const { user } = useAuth();
  const axiosSequre = useAxiosSequre();
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
      .then((res) => console.log(res.data))
      .catch((er) => console.log(er));
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content ">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
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
                  className="input input-bordered"
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
                  className="input input-bordered"
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
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Catagory</span>
                </label>
                <select
                  defaultValue={bookPrevInfo.catagory}
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
                <select
                  defaultValue={bookPrevInfo.rating}
                  className="border"
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
              <div className="form-control mt-6">
                <button className="btn btn-primary">Save Changes</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
