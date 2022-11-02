import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Avatar,
  IconButton,
} from "@mui/material";
import AutoStoriesSharpIcon from "@mui/icons-material/AutoStoriesSharp";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import { Stack } from "@mui/system";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <AppBar position="static" sx={{ zIndex: "1000" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* name of the site or icon (depends on width)  */}
        <Typography variant="h4" sx={{ display: { xs: "none", sm: "block" } }}>
          SwapBook
        </Typography>
        <AutoStoriesSharpIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Stack direction="row" spacing={1} alignItems="center">
          {/* Buttons for for logged in Users */}

          {/* Button or Icon for creating offer (depends on width and being logged in) */}
          {isLoggedIn && (
            <Button
              component={NavLink}
              to="/CreateSwapOffer"
              color="error"
              variant="contained"
              size="large"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              Create swap offer
            </Button>
          )}
          {isLoggedIn && (
            <IconButton
              component={Link}
              to="/Account"
              sx={{ display: { xs: "block", sm: "none" } }}
            >
              <NoteAddIcon sx={{ color: "white" }} />
            </IconButton>
          )}

          {/* button or icon for the swap offers page (depends on width) */}

          <Button
            component={NavLink}
            to="/books"
            color="error"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Books for Swap
          </Button>

          <IconButton
            component={Link}
            to="/Account"
            sx={{ display: { xs: "block", sm: "none" } }}
          >
            <CompareArrowsIcon sx={{ color: "white" }} />
          </IconButton>

          {isLoggedIn && (
            <Button component={NavLink} to="/Account/Messages" color="error">
              Messages
            </Button>
          )}
          {isLoggedIn && (
            <IconButton component={Link} to="/Account">
              <Avatar src="" />
            </IconButton>
          )}

          {!isLoggedIn && (
            <Button component={Link} to="/" variant="contained" color="error">
              Sign in
            </Button>
          )}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
