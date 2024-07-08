import { Outlet, useLocation } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import Navbar from "../components/Navbar";
import { Box } from "@mui/material";
import { styled } from "@mui/system";
import NavbarMobile from "../components/NavbarMobile";

const LayoutContainer = styled(Box)({
  marginInline: { xs: "0.1rem", sm: "1rem" },
  // display: "flex",
});

const AppLayout = () => {
  const location = useLocation();

  // Check if the current route matches "/stories-lists"
  const isStoryListRoute = location.pathname.includes("/stories-lists");

  return (
    <>
      {!isStoryListRoute && (
        <Navbar
          position="fixed"
          style={{ zIndex: 1201, backgroundColor: "#fff" }}
        />
      )}
      {/* <NavbarMobile sx ={{zIndex: 1201 , marginTop: "64px", display: { xs: "block", sm: "none"}}}/> */}

      <div style={{ marginTop: "6px" }}>
        <CssBaseline />
        <LayoutContainer>
          <Outlet />
        </LayoutContainer>
      </div>
    </>
  );
};

export default AppLayout;
