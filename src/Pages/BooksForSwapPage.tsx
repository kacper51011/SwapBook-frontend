import { Box, Container, Stack, Paper } from "@mui/material";
import React from "react";
import BookItem from "../components/BookItem";

const BooksForSwapPage = () => {
  return (
    <Container sx={{ backgroundColor: "#F5F5F5" }}>
      <Paper
        elevation={1}
        sx={{
          marginTop: "20px",
          marginBottom: "20px",
          paddingTop: "20px",
          paddingBottom: "20px",
          backgroundColor: "#F5F5F5",
        }}
      >
        <Container>
          <Stack spacing={2}>
            {/* here will also be searchbar */}
            <BookItem />
            <BookItem />
            <BookItem />
            <BookItem />
            <BookItem />
          </Stack>
        </Container>
      </Paper>
    </Container>
  );
};

export default BooksForSwapPage;
