// File: CreateStory.js

import React from 'react';
import { Box, Button, Typography, Select, MenuItem, FormControl, InputLabel, Grid } from '@mui/material';
import { styled } from '@mui/system';

const Sidebar = styled(Box)({
  width: '250px',
  padding: '20px',
  borderRight: '1px solid #ddd',
  height: '100vh',
});

const MainContent = styled(Box)({
  flexGrow: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
});

const StoryButton = styled(Button)({
  height: '200px',
  width: '200px',
  margin: '0 20px',
  borderRadius: '15px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#fff',
  fontSize: '18px',
  fontWeight: 'bold',
});

const CreateStory = () => {
  return (
    <Box display="flex">
      {/* Sidebar */}
      <Sidebar>
        <FormControl fullWidth>
          <InputLabel id="select-story-type-label">Public</InputLabel>
          <Select labelId="select-story-type-label" defaultValue="Public">
            <MenuItem value="Public">Public</MenuItem>
            <MenuItem value="Private">Private</MenuItem>
          </Select>
        </FormControl>
        <Box mt={2}>
          <Button variant="contained" color="primary" fullWidth>
            Create Story
          </Button>
        </Box>
      </Sidebar>

      {/* Main Content */}
      <MainContent>
        <Grid container spacing={3} justifyContent="center">
          <Grid item>
            <StoryButton style={{ background: 'linear-gradient(to right, #ff416c, #ff4b2b)' }}>
              <Box component="span" mb={1}>📷</Box>
              Create Your Photo Story
            </StoryButton>
          </Grid>
          <Grid item>
            <StoryButton style={{ background: 'linear-gradient(to right, #00b4db, #0083b0)' }}>
              <Box component="span" mb={1}>📝</Box>
              Create Your Text Story
            </StoryButton>
          </Grid>
        </Grid>
      </MainContent>
    </Box>
  );
};

export default CreateStory;
