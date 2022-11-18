import React from "react";
import { Typography } from "@mui/material";

interface IBookDetailsTypography {
  inputName: string;
  userInput?: string | number;
}

const BookDetailsTypography = ({
  inputName,
  userInput,
}: IBookDetailsTypography) => {
  return (
    <Typography variant="h5">
      {inputName}
      <br></br> <Typography>{userInput}</Typography>
    </Typography>
  );
};

export default BookDetailsTypography;
