import * as yup from "yup";
import axios from "axios";

interface IOfferInitialValues {
  nameOfTheBook: string;
  category: string;
  author: string;
  releaseDate: number;
  swapPlace: string;
  booksInterestedFor: string;
  description: string;
}

const offerInitialValues: IOfferInitialValues = {
  nameOfTheBook: "",
  category: "",
  author: "",
  releaseDate: 2022,
  swapPlace: "",
  booksInterestedFor: "",
  description: "",
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
  swapLocalization: yup.string().required(requiredError),
  booksInterestedFor: yup
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

// nameOfTheBook: string;
// category: string;
// author: string;
// releaseDate: number;
// swapLocalization: string;
// booksInterestedFor: string;
// description: string;

const CreateOfferApiCall = async (values: IOfferInitialValues) => {
  const {
    nameOfTheBook,
    category,
    author,
    releaseDate,
    swapPlace,
    booksInterestedFor,
    description,
  } = values;

  const { data } = await axios.post("/api/users/login", {
    nameOfTheBook,
    category,
    author,
    releaseDate,
    swapPlace,
    booksInterestedFor,
    description,
  });
  return data;
};

export {
  offerInitialValues,
  offerValidationSchema,
  type IOfferInitialValues,
  CreateOfferApiCall,
};
