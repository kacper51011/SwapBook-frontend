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
      elevation={3}
      sx={{
        display: "flex",
        position: "relative",
        width: 1,
      }}
    >
      <CardMedia
        component="img"
        src={
          bookPhoto ? `http://localhost:5000//images/books/${bookPhoto}` : ""
        }
        sx={{ width: { xs: "0.4", sm: "0.2" } }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "0.8",
        }}
      >
        <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>{nameOfTheBook}</Typography>
          <Typography sx={{ display: { xs: "none", sm: "inline" } }}>
            {created}
          </Typography>
        </CardContent>
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <Typography sx={{ display: { xs: "none", sm: "inline" } }}>
            {category}
          </Typography>
        </CardContent>
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography>{swapPlace} </Typography>
          <Link underline="hover" href={`/Books/${_id}`}>
            Read more...
          </Link>
        </CardContent>
      </Box>
    </Paper>
  );
};

export default BookItem;
