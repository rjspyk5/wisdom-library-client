import React, { useEffect, useState } from "react";

import { useAuth } from "../Hooks/useAuth";
import { useAxiosSequre } from "../Hooks/useAxiosSecure";
import { BorrowBookCard } from "../Components/BorrowBookCard";

export const BorrowedBooks = () => {
  const axiosSequre = useAxiosSequre();
  const [borrowedBooks, setborrowedBooks] = useState([]);
  const { user } = useAuth();

  const handleReturnBook = (borrowBookId, bookId) => {
    axiosSequre.delete(`/borrow/${borrowBookId}?book=${bookId}`);
  };
  useEffect(() => {
    axiosSequre
      .get(`/borrow?email=${user.email}`)
      .then((res) => setborrowedBooks(res.data));
  }, [handleReturnBook]);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
        {borrowedBooks.map((el) => (
          <BorrowBookCard
            handleReturnBook={handleReturnBook}
            key={el._id}
            info={el}
          />
        ))}
      </div>
    </div>
  );
};
