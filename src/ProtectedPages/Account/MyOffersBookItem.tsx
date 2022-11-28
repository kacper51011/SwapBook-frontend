import { Grid, IconButton } from "@mui/material";
import React from "react";
import BookItem from "../../components/BookItem";
import DeleteIcon from "@mui/icons-material/Delete";
import { IBookItem } from "../../components/BookItem";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setError, setSuccess } from "../../store/alertsSlice";

const MyOffersBookItem = ({
  bookName,
  category,
  swapPlace,
  addedIn,
  bookId,
}: IBookItem) => {
  const dispatch = useDispatch();
  const onClickHandler = async () => {
    try {
      await axios.delete(`/api/books/deleteBook/${bookId}`);
      dispatch(setSuccess("successfully deleted"));
    } catch (err) {
      dispatch(setError("something went wrong"));
    }
  };
  return (
    <>
      <Grid item xs={11}>
        <BookItem
          bookName={bookName}
          category={category}
          swapPlace={swapPlace}
          addedIn={addedIn}
          bookId={bookId}
          width={"100%"}
        />
      </Grid>
      <Grid item xs={1}>
        <IconButton onClick={onClickHandler}>
          <DeleteIcon />
        </IconButton>
      </Grid>
    </>
  );
};

export default MyOffersBookItem;
