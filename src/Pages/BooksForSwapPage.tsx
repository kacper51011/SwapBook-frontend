import { Container, Stack, Paper, Pagination } from "@mui/material";
import { useState } from "react";
import BookItem from "../components/BookItem";
import FilterBar from "../components/FilterBar";

const BooksForSwapPage = () => {
  const [error, setError] = useState("");
  const [pagination, setPagination] = useState();
  const [category, setCategory] = useState("");
  const [sorting, setSorting] = useState("");
  const [booksPerPage, setBooksPerPage] = useState("");

  return (
    // filtering, categories, pagination, books per page, sorting
    // fetching the data here
    // probably using states for every type of data, using queries and params
    // passing props to filterBar and deeper into SearchBar with the functions that sets states
    // create a useEffect that search for books 1. when the page is opened first time 2. when somebody change the values of categories/booksperpage/sorting
    // 3. when somebody use "search" button in searchBar
    <>
      <FilterBar />
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
        <Pagination count={10} color="primary" variant="outlined"></Pagination>
      </Container>
    </>
  );
};

export default BooksForSwapPage;
