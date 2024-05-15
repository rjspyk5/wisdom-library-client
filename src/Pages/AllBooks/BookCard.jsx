import Rating from "react-rating";
import { Link } from "react-router-dom";
import { BiStar } from "react-icons/bi";
import { BiSolidStar } from "react-icons/bi";
import PropTypes from "prop-types";

export const BookCard = ({ book, button }) => {
  return (
    <div>
      <div className="card card-compact p-5 bg-base-200 shadow-xl">
        <figure>
          <img className="w-full h-60" src={book.photo} alt="Shoes" />
        </figure>

        <div className="">
          <div className="my-4 flex flex-col">
            <p className="text-center font-black text-2xl flex-grow">
              {book.bookName}
            </p>
            <p className="text-center opacity-60 ">by {book.authorName}</p>
          </div>

          <div className="space-y-4">
            <table className="table">
              <tbody>
                <tr>
                  <td className="font-bold">Catergory :</td>
                  <td>{book.catagory}</td>
                </tr>
                <tr>
                  <td className="font-bold">Rating :</td>
                  <td>
                    {" "}
                    <Rating
                      initialRating={book.rating}
                      emptySymbol={<BiStar className="text-yellow-400" />}
                      fullSymbol={<BiSolidStar className="text-yellow-400" />}
                      readonly
                    />
                  </td>
                </tr>
              </tbody>
            </table>

            {!button ? (
              <Link to={`/update/${book._id}`} className="btn w-full">
                Update
              </Link>
            ) : (
              <Link to={`/book/${book._id}`} className="btn w-full">
                View Details
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
BookCard.propTypes = {
  book: PropTypes.object,
  button: PropTypes.bool,
};
