import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import BookDetailsTypography from "./BookDetailsTypography";

interface IInfoColumn {
  columnName: string;
  // inputs = array of objects, object contain props for a BookDetailsTypography
  inputs: { inputName: string; userInput?: string | number }[];
}

const InfoWindowColumn = ({ columnName, inputs }: IInfoColumn) => {
  return (
    <Box width="0.5" padding="10px" display="flex" flexDirection="column">
      <Typography width="100%" textAlign="center" variant="h4">
        {columnName}
      </Typography>
      <Stack direction="column" flexGrow="1" justifyContent="space-evenly">
        {/* with that method of props someone can pass as many BookDetailsTypographies he wants */}
        {inputs.map((input, index) => {
          return (
            <BookDetailsTypography
              key={index}
              inputName={input.inputName}
              userInput={input.userInput}
            />
          );
        })}
      </Stack>
    </Box>
  );
};

export default InfoWindowColumn;
