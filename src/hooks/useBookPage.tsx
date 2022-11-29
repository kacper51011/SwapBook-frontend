import React, { useState, useEffect } from "react";
import axios from "axios";

import useAlert from "./useAlert";

export interface ISingleBook {
  nameOfTheBook?: string;
  category?: string;
  author?: string;
  releaseDate?: number;
  swapPlace?: string;
  swapFor?: string;
  description?: string;
  _id?: string;
  created?: string;
}

const useBookPage = () => {
  // STATES set by user before fetching the data
  const [setAlert] = useAlert();
  const [search, setSearch] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [booksPerPage, setBooksPerPage] = useState<string>("10");
  const [sorting, setSorting] = useState<string>("");
  const [choosenPage, setChoosenPage] = useState<number>(1);

  // STATES set after fetching the data
  const [books, setBooks] = useState<ISingleBook[]>([]);
  const [pagination, setPagination] = useState<number>(1);

  // HANDLERS

  // handling the page change on click, used on <Pagination/> (BooksForSwapPage)
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setChoosenPage(value);
  };

  // handling the category Change used in FilterBar props
  const handleCategoryChange: React.ChangeEventHandler<HTMLSelectElement> = (
    event
  ) => {
    setCategory(event.target.value);
  };

  // handling the sorting Change used in FilterBar props
  const handleSortingChange: React.ChangeEventHandler<HTMLSelectElement> = (
    event
  ) => {
    setSorting(event.target.value);
  };

  // handling books per page change used in FilterBar props
  const handleBooksPerPageChange: React.ChangeEventHandler<
    HTMLSelectElement
  > = (event) => {
    setBooksPerPage(event.target.value);
  };

  useEffect(() => {
    const getBooks = async () => {
      // setting up flexible params and queries for get request
      const CategoryParams = category ? `/category/${category}` : "";
      const searchParams = search ? `/search/${search}` : "";
      const booksPerPageQuery = `?records=${booksPerPage}`;
      const sortingQuery = sorting ? `&sort=${sorting}` : "";
      const choosenPageQuery = `&pageNum=${choosenPage}`;

      try {
        const { data } = await axios.get(
          `/api/books${CategoryParams}${searchParams}${booksPerPageQuery}${sortingQuery}${choosenPageQuery}`
        );

        setBooks(data.books);
        console.log(data);
        setPagination(data.paginationNumbers);
      } catch (error) {
        setAlert("error", "couldn`t load books, try again later");
      }
    };
    getBooks();
  }, [search, category, booksPerPage, sorting, choosenPage]);
  return [
    books,
    pagination,
    choosenPage,
    {
      setSearch,
      handlePageChange,
      handleCategoryChange,
      handleSortingChange,
      handleBooksPerPageChange,
    },
  ] as const;
};

export default useBookPage;
