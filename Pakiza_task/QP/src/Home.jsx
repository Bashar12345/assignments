import React from "react";
import Grid from "@mui/material/Grid";
import CreatePost from "./pages/post/CreatePost";
import NewsFeed from "./pages/NewsFeed";
import { Box } from "@mui/material";

const Home = () => {
  return (
    <Box marginInline={"2rem"}>
      <Grid container spacing={1}>
        {/* Left Section */}
        <Grid
          item
          xs={12}
          sm={3}
          sx={{ display: { xs: "none", sm: "block" }, width: "250px" }}
        >
          {/* Replace with your content */}
          <div style={{ background: "#f0f0f0", minHeight: "200px" }}>
            Left Section
          </div>
        </Grid>

        {/* Middle Section */}
        <Grid item xs={12} sm={6}>
          {/* Replace with your content */}
          <CreatePost />
          <NewsFeed />
        </Grid>

        {/* Right Section */}
        <Grid
          item
          xs={12}
          sm={3}
          sx={{ display: { xs: "none", sm: "block" }, width: "270px" }}
        >
          {/* Replace with your content */}
          <div style={{ background: "#d0d0d0", minHeight: "200px" }}>
            Right Section
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
