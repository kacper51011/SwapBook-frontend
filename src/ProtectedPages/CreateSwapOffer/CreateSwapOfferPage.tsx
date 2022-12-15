import {
  Stack,
  TextField,
  Typography,
  MenuItem,
  Button,
  SxProps,
} from "@mui/material";
import { TextFieldProps } from "@mui/material/TextField";
import { useFormik, FormikProps } from "formik";
import categories from "../../data/categories";
import {
  offerInitialValues,
  offerValidationSchema,
  IOfferInitialValues,
  CreateOfferApiCall,
} from "../../data/createSwapOfferValidation";
import useAlert from "../../hooks/useAlert";
import SwapOfferContainer from "./SwapOfferContainer";

const oneThirdWidth: SxProps = {
  width: { xs: "100%", sm: "33%" },
};

const nameProps: TextFieldProps = {
  name: "nameOfTheBook",
  id: "nameOfTheBook",
  label: "Enter name of the book",
  variant: "outlined",
};

const categoryProps: TextFieldProps = {
  placeholder: "category",
  name: "category",
  id: "category",
  defaultValue: "",
  label: "category",
};

const authorProps: TextFieldProps = {
  name: "author",
  id: "author",
  label: "Author of the book",
  variant: "outlined",
};

const swapPlaceProps: TextFieldProps = {
  name: "swapPlace",
  id: "swapPlace",
  label: "Swap localization",
  variant: "outlined",
};

const descriptionProps: TextFieldProps = {
  name: "description",
  id: "description",
  label: "Description",
  variant: "outlined",
  multiline: true,
  minRows: 3,
  maxRows: 6,
};

const swapForProps: TextFieldProps = {
  name: "swapFor",
  id: "swapFor",
  label: "Books that you are interested in for",
  variant: "outlined",
};

const releaseDateProps: TextFieldProps = {
  type: "number",
  name: "releaseDate",
  id: "releaseDate",
  label: "Book release date",
  variant: "outlined",
};

const CreateSwapOfferPage = () => {
  const [setAlert] = useAlert();
  // initializing Formik, data can be found in "../data/createSwapOfferValidation"
  const offerFormik: FormikProps<IOfferInitialValues> = useFormik({
    initialValues: { ...offerInitialValues },
    validationSchema: offerValidationSchema,
    onSubmit: async (values) => {
      CreateOfferApiCall(values)
        .then((res) => setAlert("success", "Offer created"))
        .catch((err) =>
          setAlert("error", "something went wrong, try again later!")
        );
    },
  });

  return (
    // name, category, swap for, description, swapPlace, author of the book, image,
    <form style={{ textAlign: "center" }} onSubmit={offerFormik.handleSubmit}>
      <SwapOfferContainer>
        {/* input for name of the book -> */}

        <TextField
          {...nameProps}
          value={offerFormik.values.nameOfTheBook}
          onChange={offerFormik.handleChange}
          error={
            offerFormik.touched.nameOfTheBook &&
            Boolean(offerFormik.errors.nameOfTheBook)
          }
          helperText={
            (offerFormik.touched.nameOfTheBook &&
              offerFormik.errors.nameOfTheBook) ||
            " "
          }
          onBlur={offerFormik.handleBlur}
          sx={{ width: "80%", marginBottom: "3%" }}
        ></TextField>
        <Stack
          spacing={{ sx: 0, sm: 3 }}
          width={"80%"}
          direction={{ xs: "column", sm: "row" }}
          mb="3%"
        >
          {/* select for the category of a book */}
          <TextField
            {...categoryProps}
            value={offerFormik.values.category}
            error={
              offerFormik.touched.category &&
              Boolean(offerFormik.errors.category)
            }
            onBlur={offerFormik.handleBlur}
            onChange={offerFormik.handleChange}
            select
            sx={{ ...oneThirdWidth, mb: "3%" }}
          >
            {categories.map<React.ReactNode>((category, index) => {
              return (
                <MenuItem value={category} key={index}>
                  {category}
                </MenuItem>
              );
            })}
          </TextField>

          {/* input for author */}

          <TextField
            value={offerFormik.values.author}
            onChange={offerFormik.handleChange}
            onBlur={offerFormik.handleBlur}
            error={
              offerFormik.touched.author && Boolean(offerFormik.errors.author)
            }
            helperText={
              (offerFormik.touched.author && offerFormik.errors.author) || " "
            }
            {...authorProps}
            sx={{ ...oneThirdWidth, mb: "3%" }}
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
              (offerFormik.touched.releaseDate &&
                offerFormik.errors.releaseDate) ||
              " "
            }
            {...releaseDateProps}
            sx={{ ...oneThirdWidth, mb: "3%" }}
          ></TextField>
        </Stack>

        <Typography variant="h6" paddingTop={2}>
          Other informations about the swap offer
        </Typography>

        <Stack direction="column" width="80%" marginBottom={"5%"}>
          {/* localization for the swap */}
          <TextField
            fullWidth
            value={offerFormik.values.swapPlace}
            onChange={offerFormik.handleChange}
            onBlur={offerFormik.handleBlur}
            error={
              offerFormik.touched.swapPlace &&
              Boolean(offerFormik.errors.swapPlace)
            }
            helperText={
              (offerFormik.touched.swapPlace && offerFormik.errors.swapPlace) ||
              " "
            }
            {...swapPlaceProps}
            sx={{ mb: "3%" }}
          ></TextField>
          {/* books somebody want to have */}
          <TextField
            fullWidth
            value={offerFormik.values.swapFor}
            onChange={offerFormik.handleChange}
            onBlur={offerFormik.handleBlur}
            error={
              offerFormik.touched.swapFor && Boolean(offerFormik.errors.swapFor)
            }
            helperText={
              (offerFormik.touched.swapFor && offerFormik.errors.swapFor) || " "
            }
            {...swapForProps}
            sx={{ mb: "3%" }}
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
              (offerFormik.touched.description &&
                offerFormik.errors.description) ||
              " "
            }
            {...descriptionProps}
          ></TextField>
        </Stack>
        <input
          type="file"
          name="bookPhoto"
          id="bookPhoto"
          accept="image/*"
          onChange={(event) =>
            event.target.files &&
            offerFormik.setFieldValue("bookPhoto", event.target.files[0])
          }
        />

        <Button
          sx={{ marginTop: "5vw" }}
          type="submit"
          variant="contained"
          size="large"
        >
          Create swap offer
        </Button>
      </SwapOfferContainer>
    </form>
  );
};

export default CreateSwapOfferPage;
