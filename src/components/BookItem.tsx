import { CardMedia, CardContent, Typography, Paper, Link } from "@mui/material";
import { Box } from "@mui/system";

// todo: implement images

export interface IBookItem {
  img?: string;
  bookName?: string;
  category?: string;
  swapPlace?: string;
  addedIn?: string;
  bookId?: string;
  width?: string;
}

const BookItem = ({
  img,
  bookName,
  category,
  swapPlace,
  addedIn,
  bookId,
  width,
}: IBookItem) => {
  return (
    <Paper
      elevation={3}
      sx={{
        display: "flex",
        position: "relative",
        width: { width },
      }}
    >
      <CardMedia component="img" src={img} sx={{ width: "0.2" }} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "0.8",
        }}
      >
        <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>{bookName}</Typography>
          <Typography>{addedIn}</Typography>
        </CardContent>
        <CardContent sx={{ display: "flex", justifyContent: "flex-start" }}>
          <Typography>{category}</Typography>
        </CardContent>
        <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>{swapPlace} </Typography>
          <Link underline="hover" href={`/Books/${bookId}`}>
            Read more...
          </Link>
        </CardContent>
      </Box>
    </Paper>
  );
};

export default BookItem;
