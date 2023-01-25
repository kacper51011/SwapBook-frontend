import {
  Stack,
  TextField,
  Typography,
  MenuItem,
  Button,
  Grid,
} from "@mui/material";
import Box from "@mui/material/Box";
import { TextFieldProps } from "@mui/material/TextField";
import { useFormik, FormikProps } from "formik";
import { useState, useEffect } from "react";
import categories from "../../data/categories";
import {
  offerInitialValues,
  offerValidationSchema,
  IOfferInitialValues,
  CreateOfferApiCall,
} from "../../data/createSwapOfferValidation";
import useAlert from "../../hooks/useAlert";
import SwapOfferContainer from "./SwapOfferContainer";

const nameProps: TextFieldProps = {
  name: "nameOfTheBook",
  id: "nameOfTheBook",
  label: "Enter name of the book",
  variant: "outlined",
};

const categoryProps: TextFieldProps = {
  name: "category",
  id: "category",
  defaultValue: "",
  label: "category",
  variant: "outlined",
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
  const [selectedImage, setSelectedImage] = useState<null | File>(null);
  const [imageURL, setImageUrl] = useState<null | string>(null);

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

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
          sx={{ width: "80%", mb: "calc(1vw + 5px)" }}
        ></TextField>
        <Grid container width={"80%"} justifyContent="space-between">
          {/* select for the category of a book */}
          <Grid item xs={12} sm={3.8} mb="calc(1vw + 5px)">
            <TextField
              {...categoryProps}
              value={offerFormik.values.category}
              fullWidth
              error={
                offerFormik.touched.category &&
                Boolean(offerFormik.errors.category)
              }
              onBlur={offerFormik.handleBlur}
              onChange={offerFormik.handleChange}
              helperText={
                (offerFormik.touched.category && offerFormik.errors.category) ||
                " "
              }
              select
            >
              {categories.map<React.ReactNode>((category, index) => {
                return (
                  <MenuItem value={category} key={index}>
                    {category}
                  </MenuItem>
                );
              })}
            </TextField>
          </Grid>
          {/* input for author */}
          <Grid item xs={12} sm={3.8} mb="calc(1vw + 5px)">
            <TextField
              value={offerFormik.values.author}
              onChange={offerFormik.handleChange}
              onBlur={offerFormik.handleBlur}
              fullWidth
              error={
                offerFormik.touched.author && Boolean(offerFormik.errors.author)
              }
              helperText={
                (offerFormik.touched.author && offerFormik.errors.author) || " "
              }
              {...authorProps}
            ></TextField>
          </Grid>
          {/* input for Book release date (I dont want to install mui x package for one input so I decided to leave it as number input,
                  so I can anyway validate random inputs with Yup) */}
          <Grid item xs={12} sm={3.8} mb="calc(1vw + 5px)">
            <TextField
              value={offerFormik.values.releaseDate}
              onChange={offerFormik.handleChange}
              onBlur={offerFormik.handleBlur}
              fullWidth
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
            ></TextField>
          </Grid>
        </Grid>

        <Typography variant="h6" mb="5px">
          Other informations about the swap offer
        </Typography>

        <Stack direction="column" width="80%" marginBottom={"calc(1vw + 5px)"}>
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
            sx={{ mb: "calc(1vw + 5px)" }}
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
            sx={{ mb: "calc(1vw + 5px)" }}
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
          accept="image/*"
          type="file"
          name="bookPhoto"
          id="bookPhoto"
          style={{ display: "none" }}
          onChange={(e) => {
            e.target.files &&
              setSelectedImage(e.target.files && e.target.files[0]);
            e.target.files &&
              offerFormik.setFieldValue("bookPhoto", e.target.files[0]);
          }}
        />
        <label htmlFor="bookPhoto">
          <Button
            variant="contained"
            color="primary"
            component="span"
            size="small"
          >
            Add book photo
          </Button>
        </label>
        {imageURL && selectedImage && (
          <Box mt={2} textAlign="center">
            <Typography>Image preview:</Typography>
            <img src={imageURL} alt={selectedImage.name} height="100px" />
          </Box>
        )}

        <Button
          sx={{ marginTop: "5vw", fontWeight: "bold" }}
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
