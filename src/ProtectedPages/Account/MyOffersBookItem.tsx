import { Grid, IconButton } from "@mui/material";
import BookItem from "../../components/BookItem";
import DeleteIcon from "@mui/icons-material/Delete";
import { IBookItem } from "../../components/BookItem";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setError, setSuccess } from "../../store/alertsSlice";

const MyOffersBookItem = (data: IBookItem) => {
  const { _id, ...bookItemProps } = data;
  const dispatch = useDispatch();
  const onClickHandler = async () => {
    try {
      await axios.delete(`/api/books/deleteBook/${_id}`);
      dispatch(setSuccess("successfully deleted"));
    } catch (err) {
      console.log(err);
      dispatch(setError("something went wrong"));
    }
  };
  return (
    <>
      <Grid item xs={11}>
        <BookItem {...bookItemProps} width={"100%"} />
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
