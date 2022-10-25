import { Container, Stack, Paper, Pagination } from "@mui/material";
import BookItem from "../components/BookItem";

const BooksForSwapPage = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={1}
        sx={{
          marginTop: "20px",
          marginBottom: "20px",
          paddingTop: "20px",
          paddingBottom: "20px",
          backgroundColor: "#F5F5F5",
          width: 1,
        }}
      >
        <Container>
          <Stack spacing={2}>
            {/* here will also be searchbar */}
            <BookItem />
            <BookItem />
            <BookItem />
            <BookItem />
            <BookItem />
          </Stack>
        </Container>
      </Paper>
      <Pagination count={10} color="primary" variant="outlined"></Pagination>
    </Container>
  );
};

export default BooksForSwapPage;
