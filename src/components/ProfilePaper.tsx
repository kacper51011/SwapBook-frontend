import { Box, Paper, Typography, Button } from "@mui/material";
import { Stack } from "@mui/system";
import Image from "mui-image";

// component used in Account/Profile Page

interface IprofilePaper {
  image?: string;
  nickname?: string;
  email?: string;
  swapsAmount?: number;
  // change contact from boolean to string or link etc
  contact?: boolean;
  xsWidth: string;
  smWidth: string;
  offerCreatedBy?: boolean;
}

const ProfilePaper = ({
  image,
  nickname,
  email,
  swapsAmount,
  contact,
  xsWidth,
  smWidth,
  offerCreatedBy,
}: IprofilePaper) => {
  return (
    <Paper
      elevation={5}
      sx={{
        display: "flex",
        flexDirection: "column",
        minWidth: { xs: { xsWidth }, sm: { smWidth } },
        padding: "2vw",
      }}
    >
      <Box display={"flex"} alignItems="center" flexDirection={"column"}>
        {offerCreatedBy && (
          <Typography variant="h5" component="h5">
            Offer creator
          </Typography>
        )}
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
      </Stack>
      {contact && (
        <Box
          display={"flex"}
          alignItems="center"
          flexDirection={"column"}
          marginBottom="1vw"
        >
          <Button sx={{ width: "0.5", marginBottom: "0.2" }}>
            Send a message
          </Button>
        </Box>
      )}
    </Paper>
  );
};

export default ProfilePaper;
