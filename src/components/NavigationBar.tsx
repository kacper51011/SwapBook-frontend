import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import AutoStoriesSharpIcon from "@mui/icons-material/AutoStoriesSharp";
import { NavLink } from "react-router-dom";
import React from "react";
import { Stack } from "@mui/system";

const NavigationBar = () => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h4" sx={{ display: { xs: "none", sm: "block" } }}>
          SwapBook
        </Typography>
        <AutoStoriesSharpIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Stack direction="row" spacing={1}>
          <Button component={NavLink} to="/about" color="error">
            About us
          </Button>
          <Button component={NavLink} to="/" color="error">
            Books for Swap
          </Button>
          <Button variant="contained" color="error">
            Sign in
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
