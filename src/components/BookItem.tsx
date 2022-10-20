import { CardMedia, CardContent, Typography, Paper } from "@mui/material";
import { Box } from "@mui/system";

const BookItem = () => {
  return (
    <Paper
      elevation={5}
      sx={{
        display: "flex",
        cursor: "pointer",
      }}
    >
      <CardMedia component="img" sx={{ width: "0.2" }} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "0.8",
        }}
      >
        <CardContent sx={{ display: "flex", justifyContent: "flex-start" }}>
          <Typography>Name of the book</Typography>
        </CardContent>
        <CardContent sx={{ display: "flex", justifyContent: "flex-start" }}>
          <Typography>Categories</Typography>
        </CardContent>
        <CardContent sx={{ display: "flex", justifyContent: "space-around" }}>
          <Typography>sth else </Typography>
          <Typography>sth else</Typography>
        </CardContent>
      </Box>
    </Paper>
  );
};

export default BookItem;
