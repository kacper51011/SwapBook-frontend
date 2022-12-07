import axios from "axios";
import { useCallback, useState } from "react";
import { ISingleBook } from "../Pages/BooksForSwapPage/BooksForSwapPage";
import useAlert from "./useAlert";

interface IFetchedCreator {
  _id: string;
  nickname: string;
  swaps: string[];
  photo: string;
  email: string;
}

const useBookDetails = (bookId: string | undefined) => {
  const [setAlert] = useAlert();
  const [fetchedBook, setFetchedBook] = useState<ISingleBook>();
  const [fetchedCreator, setFetchedCreator] = useState<IFetchedCreator>();

  // tried to fight with the error, that fires when i fetch the data after changing user photo. Decided to leave it like that

  const getBook = useCallback(async () => {
    try {
      const { data } = await axios.get(`/api/books/getBook/${bookId}`);
      console.log(data);
      setFetchedBook(data.data.oneBook);
      setFetchedCreator(data.data.creator);
    } catch (err) {
      setAlert("error", "couldn`t load book details");
    }
  }, [bookId]);

  return [fetchedBook, fetchedCreator, getBook] as const;
};

export default useBookDetails;
