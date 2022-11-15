import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  Link,
  Navigate,
  Outlet,
  redirect,
  useNavigate,
} from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import MailIcon from "@mui/icons-material/Mail";
import SettingsIcon from "@mui/icons-material/Settings";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import SendIcon from "@mui/icons-material/Send";
import LogoutIcon from "@mui/icons-material/Logout";
import axios from "axios";
import { useDispatch } from "react-redux";
import { changeAuth } from "../store/authSlice";

const Account = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = async () => {
    axios.delete("/api/users/logout").then((res) => {
      dispatch(changeAuth(""));
      localStorage.clear();
      sessionStorage.clear();
    });
    navigate("/");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        width: "100%",
        height: "90vh",
      }}
    >
      <List
        sx={{
          minWidth: { xs: "100%", sm: "15%" },
          borderRight: { xs: "none", sm: "1px black solid" },
        }}
      >
        <ListItem disablePadding>
          <ListItemButton component={Link} to="MyRequests">
            <ListItemIcon>
              <SwapHorizIcon />
            </ListItemIcon>
            <ListItemText primary="Swaps" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="SendMessage">
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary="Send a message" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="Messages">
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="Messages" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="Settings">
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="Profile">
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={logout}>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </ListItem>
      </List>
      <Outlet />
    </Box>
  );
};

export default Account;
