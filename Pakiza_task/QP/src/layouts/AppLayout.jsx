import React from "react";
import { Toolbar, Typography, CssBaseline } from "@mui/material";
import { Outlet, Link } from "react-router-dom";
import Navbar from "../components/Navbar";

import { Box } from "@mui/material";
import { Container, styled } from "@mui/system";

const LayoutContainer = styled(Box)({
  marginInline: "1rem",
  // display: "flex",
});

const AppLayout = () => {
  return (
    <>
      <Navbar
        position="fixed"
        style={{ zIndex: 1201, backgroundColor: "#fff" }}
      />
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
