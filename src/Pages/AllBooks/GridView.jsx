import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { Link } from "react-router-dom";

export const GridView = ({ book }) => {
  return (
    <>
      <tr className="*:p-1 *:py-3">
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className=" rounded-md w-10 md:w-14 h-16">
                <img src={book?.photo} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td>{book?.bookName}</td>
        <td>{book?.authorName}</td>
        <td>
          <span className="py-1 px-1 md:px-2 bg-[#62bf623c] text-green-500 rounded-lg">
            {book?.catagory}
          </span>
        </td>
        <td>
          <Rating style={{ maxWidth: 50 }} value={book?.rating} readOnly />
        </td>
        <th>
          <Link
            to={`/update/${book?._id}`}
            className="btn btn-xs md:btn-sm md:w-full lg:btn-md px-1 md:px-2 bg-[#FF9800] text-white"
          >
            Update
          </Link>
        </th>
      </tr>
    </>
  );
};
