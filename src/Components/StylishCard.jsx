import Rating from "react-rating";
import { Link } from "react-router-dom";
import { BiStar } from "react-icons/bi";
import { BiSolidStar } from "react-icons/bi";
export const StylishCard = ({ book, button }) => {
  return (
    <div>
      <div className="px-1 py-4 bg-base-200 rounded-xl card card-compact ">
        <figure>
          <img
            className="w-3/5 h-56 rounded-md"
            src={book?.photo}
            alt="book Image"
          />
        </figure>
        <div className="">
          <div className="my-3 flex flex-col">
            <p className="text-center font-black text-2xl flex-grow">
              {book?.bookName}
            </p>
            <p className="text-center opacity-60 ">by {book?.authorName}</p>
          </div>

          <div className="space-y-2">
            <table className="table">
              <tbody className="space-y-2">
                <tr className="*:py-1">
                  <td className="font-bold">Catergory :</td>
                  <td>{book?.catagory}</td>
                </tr>
                <tr className="*:py-1">
                  <td className="font-bold">Rating :</td>
                  <td>
                    {" "}
                    <Rating
                      initialRating={book?.rating}
                      emptySymbol={<BiStar className="text-yellow-400" />}
                      fullSymbol={<BiSolidStar className="text-yellow-400" />}
                      readonly
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="w-11/12 mx-auto">
              {!button ? (
                <Link to={`/update/${book?._id}`} className="btn w-full">
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
      </div>
      <div className="w-11/12 h-2 mx-auto bg-base-200  rounded-b-2xl opacity-75" />
      <div className="w-10/12 h-2 mx-auto bg-base-200  rounded-b-2xl opacity-50" />
    </div>
  );
};
