import React from "react";
import { Typography } from "@mui/material";

interface IBookDetailsTypography {
  inputName: string;
  userInput?: string | number;
  marginLeft?: string;
  inputNameVariant?:
    | "body1"
    | "body2"
    | "button"
    | "caption"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "inherit"
    | "overline"
    | "subtitle1"
    | "subtitle2";
  inputNamePadding?: string;
  userInputPadding?: string;
  marginY?: string;
}

const BookDetailsTypography = ({
  inputName,
  userInput,
  marginLeft,
  inputNameVariant,
  inputNamePadding,
  userInputPadding,
  marginY,
}: IBookDetailsTypography) => {
  return (
    <Typography
      variant={inputNameVariant || "h5"}
      padding={inputNamePadding}
      marginY="1vw"
    >
      {inputName}
      <br></br>{" "}
      <Typography
        color="darkblue"
        marginLeft={marginLeft}
        padding={userInputPadding}
      >
        {userInput}
      </Typography>
    </Typography>
  );
};

export default BookDetailsTypography;
