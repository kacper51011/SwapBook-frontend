import { useParams } from "react-router-dom";

import { Container, Grid, Box, Paper } from "@mui/material";
import ProfilePaper from "../../components/ProfilePaper";
import BookDetailsInfo from "./BookDetailsInfo";

import useBookDetails from "../../hooks/useBookDetails";

const BookDetails = () => {
  // getting the params, will be used in useEffect data fetching, where the getSingleBook route will be used
  let { bookId } = useParams();

  const [fetchedBook, fetchedCreator] = useBookDetails(bookId);

  return (
    <Container>
      <Paper>
        <Box marginTop="5%" minHeight="50vw">
          <Grid container spacing={3}>
            <Grid item xs={8}>
              {/* todo: image carousel */}
              <Paper elevation={3} sx={{ width: "1", height: "1" }}>
                Here will be image carousel
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <ProfilePaper
                xsWidth="0.2"
                smWidth="0.4"
                nickname={fetchedCreator?.nickname}
                swapsAmount={fetchedCreator?.swaps.length}
                email={fetchedCreator?.email}
                image={
                  fetchedCreator?.photo
                    ? `http://localhost:5000//images/users/${fetchedCreator.photo}`
                    : ""
                }
                offerCreatedBy
                avatarMargin="2vw"
              />
            </Grid>
            <Grid item xs={12} minHeight="40vw">
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
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
};

export default BookDetails;
