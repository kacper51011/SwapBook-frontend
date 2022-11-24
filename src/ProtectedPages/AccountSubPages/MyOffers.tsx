import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { setError } from "../../store/alertsSlice";
import axios from "axios";
import { ISingleBook } from "../../Pages/BooksForSwapPage";

const MyOffers = () => {
  const dispatch = useDispatch();

  const [userSwaps, setUserSwaps] = useState<ISingleBook[]>();

  useEffect(() => {
    const getSwaps = async () => {
      try {
        const { data } = await axios.get("/api/users/account/myOffers");

        console.log(data);
      } catch (err) {
        console.log(err);
        dispatch(setError("couldn`t load the data, try again later"));
      }
    };
    getSwaps();
  });

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
    </Box>
  );
};

export default MyOffers;
