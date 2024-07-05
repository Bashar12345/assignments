import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import Navbar from "../components/Navbar";
import { Box } from "@mui/material";
import { Container, styled } from "@mui/system";

const LayoutContainer = styled(Box)({
  marginInline: "1rem",
  // display: "flex",
});

const AppLayout = () => {
  const location = useLocation();

  // Check if the current route matches "/stories-lists"
  const isStoryListRoute = location.pathname.includes("/stories-lists");

  return (
    <>
      {!isStoryListRoute && (
        <Navbar position="fixed" style={{ zIndex: 1201, backgroundColor: "#fff" }} />
      )}
      <div>
        <CssBaseline />
        <LayoutContainer>
          <Outlet />
        </LayoutContainer>
      </div>
    </>
  );
};

export default AppLayout;
