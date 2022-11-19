import { Box, Paper, Typography, Button, Icon, Avatar } from "@mui/material";
import { Stack } from "@mui/system";
import Image from "mui-image";
import BookDetailsTypography from "./BookDetailsTypography";
import { useAppSelector } from "../hooks/useAppSelector";
import { deepOrange } from "@mui/material/colors";

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
  avatarMargin: string;
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
  avatarMargin,
}: IprofilePaper) => {
  const auth = useAppSelector((state) => state.auth.user);
  return (
    <Paper
      elevation={5}
      sx={{
        display: "flex",
        flexDirection: "column",
        minWidth: { xs: { xsWidth }, sm: { smWidth } },
        minHeight: "1",
        padding: "1vw",
      }}
    >
      <Box display={"flex"} alignItems="center" flexDirection={"column"}>
        {offerCreatedBy && (
          <Typography variant="h5" component="h5" marginBottom="2vw">
            Offer creator
          </Typography>
        )}
        {image && <Image height={"20vw"} width="90%" src={image} />}
        {!image && auth && (
          <Avatar
            alt="avatar"
            sx={{
              bgcolor: deepOrange[500],
              height: "10vw",
              width: "10vw",
              fontSize: "5vw",
              padding: "20px",
              margin: { avatarMargin },
            }}
          >
            {auth.nickname.charAt(0)}
          </Avatar>
        )}
      </Box>

      <Stack
        direction={"column"}
        alignItems={"left"}
        justifyContent="space-around"
      >
        {email && (
          <BookDetailsTypography
            inputName="Email"
            userInput={email}
            inputNameVariant="h6"
          />
        )}
        <BookDetailsTypography
          inputName="Nickname"
          userInput={nickname}
          inputNameVariant="h6"
        />
        <BookDetailsTypography
          inputName="Number of swaps"
          userInput={swapsAmount}
          inputNameVariant="h6"
        />
      </Stack>
      {contact && (
        <Box
          display={"flex"}
          alignItems="center"
          flexDirection={"column"}
          marginBottom="1vw"
          marginTop="1vw"
        >
          <Button
            variant="contained"
            sx={{ width: "0.5", marginBottom: "0.2" }}
          >
            Send a message
          </Button>
        </Box>
      )}
    </Paper>
  );
};

export default ProfilePaper;
