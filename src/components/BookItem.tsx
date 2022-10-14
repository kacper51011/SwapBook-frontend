import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const BookItem = () => {
  return (
    <Card color="primary.main" sx={{ display: "flex" }}>
      <CardMedia component="img" sx={{ width: "0.2" }} />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ display: "flex" }}>
          <Typography></Typography>
        </CardContent>
        <CardContent sx={{ display: "flex" }}>
          <Typography></Typography>
        </CardContent>
        <CardContent sx={{ display: "flex" }}>
          <Typography></Typography>
          <Typography></Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default BookItem;
