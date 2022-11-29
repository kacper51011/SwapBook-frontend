import { useParams } from "react-router-dom";
import { useEffect } from "react";

import { Paper } from "@mui/material";
import ProfilePaper from "../../components/ProfilePaper";
import BookDetailsInfo from "./BookDetailsInfo";

import useBookDetails from "../../hooks/useBookDetails";
import BookDetailsContainer from "./BookDetailsContainer";

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
          Here will be image carousel
        </Paper>
      }
      children2={
        <ProfilePaper
          xsWidth="0.2"
          smWidth="0.4"
          nickname={fetchedCreator?.nickname}
          swapsNumber={fetchedCreator?.swaps.length}
          email={fetchedCreator?.email}
          image={
            fetchedCreator?.photo
              ? `http://localhost:5000//images/users/${fetchedCreator.photo}`
              : ""
          }
          offerCreatedBy
          avatarMargin="2vw"
        />
      }
      children3={
        <BookDetailsInfo
          nameOfTheBook={fetchedBook?.nameOfTheBook}
          category={fetchedBook?.category}
          author={fetchedBook?.author}
          releaseDate={fetchedBook?.releaseDate}
          swapPlace={fetchedBook?.swapPlace}
          swapFor={fetchedBook?.swapFor}
          description={fetchedBook?.description}
          created={fetchedBook?.created}
          _id={fetchedBook?._id}
        />
      }
    />
  );
};

export default BookDetails;
