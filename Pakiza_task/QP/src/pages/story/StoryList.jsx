import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Box,
} from "@mui/material";
import TextStoryForm from "./TextStoryForm";
import CreateStory from "./CreateStory";
// import axios from '../api/axios';

const StoryList = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        // const response = await axios.get('/api/stories');
        // setStories(response.data);
      } catch (error) {
        console.error("Error fetching stories:", error);
      }
    };
    fetchStories();
  }, []);

  return (
    <Box>
      {/* <Typography variant="h4" gutterBottom>
        Stories
      </Typography> */}
      {/* {stories.map((story) => (
        <Card key={story.id} style={{ marginBottom: "20px" }}>
          <CardContent>
            <Typography variant="h5">{story.title}</Typography>
            <Typography variant="body2">{story.content}</Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              Like
            </Button>
            <Button size="small" color="primary">
              Comment
            </Button>
          </CardActions>
        </Card>
      ))} */}

      {/* <TextStoryForm /> */}
      <CreateStory />
    </Box>
  );
};

export default StoryList;
