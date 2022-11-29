import * as yup from "yup";
import axios from "axios";

// I decided to leave create swap offer / login / register logic in data and their validation files, cause it contains a bit more than only states or functions

interface IOfferInitialValues {
  nameOfTheBook: string;
  category: string;
  author: string;
  releaseDate: number;
  swapPlace: string;
  swapFor: string;
  description: string;
  bookPhoto: File | "";
}

const offerInitialValues: IOfferInitialValues = {
  nameOfTheBook: "",
  category: "",
  author: "",
  releaseDate: 2022,
  swapPlace: "",
  swapFor: "",
  description: "",
  bookPhoto: "",
};

// functions and consts to make validation schema more simple

const requiredError: string = "This field is required";
const dateError: string = "Write correct date of release";
const minError = (characters: number) => {
  return `this field require minimum ${characters} characters`;
};
const maxError = (characters: number) => {
  return `this field require maximum ${characters} characters`;
};
// todo : add image

const offerValidationSchema = yup.object({
  nameOfTheBook: yup
    .string()
    .required(requiredError)
    .min(5, minError(5))
    .max(50, maxError(50)),
  category: yup.string().required(requiredError),
  author: yup
    .string()
    .required(requiredError)
    .min(4, minError(4))
    .max(30, maxError(30)),
  releaseDate: yup
    .number()
    .required(requiredError)
    .moreThan(1900, dateError)
    .lessThan(2023, dateError),
  swapPlace: yup.string().required(requiredError),
  swapFor: yup
    .string()
    .required(requiredError)
    .min(5, minError(5))
    .max(100, maxError(100)),
  description: yup
    .string()
    .required(requiredError)
    .min(10, minError(10))
    .max(200, maxError(200)),
});

const CreateOfferApiCall = async (values: IOfferInitialValues) => {
  const {
    nameOfTheBook,
    category,
    author,
    releaseDate,
    swapPlace,
    swapFor,
    description,
    bookPhoto,
  } = values;
  const offerData = new FormData();
  // had to do it manually cause of typescript problem
  offerData.append("nameOfTheBook", nameOfTheBook);
  offerData.append("category", category);
  offerData.append("author", author);
  offerData.append("releaseDate", releaseDate.toString());
  offerData.append("swapPlace", swapPlace);
  offerData.append("swapFor", swapFor);
  offerData.append("description", description);
  offerData.append("bookPhoto", bookPhoto);

  const { data } = await axios.post("/api/books/create", offerData);
  return data;
};

export {
  offerInitialValues,
  offerValidationSchema,
  type IOfferInitialValues,
  CreateOfferApiCall,
};
