import moment from "moment";
export const BorrowBookCard = ({ info, handleReturnBook }) => {
  const formatedBorrwDate = moment(info.borrowDate).format(
    "dddd, MMMM Do YYYY"
  );

  const formatedReturnDate = moment(info.returnDate).format(
    "dddd, MMMM Do YYYY"
  );

  return (
    <div>
      <div className="card  px-1 py-4 card-compact  bg-base-200 shadow-xl">
        <figure>
          <img
            className="w-3/5 h-56 md:h-60 rounded-lg"
            src={info.photo}
            alt="book"
          />
        </figure>
        <div className="card-body">
          <h2 className="font-bold text-2xl text-center">{info.bookName}</h2>

          <table className="table">
            <tbody>
              <tr className="*:py-1">
                <td className="font-bold">Catergory :</td>
                <td>{info.category}</td>
              </tr>
              <tr className="*:py-1">
                <td className="font-bold">Borrow Date :</td>
                <td>{formatedBorrwDate}</td>
              </tr>
              <tr className="*:py-1">
                <td className="font-bold">Return Date :</td>
                <td>{formatedReturnDate}</td>
              </tr>
            </tbody>
          </table>
          <button
            onClick={() => handleReturnBook(info._id, info.bookId)}
            className="btn bg-[#278270] text-white"
          >
            Return Now
          </button>
        </div>
      </div>
    </div>
  );
};
