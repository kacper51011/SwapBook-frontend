import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ISingleBook } from "./BooksForSwapPage";
import { Container, Grid, Box, Paper } from "@mui/material";
import ProfilePaper from "../components/ProfilePaper";
import BookDetailsInfo from "../components/BookDetailsInfo";

const BookDetails = () => {
  // getting the params, will be used in useEffect data fetching, where the getSingleBook route will be used
  let { bookId } = useParams();

  // fetched book state will be saved here
  const [fetchedBook, setBook] = useState<ISingleBook>();

  //
  useEffect(() => {
    const getBook = async () => {
      try {
        // todo: modify the response in backend to send also the offerCreator data
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
      <Paper>
        <Box marginTop="5%" minHeight="50vw">
          <Grid container spacing={3}>
            <Grid item xs={8}>
              <Paper elevation={3} sx={{ width: "1", height: "1" }} />
            </Grid>
            <Grid item xs={4}>
              <ProfilePaper
                xsWidth="0.2"
                smWidth="0.4"
                image=""
                nickname="123"
                swapsAmount={3}
                contact={true}
                offerCreatedBy
              />
            </Grid>
            <Grid item xs={12} minHeight="40vw">
              <BookDetailsInfo
                nameOfTheBook={fetchedBook?.nameOfTheBook}
                category={fetchedBook?.category}
                author={fetchedBook?.author}
                releaseDate={fetchedBook?.releaseDate}
                swapPlace={fetchedBook?.swapPlace}
                swapFor={fetchedBook?.swapFor}
                description={fetchedBook?.description}
                created={fetchedBook?.created}
                _id={fetchedBook?._id}
              />
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
};

export default BookDetails;
