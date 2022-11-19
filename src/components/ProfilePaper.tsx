import { Box, Paper, Typography, Button } from "@mui/material";
import { Stack } from "@mui/system";
import Image from "mui-image";
import BookDetailsTypography from "./BookDetailsTypography";

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
        padding: "1vw",
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
