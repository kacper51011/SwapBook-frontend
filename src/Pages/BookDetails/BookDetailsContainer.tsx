import { Box, Container, Grid } from "@mui/material";

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
    <Container sx={{ minHeight: "40vw" }}>
      <Box marginTop="5%">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={8}>
            {children1}
          </Grid>
          <Grid item xs={12} sm={4}>
            {children2}
          </Grid>
          <Grid item xs={12}>
            {children3}
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default BookDetailsContainer;
