import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { useAuth } from "../Hooks/useAuth";
import { useAxiosSequre } from "../Hooks/useAxiosSecure";

export const BorrowedBooks = () => {
  const axiosSequre = useAxiosSequre();
  const { user } = useAuth();
  useEffect(() => {
    axiosSequre
      .get(`/borrow?email=${user.email}`)
      .then((res) => console.log(res.data));
  }, []);

  return <div>BorrowedBooks</div>;
};
