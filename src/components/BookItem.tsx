import { CardMedia, CardContent, Typography, Paper } from "@mui/material";
import { Box } from "@mui/system";

interface IBookItem {
  img: string;
  bookName: string;
  category: string;
  swapPlace: string;
  addedIn: string;
}

const BookItem = ({
  img,
  bookName,
  category,
  swapPlace,
  addedIn,
}: IBookItem) => {
  return (
    <Paper
      elevation={3}
      sx={{
        display: "flex",
        cursor: "pointer",
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
        <CardContent sx={{ display: "flex", justifyContent: "flex-start" }}>
          <Typography>{bookName}</Typography>
        </CardContent>
        <CardContent sx={{ display: "flex", justifyContent: "flex-start" }}>
          <Typography>{category}</Typography>
        </CardContent>
        <CardContent sx={{ display: "flex", justifyContent: "space-around" }}>
          <Typography>{swapPlace} </Typography>
          <Typography>{addedIn}</Typography>
        </CardContent>
      </Box>
    </Paper>
  );
};

export default BookItem;
