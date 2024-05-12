import moment from "moment";
export const BorrowBookCard = ({ info, handleReturnBook }) => {
  const formatedBorrwDate = moment(info.borrowDate).format(
    "dddd, MMMM Do YYYY"
  );
  console.log(formatedBorrwDate);
  const formatedReturnDate = moment(info.returnDate).format(
    "dddd, MMMM Do YYYY"
  );
  return (
    <div>
      <div className="card card-compact  bg-base-100 shadow-xl">
        <figure>
          <img className="w-48 h-60" src={info.photo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="font-bold text-2xl text-center">{info.bookName}</h2>

          <table className="table">
            <tr>
              <td className="font-bold">Catergory :</td>
              <td>{info.category}</td>
            </tr>
            <tr>
              <td className="font-bold">Borrow Date :</td>
              <td>{formatedBorrwDate}</td>
            </tr>
            <tr>
              <td className="font-bold">Return Date :</td>
              <td>{formatedReturnDate}</td>
            </tr>
          </table>
          <button
            onClick={() => handleReturnBook(info._id, info.bookId)}
            className="btn bg-[#ec3c9d] text-white"
          >
            Return Now
          </button>
        </div>
      </div>
    </div>
  );
};
