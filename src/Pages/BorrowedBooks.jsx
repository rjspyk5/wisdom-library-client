import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useAuth } from "../Hooks/useAuth";
import { useAxiosSequre } from "../Hooks/useAxiosSecure";
import { BorrowBookCard } from "../Components/BorrowBookCard";

export const BorrowedBooks = () => {
  const axiosSequre = useAxiosSequre();
  const [borrowedBooks, setborrowedBooks] = useState([]);
  const { user } = useAuth();

  const handleReturnBook = (borrowBookId, bookId) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        text: "Are you sure you want to return now?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Return Now",
        cancelButtonText: "Cancel",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          axiosSequre
            .delete(`/borrow/${borrowBookId}?book=${bookId}`)
            .then(() => {
              swalWithBootstrapButtons.fire({
                title: "Successfully Return ",
                icon: "success",
              });
            });
        }
      });
  };
  useEffect(() => {
    axiosSequre.get(`/borrow?email=${user?.email}`).then((res) => {
      setborrowedBooks(res.data);
    });
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
