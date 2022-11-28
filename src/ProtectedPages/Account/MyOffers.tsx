import { useState, useEffect } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { ISingleBook } from "../../Pages/BooksForSwapPage/BooksForSwapPage";
import MyOffersBookItem from "./MyOffersBookItem";
import useAsyncGet from "../../hooks/useAsyncGet";

const MyOffers = () => {
  const [userSwaps, setUserSwaps] = useState<ISingleBook[]>();
  const [data, getOffers] = useAsyncGet(
    "/api/users/account/myOffers",
    "Couldn`t load your Offers, try again later"
  );

  useEffect(() => {
    getOffers();
    setUserSwaps(data.data);
  }, []);

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
        {userSwaps?.map((swap) => {
          return (
            <MyOffersBookItem
              key={swap._id}
              bookName={swap.nameOfTheBook}
              category={swap.category}
              swapPlace={swap.swapPlace}
              addedIn={swap.created}
              bookId={swap._id}
            />
          );
        })}
      </Grid>
    </Box>
  );
};

export default MyOffers;
