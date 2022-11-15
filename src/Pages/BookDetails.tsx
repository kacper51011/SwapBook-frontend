import React from "react";
import { useParams } from "react-router-dom";

const BookDetails = () => {
  const { bookId } = useParams();

  return <div>BookDetails</div>;
};

export default BookDetails;
