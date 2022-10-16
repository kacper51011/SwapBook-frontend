import { Box, Container, Stack } from "@mui/material";
import React from "react";
import BookItem from "../components/BookItem";

const BooksForSwapPage = () => {
  return (
    <Container sx={{ color: "red" }}>
      <Stack spacing={2}>
        {/* here will also be searchbar */}
        <BookItem />
        <BookItem />
        <BookItem />
        <BookItem />
        <BookItem />
      </Stack>
    </Container>
  );
};

export default BooksForSwapPage;
