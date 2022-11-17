import { Container, Stack, Paper, Pagination } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
import BookItem from "../components/BookItem";
import FilterBar from "../components/FilterBar";
import SnackBarItem from "../components/SnackBarItem";

export interface ISingleBook {
  nameOfTheBook: string;
  category: string;
  author: string;
  releaseDate: number;
  swapPlace: string;
  swapFor: string;
  description: string;
  _id: string;
  created: string;
}

const BooksForSwapPage = () => {
  // STATES

  // States set by user before fetching the data
  const [search, setSearch] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [booksPerPage, setBooksPerPage] = useState<string>("10");
  const [sorting, setSorting] = useState<string>("");
  const [choosenPage, setChoosenPage] = useState<number>(1);

  // States set after fetching the data
  const [books, setBooks] = useState<ISingleBook[]>([]);
  const [pagination, setPagination] = useState<number>(1);
  const [error, setError] = useState<boolean>(false);
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
        console.log(data);
        setPagination(data.paginationNumbers);
      } catch (error) {
        setError(true);
      }
    };
    getBooks();
  }, [search, category, booksPerPage, sorting, choosenPage]);

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
            <Stack spacing={2}>
              {books &&
                books.map((el) => {
                  return (
                    <BookItem
                      key={el._id}
                      bookName={el.nameOfTheBook}
                      category={el.category}
                      swapPlace={el.swapPlace}
                      addedIn={el.created}
                      bookId={el._id}
                    ></BookItem>
                  );
                })}
            </Stack>
          </Container>
        </Paper>
        <Pagination
          count={pagination}
          page={choosenPage}
          onChange={handlePageChange}
          color="primary"
          variant="outlined"
        ></Pagination>
        <SnackBarItem
          state={error}
          setter={setError}
          color="error"
          message="couldn`t load books, try again later!"
        />
      </Container>
    </>
  );
};

export default BooksForSwapPage;
