import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ISingleBook } from "./BooksForSwapPage";
import { Container, Grid, Box, Paper } from "@mui/material";
import ProfilePaper from "../components/ProfilePaper";
import BookDetailsInfo from "../components/BookDetailsInfo";
import { useDispatch } from "react-redux";
import { setError } from "../store/alertsSlice";

// interface of the creator of offer used in ProfilePaper in BookDetails (sent data.data.creator contains only those 3 values)
interface IFetchedCreator {
  _id: string;
  nickname: string;
  swaps: string[];
  photo: string;
}

const BookDetails = () => {
  // getting the params, will be used in useEffect data fetching, where the getSingleBook route will be used
  let { bookId } = useParams();
  const dispatch = useDispatch();

  // fetched book state will be saved here
  const [fetchedBook, setBook] = useState<ISingleBook>();
  const [fetchedCreator, setFetchedCreator] = useState<IFetchedCreator>();
  const [fetchedId, setFetchedId] = useState<string>("");

  //
  useEffect(() => {
    // tried to fight with the error, that fires when i fetch the data after changing photo. Decided to leave it like that (with two async functions)
    const getBook = async () => {
      try {
        const { data } = await axios.get(`/api/books/getBook/${bookId}`);
        setBook(data.data.oneBook);
        setFetchedId(data.data.creator._id);
      } catch (err) {
        dispatch(setError("couldn`t load book details"));
      }
    };

    const getUserImage = async () => {
      try {
        const { data } = await axios.get(`/api/users/${fetchedId}`);

        setFetchedCreator(data.data.users[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getBook().then(() => getUserImage());
  }, []);

  return (
    <Container>
      <Paper>
        <Box marginTop="5%" minHeight="50vw">
          <Grid container spacing={3}>
            <Grid item xs={8}>
              {/* todo: image carousel */}
              <Paper elevation={3} sx={{ width: "1", height: "1" }}>
                Here will be image carousel
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <ProfilePaper
                xsWidth="0.2"
                smWidth="0.4"
                nickname={fetchedCreator?.nickname}
                swapsAmount={fetchedCreator?.swaps.length}
                contact={true}
                image={
                  fetchedCreator?.photo
                    ? `http://localhost:5000//images/users/${fetchedCreator.photo}`
                    : ""
                }
                offerCreatedBy
                avatarMargin="2vw"
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
