import { Box, Paper, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import Image from "mui-image";

interface IprofilePaper {
  image?: string;
  nickname?: string;
  email?: string;
  swapsAmount?: number;
}

const ProfilePaper = ({
  image,
  nickname,
  email,
  swapsAmount,
}: IprofilePaper) => {
  return (
    <Paper
      elevation={5}
      sx={{
        display: "flex",
        flexDirection: "column",
        minWidth: { xs: "0.7", sm: "0.25" },
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
        <Typography paddingBottom={"1vw"}>
          Amount of swaps: {swapsAmount || 0}
        </Typography>
      </Stack>
    </Paper>
  );
};

export default ProfilePaper;
