import { useState, useEffect } from "react";
import { ISingleBook } from "../Pages/BooksForSwapPage";
import useAsyncGet from "./useAsyncGet";

interface IFetchedCreator {
  _id: string;
  nickname: string;
  swaps: string[];
  photo: string;
  email: string;
}

const useBookDetails = (bookId: string | undefined) => {
  const [data, getBookAndCreator] = useAsyncGet(
    `/api/books/getBook/${bookId}`,
    "couldn`t load book details"
  );
  const [fetchedBook, setBook] = useState<ISingleBook>();
  const [fetchedCreator, setFetchedCreator] = useState<IFetchedCreator>();

  useEffect(() => {
    // tried to fight with the error, that fires when i fetch the data after changing user photo. Decided to leave it like that

    getBookAndCreator();
    setBook(data.data.oneBook);
    setFetchedCreator(data.data.creator);
  }, []);

  return [fetchedBook, fetchedCreator] as const;
};

export default useBookDetails;
