import { useState, useEffect } from "react";
import { Box, Grid, Typography } from "@mui/material";
import axios from "axios";
import { ISingleBook } from "../../Pages/BooksForSwapPage";
import MyOffersBookItem from "../../components/MyOffersBookItem";
import useAlert from "../../hooks/useAlert";

const MyOffers = () => {
  const [userSwaps, setUserSwaps] = useState<ISingleBook[]>();
  const [setAlert] = useAlert();

  useEffect(() => {
    const getSwaps = async () => {
      try {
        const { data } = await axios.get("/api/users/account/myOffers");
        setUserSwaps(data.data);
      } catch (err) {
        setAlert("error", "Couldn`t load your Offers, try again later");
      }
    };
    getSwaps();
  }, []);

  // use tooltips

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
