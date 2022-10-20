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
  Button,
} from "@mui/material";
import categories from "../data/categories";

const CreateSwapOfferPage = () => {
  return (
    // name, category, swap for, description, swapPlace, author of the book, image,
    <form>
      <Container
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Paper
          elevation={5}
          sx={{
            minHeight: "80%",
            width: { xs: "100%", sm: "80%" },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h2" margin={"1%"}>
            Your swap offer
          </Typography>

          <Typography variant="h6">
            Informations about the book you offer to someone
          </Typography>

          {/* input for name of the book -> */}

          <TextField
            name="bookName"
            id="bookName-textfield"
            label="Enter name of the book"
            variant="outlined"
            sx={{ width: "80%", marginBottom: "2%" }}
          ></TextField>
          <Stack
            spacing={3}
            width={"80%"}
            direction={{ xs: "column", sm: "row" }}
          >
            {/* select for the category of a book */}

            <FormControl sx={{ width: { xs: "100%", sm: "33%" } }}>
              <InputLabel variant="standard" htmlFor="categoryOfABook">
                Category
              </InputLabel>
              <Select name="age" id="categoryOfABook">
                {categories.map<React.ReactNode>((category) => {
                  return <MenuItem value={category}>{category}</MenuItem>;
                })}
              </Select>
            </FormControl>

            {/* input for author */}

            <TextField
              name="bookAuthor"
              id="bookAuthor-textfield"
              label="Author of the book"
              variant="outlined"
              sx={{ width: { xs: "100%", sm: "33%" } }}
            ></TextField>

            {/* input for Book release date (I dont want to install mui x package for one input so I decided to leave it as number input,
                  so I can anyway validate random inputs with Yup) */}

            <TextField
              type="number"
              name="bookRelease"
              id="bookName-textfield"
              label="Book release date"
              variant="outlined"
              sx={{ width: { xs: "100%", sm: "33%" } }}
            ></TextField>
          </Stack>

          <Typography variant="h6" paddingTop={2}>
            Other informations about the swap offer
          </Typography>

          <Stack direction="column" spacing={3} width="80%" marginBottom={"5%"}>
            {/* localization for the swap */}
            <TextField
              fullWidth
              name="swapLocalization"
              id="swapLocalization-textfield"
              label="Swap localization"
              variant="outlined"
            ></TextField>
            {/* books somebody want to have */}
            <TextField
              fullWidth
              name="bookAuthor"
              id="bookExchange-textfield"
              label="Books that you are interested in for"
              variant="outlined"
            ></TextField>

            {/* description */}
            <TextField
              name="description"
              id="description-textfield"
              label="Description"
              variant="outlined"
              multiline
              minRows={3}
              maxRows={6}
            ></TextField>
          </Stack>

          <Button variant="contained" size="large">
            Create swap offer
          </Button>
        </Paper>
      </Container>
    </form>
  );
};

export default CreateSwapOfferPage;
