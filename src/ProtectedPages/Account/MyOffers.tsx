import { useState, useEffect, useCallback, useMemo } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { ISingleBook } from "../../Pages/BooksForSwapPage/BooksForSwapPage";
import MyOffersBookItem from "./MyOffersBookItem";
import axios from "axios";
import useAlert from "../../hooks/useAlert";

const MyOffers = () => {
  const [setAlert] = useAlert();
  const [userSwaps, setUserSwaps] = useState<ISingleBook[]>();

  // defining useCallback func
  const getOffers = useCallback(async () => {
    try {
      const { data } = await axios.get("/api/users/account/myOffers");
      setUserSwaps(data.data);
      console.log(data);
    } catch (error) {
      console.log(error);
      setAlert("error", "Couldn`t load offers, try again later");
    }
  }, []);

  // useEffect with useCallback func

  useEffect(() => {
    getOffers();
  }, []);

  // defining memoized list of myOffers

  const memoMyOffers = useMemo(() => {
    return userSwaps?.map((swap) => {
      return (
        <MyOffersBookItem
          key={swap._id}
          bookName={swap.nameOfTheBook}
          category={swap.category}
          swapPlace={swap.swapPlace}
          addedIn={swap.created}
          bookId={swap._id}
          bookPhoto={
            swap.bookPhoto
              ? `http://localhost:5000//images/books/${swap.bookPhoto}`
              : ""
          }
        />
      );
    });
  }, [userSwaps]);

  return (
    <Box
      padding={3}
      width={{ xs: "100%", sm: "85%" }}
      sx={{ backgroundColor: "#F5F5F5" }}
      minHeight="40vw"
    >
      <Typography padding={2} variant="h2">
        My Requests
      </Typography>
      <Grid container spacing={3}>
        {memoMyOffers}
      </Grid>
    </Box>
  );
};

export default MyOffers;
