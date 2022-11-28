import { Stack, Pagination } from "@mui/material";

import BookItem from "../../components/BookItem";
import BooksForSwapContainer from "./BooksForSwapContainer";
import FilterBar from "./FilterBar";
import useBookPage from "../../hooks/useBookPage";

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

const BooksForSwapPage = () => {
  const [
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
  ] = useBookPage();
  return (
    <>
      {/* searchBar, sorting, number of Books displayed, filtering */}
      <FilterBar
        handleSortingChange={handleSortingChange}
        handleCategoryChange={handleCategoryChange}
        handleBooksPerPageChange={handleBooksPerPageChange}
        setSearch={setSearch}
      />
      <BooksForSwapContainer
        // books fetched from API
        children1={
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
        }
        // Pagination
        children2={
          <Pagination
            count={pagination}
            page={choosenPage}
            onChange={handlePageChange}
            color="primary"
            variant="outlined"
          ></Pagination>
        }
      />
    </>
  );
};

export default BooksForSwapPage;
