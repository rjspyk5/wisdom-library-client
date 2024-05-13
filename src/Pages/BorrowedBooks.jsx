import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useAuth } from "../Hooks/useAuth";
import { useAxiosSequre } from "../Hooks/useAxiosSecure";
import { BorrowBookCard } from "../Components/BorrowBookCard";

export const BorrowedBooks = () => {
  const axiosSequre = useAxiosSequre();
  const [borrowedBooks, setborrowedBooks] = useState([]);
  const [loading, setloading] = useState(true);
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
          setloading(true);
          axiosSequre
            .delete(`/borrow/${borrowBookId}?book=${bookId}`)
            .then(() => {
              setloading(false);
              swalWithBootstrapButtons.fire({
                title: "Successfully Return ",
                icon: "success",
              });
            });
        }
      });
  };
  useEffect(() => {
    setloading(true);
    axiosSequre.get(`/borrow?email=${user?.email}`).then((res) => {
      setborrowedBooks(res.data);
    });
    setloading(false);
  }, [handleReturnBook]);

  return (
    <div>
      {loading ? (
        <div className="min-h-[500px] flex justify-center items-center">
          <div>
            <span className="loading loading-bars loading-lg"></span>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
          {borrowedBooks.map((el) => (
            <BorrowBookCard
              handleReturnBook={handleReturnBook}
              key={el._id}
              info={el}
            />
          ))}
        </div>
      )}
    </div>
  );
};
