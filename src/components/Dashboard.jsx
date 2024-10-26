import * as React from "react";
import {
  Box,
  Avatar,
  Tooltip,
  Typography,
  Snackbar,
  IconButton,
} from "@mui/material";
import { CloseRounded } from "@mui/icons-material";
import { Link, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setActivePage } from "../redux/slices/navSlice";
import { setSnackbarOpen } from "../redux/slices/systemSlice"; // Correct slice for setSnackbarOpen
import { DEFAULT_SIDE_MENU } from "../Utils/Constants";
import Profile from "./Profile";
import Home from "./Home";
import SocialProfiles from "./SocialProfiles";
import Projects from "./Projects";
import ResumeComponent from "./Resume";
import Academics from "./Academics";
import PageNotFound from "./PageNotFound";

export default function Dashboard() {
  const dispatch = useDispatch();
  const activePage = useSelector((state) => state.navigation.ActivePage);
  const openSnackbar = useSelector((state) => state.system.snackbarOpen);
  const snackbarMessage = useSelector((state) => state.system.snackbarMessage);

  const handleAvatarClick = (title) => {
    dispatch(setActivePage({ activePage: title }));
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(setSnackbarOpen({ snackbarOpen: false, snackbarMessage: null }));
  };

  const action = (
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={handleCloseSnackbar}
    >
      <CloseRounded fontSize="small" />
    </IconButton>
  );

  return (
    <Box
      sx={{
        background:
          "linear-gradient(135deg, #1c1e2d 0%, #2a2f47 50%, #3a3f5b 100%)",
        color: "#6EACDA",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        padding: "2rem",
      }}
    >
      {/* Dynamic Header */}
      <Typography
        variant="h4"
        sx={{ marginBottom: "1.5rem", color: "#6EACDA" }}
      >
        {activePage || "Welcome!"}
      </Typography>

      {/* Avatar Grid */}
      <Box
        sx={{
          display: "flex",
          gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
          gap: 3,
          maxWidth: "600px",
          width: "100%",
          justifyContent: "center",
        }}
      >
        {DEFAULT_SIDE_MENU.map((data, index) => (
          <Link
            key={index}
            to={data.link}
            onClick={() => handleAvatarClick(data.title)}
            style={{
              textDecoration: "none",
              textAlign: "center",
              color: "#6EACDA",
            }}
          >
            <Tooltip title={data.title}>
              <Avatar
                sx={{
                  bgcolor: "#6EACDA",
                  width: 50,
                  height: 50,
                  alignItems: "center",
                  cursor: "pointer",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "scale(1.1)",
                    boxShadow: "0 4px 10px #6EACDA",
                  },
                }}
              >
                {data.icon}
              </Avatar>
            </Tooltip>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              {data.title}
            </Typography>
          </Link>
        ))}
      </Box>

      {/* Main Content */}
      <Box component="main" sx={{ gap: 0, flexGrow: 1, width: "100%" }}>
        <Routes>
          <Route path="/about-me" element={<Profile />} />
          <Route path="/home" element={<Home />} />
          <Route path="/social-profile" element={<SocialProfiles />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<ResumeComponent />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Box>

      {/* Snackbar for Notifications */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message={snackbarMessage}
        action={action}
      />
    </Box>
  );
}
