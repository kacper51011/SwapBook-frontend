import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import AutoStoriesSharpIcon from "@mui/icons-material/AutoStoriesSharp";
import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import { Stack } from "@mui/system";

const NavigationBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <AppBar position="static" sx={{ zIndex: "1000" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h4" sx={{ display: { xs: "none", sm: "block" } }}>
          SwapBook
        </Typography>
        <AutoStoriesSharpIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Stack direction="row" spacing={1}>
          <Button component={NavLink} to="/about" color="error">
            About us
          </Button>
          <Button component={NavLink} to="/books" color="error">
            Books for Swap
          </Button>

          {/* Buttons for for logged in Users */}

          {isLoggedIn && (
            <Button
              component={NavLink}
              to="/"
              color="error"
              variant="contained"
              size="small"
            >
              Create Swap Request
            </Button>
          )}
          {isLoggedIn && (
            <Button
              component={NavLink}
              to="/Account"
              variant="contained"
              color="error"
              size="small"
            >
              Account
            </Button>
          )}
          {/* Buttons for not logged users */}

          {!isLoggedIn && (
            <Button variant="contained" color="error">
              Sign in
            </Button>
          )}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
