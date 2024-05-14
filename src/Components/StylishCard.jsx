import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { Link } from "react-router-dom";
import { BiStar } from "react-icons/bi";
import { BiSolidStar } from "react-icons/bi";
export const StylishCard = ({ book, button }) => {
  return (
    <div>
      <div className="px-1 py-4 bg-base-100 shadow-xl rounded-xl card card-compact ">
        <figure>
          <img
            className="md:w-3/5 w-4/5 h-52 md:h-60 rounded-md"
            src={book?.photo}
            alt="book Image"
          />
        </figure>

        <p className="font-bold mt-1 text-2xl text-center">{book?.bookName}</p>
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
                    style={{ maxWidth: 180 }}
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
              <Link to={`/book/${book?._id}`} className="btn w-full">
                View Details
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="w-11/12 h-2 mx-auto bg-base-100  rounded-b-2xl opacity-75" />
      <div className="w-10/12 h-2 mx-auto bg-base-100  rounded-b-2xl opacity-50" />
    </div>
  );
};
