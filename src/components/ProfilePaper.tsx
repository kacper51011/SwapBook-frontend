import { Box, Paper, Typography, Avatar } from "@mui/material";
import { Stack } from "@mui/system";
import Image from "mui-image";
import BookDetailsTypography from "./BookDetailsTypography";
import { useAppSelector } from "../hooks/useAppSelector";
import { deepOrange } from "@mui/material/colors";

// component used in Account/Profile Page

interface IprofilePaper {
  photo?: string;
  nickname?: string;
  email?: string;
  swapsNumber?: number;
  contact?: boolean;
  xsWidth: string;
  smWidth: string;
  offerCreatedBy?: boolean;
  avatarMargin: string;
}

const ProfilePaper = ({
  photo,
  nickname,
  email,
  swapsNumber,
  xsWidth,
  smWidth,
  offerCreatedBy,
  avatarMargin,
}: IprofilePaper) => {
  const auth = useAppSelector((state) => state.auth?.user);
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
          <Typography
            fontWeight="600"
            variant="h5"
            component="h5"
            marginBottom="2vw"
          >
            Offer creator
          </Typography>
        )}
        {photo && (
          <Image
            style={{ borderRadius: "50%" }}
            height={"calc(15vw + 10px)"}
            width={"calc(15vw + 10px)"}
            src={`http://localhost:5000//images/users/${photo}`}
          />
        )}
        {!photo && auth && (
          <Avatar
            src=""
            style={{ objectFit: "cover" }}
            alt="avatar"
            sx={{
              bgcolor: deepOrange[500],
              height: "calc(15vw + 10px)",
              width: "calc(15vw + 10px)",
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
          userInput={swapsNumber}
          inputNameVariant="h6"
        />
      </Stack>
    </Paper>
  );
};

export default ProfilePaper;
