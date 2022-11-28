import { Box, Container, Grid, Paper } from "@mui/material";
import React from "react";

interface IBookDetailsContainer {
  children1: React.ReactNode;
  children2: React.ReactNode;
  children3: React.ReactNode;
}

const BookDetailsContainer = ({
  children1,
  children2,
  children3,
}: IBookDetailsContainer) => {
  return (
    <Container>
      <Paper>
        <Box marginTop="5%" minHeight="50vw">
          <Grid container spacing={3}>
            <Grid item xs={8}>
              {children1}
            </Grid>
            <Grid item xs={4}>
              {children2}
            </Grid>
            <Grid item xs={12} minHeight="40vw">
              {children3}
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
};

export default BookDetailsContainer;
