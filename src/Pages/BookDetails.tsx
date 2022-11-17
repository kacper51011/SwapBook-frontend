import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ISingleBook } from "./BooksForSwapPage";
import { Container, Grid, Box, Paper } from "@mui/material";
import ProfilePaper from "../components/ProfilePaper";

const BookDetails = () => {
  // getting the params, will be used in useEffect data fetching, where the getSingleBook route will be used
  let { bookId } = useParams();

  // fetched book state will be saved here
  const [fetchedBook, setBook] = useState<ISingleBook>();

  //
  useEffect(() => {
    const getBook = async () => {
      try {
        const { data } = await axios.get(`/api/books/getBook/${bookId}`);
        setBook(data.data.oneBook);
        console.log(data.data.oneBook);
      } catch (err) {
        console.log(err);
      }
    };
    getBook();
  }, []);

  return (
    <Container>
      <Box marginTop="5%">
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <Paper sx={{ width: "100%", height: "100%" }} />
          </Grid>
          <Grid item xs={4}>
            <ProfilePaper
              xsWidth="0.2"
              smWidth="0.4"
              image=""
              nickname="123"
              swapsAmount={3}
              contact={true}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default BookDetails;
