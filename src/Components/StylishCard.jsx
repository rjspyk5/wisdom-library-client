import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
export const StylishCard = ({ book, button }) => {
  return (
    <div>
      <Fade>
        <div className="px-1 py-4 bg-gradient-to-tr from-base-100 to-base-300 shadow-lg  rounded-xl card card-compact ">
          <figure>
            <img
              className="w-3/5 h-56 md:h-60 rounded-md"
              src={book?.photo}
              alt="book Image"
            />
          </figure>

          <p className="font-bold mt-1 text-2xl text-center">
            {book?.bookName}
          </p>
          <p className="text-center mb-1 opacity-60 ">by {book?.authorName}</p>

          <div className="space-y-2">
            <table className="table">
              <tbody className="space-y-2">
                <tr className="*:py-1">
                  <td className="font-bold">Catergory</td>
                  <td>
                    <span className="bg-[#62bf623c] text-green-500 px-2 py-1 rounded-lg">
                      {book?.catagory}
                    </span>
                  </td>
                </tr>
                <tr className="*:py-1">
                  <td className="font-bold">Rating</td>
                  <td>
                    <Rating
                      style={{ maxWidth: 70 }}
                      value={book?.rating}
                      readOnly
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="w-11/12 mx-auto">
              {!button ? (
                <Link
                  to={`/update/${book?._id}`}
                  className="btn bg-[#FF9800] text-white w-full"
                >
                  Update
                </Link>
              ) : (
                <Link
                  to={`/book/${book?._id}`}
                  className="btn bg-green-500 text-white w-full"
                >
                  View Details
                </Link>
              )}
            </div>
          </div>
        </div>
        <div className="w-11/12 h-2 mx-auto bg-base-300  rounded-b-2xl opacity-75" />
        <div className="w-10/12 h-2 mx-auto bg-base-300  rounded-b-2xl opacity-50" />
      </Fade>
    </div>
  );
};
