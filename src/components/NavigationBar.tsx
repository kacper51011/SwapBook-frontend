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
import EmailIcon from "@mui/icons-material/Email";
import { NavLink } from "react-router-dom";
import { Stack } from "@mui/system";
import { Link } from "react-router-dom";
import { useAppSelector } from "../hooks/useAppSelector";
import { deepOrange, red } from "@mui/material/colors";

// component used in every page

const NavigationBar = () => {
  const auth = useAppSelector((state) => state.auth.user);
  return (
    <AppBar position="static" sx={{ zIndex: "1000" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* name of the site or icon (depends on width)  */}
        <Typography variant="h4" sx={{ display: { xs: "none", sm: "block" } }}>
          SwapBook
        </Typography>
        <AutoStoriesSharpIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Stack direction="row" spacing={1} alignItems="center">
          {/* Button or Icon for creating offer (depends on width and being logged in) */}
          {auth && (
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
          {auth && (
            <IconButton
              component={Link}
              to="/CreateSwapOffer"
              sx={{ display: { xs: "block", sm: "none" } }}
            >
              <NoteAddIcon sx={{ color: "white" }} />
            </IconButton>
          )}

          {/* button or icon for the swap offers page (depends on width) */}

          <Button
            component={NavLink}
            to="/books"
            sx={{ display: { xs: "none", sm: "block" }, color: red[50] }}
          >
            Books for Swap
          </Button>

          <IconButton
            component={Link}
            to="/books"
            sx={{ display: { xs: "block", sm: "none" } }}
          >
            <CompareArrowsIcon sx={{ color: "white" }} />
          </IconButton>
          {/* button or icon for messages page (depends on width and being logged) */}

          {auth && (
            <Button
              component={NavLink}
              to="/Account/Messages"
              color="error"
              sx={{ display: { xs: "none", sm: "block" }, color: red[50] }}
            >
              Messages
            </Button>
          )}
          <IconButton
            component={Link}
            to="/Account/Messages"
            sx={{ display: { xs: "block", sm: "none" } }}
          >
            <EmailIcon sx={{ color: "white" }} />
          </IconButton>

          {/* icon for profile page (depends on being logged) */}

          {auth && (
            <IconButton component={Link} to="/Account">
              <Avatar alt="avatar" sx={{ bgcolor: deepOrange[500] }}>
                {auth.nickname.charAt(0)}
              </Avatar>
            </IconButton>
          )}

          {/* button for home page (depends on not being logged) */}

          {!auth && (
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
