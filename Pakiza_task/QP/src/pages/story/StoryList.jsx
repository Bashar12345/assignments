// src/pages/Stories.jsx
import React, { useEffect, useState } from "react";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import axiosInstance from "../../api/apiQueries";
import { Link } from "react-router-dom";

const StoryList = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const response = await axiosInstance.get("/stories");
        setStories(response.data);
      } catch (error) {
        console.error("Error fetching stories:", error);
      }
    };

    fetchStories();
  }, []);

  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Typography variant="h4">Stories</Typography>
      <Grid container spacing={2}>
        {stories.map((story) => (
          <Grid item xs={12} sm={6} md={4} key={story._id}>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <Typography variant="h6">{story.title}</Typography>
              <Typography variant="body2">{story.content}</Typography>
              <Typography variant="caption">
                By {story.user ? story.user.name : "Unknown"}
              </Typography>
              <Typography variant="caption">
                Likes: {story.likes} | Views: {story.views}
              </Typography>
            </Paper>
          </Grid>
        ))}
        {/* <Grid item xs={12}>
          <Button component={Link} to="/post-stories">
            <Typography variant="h5">Post a story</Typography>
          </Button>
        </Grid> */}
      </Grid>
    </Box>
  );
};

export default StoryList;
