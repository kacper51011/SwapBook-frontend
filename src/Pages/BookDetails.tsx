import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ISingleBook } from "./BooksForSwapPage";

const BookDetails = () => {
  // getting the params, will be used in useEffect data fetching, where the getSingleBook route will be used
  let { bookId } = useParams();

  // fetched book state will be saved here
  const [fetchedBook, setBook] = useState<ISingleBook>();

  //
  useEffect(() => {
    const getBook = async () => {
      try {
        const { data } = await axios.get(`/api/books/getBook/${bookId}`);
        setBook(data.data.oneBook);
        console.log(data.data.oneBook);
      } catch (err) {
        console.log(err);
      }
    };
    getBook();
  }, []);

  return <div>{bookId}</div>;
};

export default BookDetails;
