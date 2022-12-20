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
  inputNameVariant = "h5",
  inputNamePadding,
  userInputPadding,
}: IBookDetailsTypography) => {
  return (
    <Typography
      variant={inputNameVariant}
      padding={inputNamePadding}
      marginY="1vw"
      fontWeight="500"
    >
      {inputName}
      <br></br>{" "}
      <Typography
        fontSize={{ xs: "0.7rem", sm: "1rem" }}
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
