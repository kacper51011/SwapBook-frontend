import {
  Container,
  Stack,
  Paper,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import categories from "../data/categories";

const CreateSwapOfferPage = () => {
  return (
    // name, category, swap for, description, swapPlace, author of the book, image,
    <form>
      <Container sx={{ height: "100vh" }}>
        <Paper
          sx={{
            height: "80%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <Typography variant="h2" margin={"1%"}>
            Your swap offer
          </Typography>

          {/* input for name of the book -> */}

          <TextField
            name="bookName"
            id="bookName-textfield"
            label="Enter name of the book"
            variant="outlined"
            sx={{ width: "80%", marginBottom: "5%" }}
          ></TextField>
          <Stack spacing={2} direction="row" width={"80%"}>
            {/* select for the category of a book */}

            <FormControl sx={{ width: "33%" }}>
              <InputLabel variant="standard" htmlFor="categoryOfABook">
                Category of the book
              </InputLabel>
              <Select name="age" id="categoryOfABook">
                {categories.map<React.ReactNode>((category) => {
                  return <MenuItem value={category}>{category}</MenuItem>;
                })}
              </Select>
            </FormControl>

            <TextField
              name="bookName"
              id="bookName-textfield"
              label="name of the book"
              variant="outlined"
              sx={{ width: "33%" }}
            ></TextField>
            <TextField
              name="bookName"
              id="bookName-textfield"
              label="name of the book"
              variant="outlined"
              sx={{ width: "33%" }}
            ></TextField>
          </Stack>
        </Paper>
      </Container>
    </form>
  );
};

export default CreateSwapOfferPage;
