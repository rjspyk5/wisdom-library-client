import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useAuth } from "../Hooks/useAuth";
import { useAxiosSequre } from "../Hooks/useAxiosSecure";
import { BorrowBookCard } from "../Components/BorrowBookCard";
import { HeadingSection } from "../Components/HeadingSection";

export const BorrowedBooks = () => {
  const axiosSequre = useAxiosSequre();
  const [borrowedBooks, setborrowedBooks] = useState([]);
  const [loading, setloading] = useState(true);
  const { user } = useAuth();
  const totalBorrowedBooks = borrowedBooks.length;

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
              setloading(true);
              axiosSequre
                .get(`/borrow?email=${user?.email}`)
                .then((res) => {
                  setloading(false);
                  setborrowedBooks(res.data);
                })
                .catch(() => setloading(false));

              swalWithBootstrapButtons.fire({
                title: "Successfully Return ",
                icon: "success",
              });
            })
            .catch(() => setloading(false));
        }
      });
  };
  useEffect(() => {
    setloading(true);

    axiosSequre
      .get(`/borrow?email=${user?.email}`)
      .then((res) => {
        setloading(false);
        setborrowedBooks(res.data);
      })
      .catch(() => setloading(false));
  }, []);

  const books = (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
      {borrowedBooks.map((el) => (
        <BorrowBookCard
          handleReturnBook={handleReturnBook}
          key={el._id}
          info={el}
        />
      ))}
    </div>
  );
  const noBook = (
    <div className="h-[250px] flex justify-center items-center">
      <h1 className="font-bold text-lg md:text-xl">
        You haven't borrwed any books yet
      </h1>
    </div>
  );

  return (
    <div className="px-8 max-w-[1150px] mx-auto">
      <HeadingSection
        heading="Your Borrowed Books"
        subheading="Explore the Books You've Borrowed from Wisdom Library"
      />
      {loading ? (
        <div className="min-h-[500px] flex justify-center items-center">
          <div>
            <span className="loading loading-bars loading-lg"></span>
          </div>
        </div>
      ) : totalBorrowedBooks < 1 && !loading ? (
        noBook
      ) : (
        books
      )}
    </div>
  );
};
