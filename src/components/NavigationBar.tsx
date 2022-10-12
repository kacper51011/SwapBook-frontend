import { AppBar, Toolbar, Typography, TextField, Button } from "@mui/material";
import AutoStoriesSharpIcon from "@mui/icons-material/AutoStoriesSharp";
import React from "react";
import { Stack } from "@mui/system";

const NavigationBar = () => {
  return (
    <AppBar>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography sx={{ display: { xs: "none", sm: "block" } }}>
          SwapBook
        </Typography>
        <AutoStoriesSharpIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Stack direction="row" spacing={1}>
          <Button variant="contained" color="error">
            Sign in
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
