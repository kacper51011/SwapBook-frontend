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
  width,
}: IBookItem) => {
  return (
    <Paper
      elevation={1}
      sx={{
        display: "flex",
        position: "relative",
        width: 1,
        minHeight: { xs: "20vw", sm: "10vw" },
      }}
    >
      <CardMedia
        component="img"
        src={
          bookPhoto ? `http://localhost:5000//images/books/${bookPhoto}` : ""
        }
        sx={{
          width: { xs: "0.4", sm: "0.2" },
          objectFit: "cover",
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "0.8",
          height: "1",
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
            display: "flex",
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
