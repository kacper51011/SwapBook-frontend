import { Container, Stack, Paper, Pagination } from "@mui/material";
import axios from "axios";
import { useState, useEffect, ElementType } from "react";
import BookItem from "../components/BookItem";
import FilterBar from "../components/FilterBar";

const BooksForSwapPage = () => {
  // STATES

  // States set by user before fetching the data
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [booksPerPage, setBooksPerPage] = useState("10");
  const [sorting, setSorting] = useState("");
  const [choosenPage, setChoosenPage] = useState(1);

  // States set after fetching the data
  const [books, setBooks] = useState([]);
  const [pagination, setPagination] = useState(1);
  const [error, setError] = useState("");
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

  // I will pass state setter of the search text in filterBar, then in SearchBar props

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
        console.log(data.books);
        setPagination(data.paginationNumbers);
      } catch (error) {
        console.log(error);
      }
    };
    getBooks();
    // todo: use getBooks func
  }, [search, category, booksPerPage, sorting, choosenPage]);

  // filtering, categories, pagination, books per page, sorting
  // fetching the data here
  // probably using states for every type of data, using queries and params
  // passing props to filterBar and deeper into SearchBar with the functions that sets states
  // create a useEffect that search for books 1. when the page is opened first time 2. when somebody change the values of categories/booksperpage/sorting
  // 3. when somebody use "search" button in searchBar
  return (
    <>
      <FilterBar
        handleSortingChange={handleSortingChange}
        handleCategoryChange={handleCategoryChange}
        handleBooksPerPageChange={handleBooksPerPageChange}
        setSearch={setSearch}
      />
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Paper
          elevation={1}
          sx={{
            marginTop: "20px",
            marginBottom: "20px",
            paddingTop: "20px",
            paddingBottom: "20px",
            backgroundColor: "#F5F5F5",
            width: 1,
          }}
        >
          <Container>
            <Stack spacing={2}></Stack>
          </Container>
        </Paper>
        <Pagination
          count={pagination}
          page={choosenPage}
          onChange={handlePageChange}
          color="primary"
          variant="outlined"
        ></Pagination>
      </Container>
    </>
  );
};

export default BooksForSwapPage;
