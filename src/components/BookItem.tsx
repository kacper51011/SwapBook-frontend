import { CardMedia, CardContent, Typography, Paper, Link } from "@mui/material";
import { Box } from "@mui/system";

// todo: implement images

export interface IBookItem {
  bookPhoto?: string;
  nameOfTheBook?: string;
  category?: string;
  swapPlace?: string;
  created?: string;
  _id?: string;
  width?: string;
}

const BookItem = ({
  bookPhoto,
  nameOfTheBook,
  category,
  swapPlace,
  created,
  _id,
}: IBookItem) => {
  return (
    <Paper
      elevation={1}
      sx={{
        display: "flex",
        width: 1,
        height: { xs: "calc(5vh + 50px)", sm: "12vw" },
        borderRadius: "16px",
      }}
    >
      <CardMedia
        component="img"
        src={
          bookPhoto ? `http://localhost:5000//images/books/${bookPhoto}` : ""
        }
        sx={{
          width: "0.2",
          height: "1",
          objectFit: "contain",
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "0.8",
          maxHeight: "1",
        }}
      >
        <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography fontSize={{ xs: "10px", sm: "15px" }}>
            {nameOfTheBook}
          </Typography>
          <Typography
            fontSize={{ xs: "10px", sm: "15px" }}
            sx={{ display: { xs: "none", sm: "inline" } }}
          >
            {created}
          </Typography>
        </CardContent>
        <CardContent
          sx={{
            display: { xs: "none", sm: "flex" },
            justifyContent: "flex-start",
          }}
        >
          <Typography
            fontSize={{ xs: "10px", sm: "15px" }}
            sx={{ display: { xs: "none", sm: "inline" } }}
          >
            {category}
          </Typography>
        </CardContent>
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography fontSize={{ xs: "10px", sm: "15px" }}>
            {swapPlace}{" "}
          </Typography>
          <Link
            fontSize={{ xs: "10px", sm: "15px" }}
            variant="body1"
            underline="hover"
            href={`/Books/${_id}`}
          >
            Read more...
          </Link>
        </CardContent>
      </Box>
    </Paper>
  );
};

export default BookItem;
