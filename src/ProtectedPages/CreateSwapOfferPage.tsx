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
import { useFormik, FormikProps } from "formik";
import categories from "../data/categories";
import {
  offerInitialValues,
  offerValidationSchema,
  IOfferInitialValues,
} from "../data/createSwapOfferValidation";

const CreateSwapOfferPage = () => {
  const offerFormik: FormikProps<IOfferInitialValues> = useFormik({
    initialValues: { ...offerInitialValues },
    validationSchema: offerValidationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    // name, category, swap for, description, swapPlace, author of the book, image,
    <form onSubmit={offerFormik.handleSubmit}>
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
            marginTop: "5vw",
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
            value={offerFormik.values.nameOfTheBook}
            onChange={offerFormik.handleChange}
            error={
              offerFormik.touched.nameOfTheBook &&
              Boolean(offerFormik.errors.nameOfTheBook)
            }
            helperText={
              offerFormik.touched.nameOfTheBook &&
              offerFormik.errors.nameOfTheBook
            }
            onBlur={offerFormik.handleBlur}
            name="nameOfTheBook"
            id="nameOfTheBook"
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
              <Select
                name="category"
                id="category"
                value={offerFormik.values.category}
                error={
                  offerFormik.touched.category &&
                  Boolean(offerFormik.errors.category)
                }
                onBlur={offerFormik.handleBlur}
                onChange={offerFormik.handleChange}
              >
                {categories.map<React.ReactNode>((category, index) => {
                  return (
                    <MenuItem key={index} value={category}>
                      {category}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>

            {/* input for author */}

            <TextField
              value={offerFormik.values.author}
              onChange={offerFormik.handleChange}
              onBlur={offerFormik.handleBlur}
              error={
                offerFormik.touched.author && Boolean(offerFormik.errors.author)
              }
              helperText={
                offerFormik.touched.author && offerFormik.errors.author
              }
              name="author"
              id="author"
              label="Author of the book"
              variant="outlined"
              sx={{ width: { xs: "100%", sm: "33%" } }}
            ></TextField>

            {/* input for Book release date (I dont want to install mui x package for one input so I decided to leave it as number input,
                  so I can anyway validate random inputs with Yup) */}

            <TextField
              value={offerFormik.values.releaseDate}
              onChange={offerFormik.handleChange}
              onBlur={offerFormik.handleBlur}
              error={
                offerFormik.touched.releaseDate &&
                Boolean(offerFormik.errors.releaseDate)
              }
              helperText={
                offerFormik.touched.releaseDate &&
                offerFormik.errors.releaseDate
              }
              type="number"
              name="releaseDate"
              id="releaseDate"
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
              value={offerFormik.values.swapLocalization}
              onChange={offerFormik.handleChange}
              onBlur={offerFormik.handleBlur}
              error={
                offerFormik.touched.swapLocalization &&
                Boolean(offerFormik.errors.swapLocalization)
              }
              helperText={
                offerFormik.touched.swapLocalization &&
                offerFormik.errors.swapLocalization
              }
              name="swapLocalization"
              id="swapLocalization"
              label="Swap localization"
              variant="outlined"
            ></TextField>
            {/* books somebody want to have */}
            <TextField
              fullWidth
              value={offerFormik.values.booksInterestedFor}
              onChange={offerFormik.handleChange}
              onBlur={offerFormik.handleBlur}
              error={
                offerFormik.touched.booksInterestedFor &&
                Boolean(offerFormik.errors.booksInterestedFor)
              }
              helperText={
                offerFormik.touched.booksInterestedFor &&
                offerFormik.errors.booksInterestedFor
              }
              name="booksInterestedFor"
              id="booksInterestedFor"
              label="Books that you are interested in for"
              variant="outlined"
            ></TextField>

            {/* description */}
            <TextField
              value={offerFormik.values.description}
              onChange={offerFormik.handleChange}
              onBlur={offerFormik.handleBlur}
              error={
                offerFormik.touched.description &&
                Boolean(offerFormik.errors.description)
              }
              helperText={
                offerFormik.touched.description &&
                offerFormik.errors.description
              }
              name="description"
              id="description"
              label="Description"
              variant="outlined"
              multiline
              minRows={3}
              maxRows={6}
            ></TextField>
          </Stack>

          <Button type="submit" variant="contained" size="large">
            Create swap offer
          </Button>
        </Paper>
      </Container>
    </form>
  );
};

export default CreateSwapOfferPage;