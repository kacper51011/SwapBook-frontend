import { useParams } from "react-router-dom";
import { useEffect } from "react";

import { Paper } from "@mui/material";
import ProfilePaper from "../../components/ProfilePaper";
import BookDetailsInfo from "./BookDetailsInfo";

import useBookDetails from "../../hooks/useBookDetails";
import BookDetailsContainer from "./BookDetailsContainer";
import Image from "mui-image";

const BookDetails = () => {
  // getting the params, will be used in useEffect data fetching, where the getSingleBook route will be used
  let { bookId } = useParams();

  const [fetchedBook, fetchedCreator, getBook] = useBookDetails(bookId);

  useEffect(() => {
    getBook();
  }, []);

  return (
    <BookDetailsContainer
      children1={
        <Paper elevation={3} sx={{ width: "1", height: "1" }}>
          <Image
            fit="cover"
            src={
              fetchedBook?.bookPhoto
                ? `http://localhost:5000//images/books/${fetchedBook.bookPhoto}`
                : ""
            }
          />
        </Paper>
      }
      children2={
        fetchedCreator && (
          <ProfilePaper
            xsWidth="0.2"
            smWidth="0.4"
            {...fetchedCreator}
            swapsNumber={fetchedCreator.swaps.length}
            offerCreatedBy
            avatarMargin="2vw"
          />
        )
      }
      children3={fetchedBook && <BookDetailsInfo {...fetchedBook} />}
    />
  );
};

export default BookDetails;
