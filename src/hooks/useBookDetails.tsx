import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { ISingleBook } from "../Pages/BooksForSwapPage";
import { setError } from "../store/alertsSlice";

interface IFetchedCreator {
  _id: string;
  nickname: string;
  swaps: string[];
  photo: string;
  email: string;
}

const useBookDetails = (bookId: string | undefined) => {
  const dispatch = useDispatch();
  const [fetchedBook, setBook] = useState<ISingleBook>();
  const [fetchedCreator, setFetchedCreator] = useState<IFetchedCreator>();

  useEffect(() => {
    // tried to fight with the error, that fires when i fetch the data after changing photo. Decided to leave it like that
    const getBook = async () => {
      try {
        const { data } = await axios.get(`/api/books/getBook/${bookId}`);
        setBook(data.data.oneBook);
        setFetchedCreator(data.data.creator);
      } catch (err) {
        dispatch(setError("couldn`t load book details"));
      }
    };

    getBook();
  }, []);

  return [fetchedBook, fetchedCreator] as const;
};

export default useBookDetails;
