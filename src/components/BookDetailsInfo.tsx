import { Box, Divider, Grid, Paper, Typography, Stack } from "@mui/material";
import React from "react";
import { ISingleBook } from "../Pages/BooksForSwapPage";
import BookDetailsTypography from "./BookDetailsTypography";

interface ISingleBookWithCreator extends ISingleBook {}

const BookDetailsInfo = ({
  nameOfTheBook,
  category,
  author,
  releaseDate,
  swapPlace,
  swapFor,
  description,
  created,
}: ISingleBookWithCreator) => {
  return (
    <Paper elevation={10} sx={{ width: "1", height: "1" }}>
      <Box width="100%" height="100%" display="flex" flexDirection="row">
        <Box width="0.5" padding="10px" display="flex" flexDirection="column">
          <Typography textAlign="center" variant="h4">
            About book
          </Typography>
          <Stack direction="column" flexGrow="1" justifyContent="space-evenly">
            <BookDetailsTypography inputName="Book" userInput={nameOfTheBook} />
            <BookDetailsTypography inputName="Author" userInput={author} />
            <BookDetailsTypography inputName="Category" userInput={category} />
            <BookDetailsTypography
              inputName="Book released"
              userInput={releaseDate}
            />
          </Stack>
        </Box>
        <Divider orientation="vertical" />
        <Box width="0.5" padding="10px" display="flex" flexDirection="column">
          <Typography textAlign="center" variant="h4">
            About offer
          </Typography>
          <Stack direction="column" flexGrow="1" justifyContent="space-evenly">
            <BookDetailsTypography inputName="Created at" userInput={created} />

            <BookDetailsTypography
              inputName="Place of exchange"
              userInput={swapPlace}
            />

            <BookDetailsTypography
              inputName="Books for exchange"
              userInput={swapFor}
            />

            <BookDetailsTypography
              inputName="description"
              userInput={description}
            />
          </Stack>
        </Box>
      </Box>
    </Paper>
  );
};

export default BookDetailsInfo;
