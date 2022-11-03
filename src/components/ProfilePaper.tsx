import { Box, Paper, Typography } from "@mui/material";
import { Stack, width } from "@mui/system";
import Image from "mui-image";
import React from "react";

interface IprofilePaper {
  image?: string;
  nickname?: string;
  email?: string;
}

const ProfilePaper = ({ image, nickname, email }: IprofilePaper) => {
  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        width: { xs: "0.7", sm: "0.25" },
        paddingX: "2vw",
      }}
    >
      <Box display={"flex"} alignItems="center" flexDirection={"column"}>
        <Image height={"20vw"} width="90%" src={image || ""}></Image>
      </Box>

      <Stack direction={"column"} alignItems={"left"}>
        <Typography paddingBottom={"1vw"}>Email: {email || ""}</Typography>
        <Typography paddingBottom={"1vw"}>
          Nickname: {nickname || ""}
        </Typography>
      </Stack>
    </Paper>
  );
};

export default ProfilePaper;
