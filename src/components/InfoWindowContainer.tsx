import React from "react";
import { Paper, Box, Divider } from "@mui/material";

interface IInfoWindow {
  firstInfo: React.ReactNode;
  secondInfo?: React.ReactNode;
}

const InfoWindowContainer = ({ firstInfo, secondInfo }: IInfoWindow) => {
  return (
    <Paper
      elevation={5}
      sx={{ width: "1", minHeight: "50vh", borderRadius: "16px", mb: 5 }}
    >
      {/* Divide will display only if both props are passed to InfoWindow(secondInfo is optional) */}
      <Box
        width="100%"
        height="100%"
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
      >
        {firstInfo}
        {firstInfo && secondInfo && <Divider orientation="vertical" />}
        {secondInfo}
      </Box>
    </Paper>
  );
};

export default InfoWindowContainer;
