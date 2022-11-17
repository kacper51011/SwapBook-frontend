import { Box, Paper, Typography, Button } from "@mui/material";
import { Stack } from "@mui/system";
import Image from "mui-image";

// component used in Account/Profile Page

interface IprofilePaper {
  image?: string;
  nickname?: string;
  email?: string;
  swapsAmount?: number;
  contact?: boolean;
  xsWidth: string;
  smWidth: string;
}

const ProfilePaper = ({
  image,
  nickname,
  email,
  swapsAmount,
  contact,
  xsWidth,
  smWidth,
}: IprofilePaper) => {
  return (
    <Paper
      elevation={5}
      sx={{
        display: "flex",
        flexDirection: "column",
        minWidth: { xs: { xsWidth }, sm: { smWidth } },
        paddingX: "2vw",
      }}
    >
      <Box display={"flex"} alignItems="center" flexDirection={"column"}>
        <Image height={"20vw"} width="90%" src={image || ""}></Image>
      </Box>

      <Stack direction={"column"} alignItems={"left"}>
        {email && (
          <Typography paddingBottom={"1vw"}>Email: {email || ""}</Typography>
        )}
        <Typography paddingBottom={"1vw"}>
          Nickname: {nickname || ""}
        </Typography>
        <Typography paddingBottom={"1vw"}>
          Number of swaps: {swapsAmount || 0}
        </Typography>
        {contact && <Button>Send a message</Button>}
      </Stack>
    </Paper>
  );
};

export default ProfilePaper;
