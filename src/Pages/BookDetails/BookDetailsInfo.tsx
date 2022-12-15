import InfoWindowColumn from "../../components/InfoWindowColumn";
import InfoWindowContainer from "../../components/InfoWindowContainer";
import { ISingleBook } from "../../hooks/useBookPage";

const BookDetailsInfo = ({
  nameOfTheBook,
  category,
  author,
  releaseDate,
  swapPlace,
  swapFor,
  description,
  created,
}: ISingleBook) => {
  return (
    <InfoWindowContainer
      firstInfo={
        <InfoWindowColumn
          columnName="About book"
          inputs={[
            { inputName: "Book", userInput: nameOfTheBook },
            { inputName: "Author", userInput: author },
            { inputName: "Category", userInput: category },
            { inputName: "Book released", userInput: releaseDate },
          ]}
        />
      }
      secondInfo={
        <InfoWindowColumn
          columnName="About offer"
          inputs={[
            { inputName: "Created at", userInput: created },
            { inputName: "Place of exchange", userInput: swapPlace },
            { inputName: "Books for exchange", userInput: swapFor },
            { inputName: "description", userInput: description },
          ]}
        />
      }
    />
  );
};

export default BookDetailsInfo;
