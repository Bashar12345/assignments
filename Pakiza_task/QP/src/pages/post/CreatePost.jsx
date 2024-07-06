import React from "react";
import {
  Box,
  Avatar,
  Typography,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import {
  VideoCall,
  PhotoLibrary,
  InsertEmoticon,
  LocationOn,
  MoreHoriz,
  ArrowForwardIosIcon,
} from "@mui/icons-material";
import { useUserInfo } from "../../api/getUserInfo";

const CreatePost = ({ featuredUsers }) => {
  const user = useUserInfo();
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{ backgroundColor: "#fff", borderRadius: "8px", p: 2, boxShadow: 3 }}
    >
      {/* Input Field */}
      <Box display="flex" alignItems="center" width="100%" mb={2}>
        <Avatar alt={user.name} src={user.profilePic} sx={{ marginRight: 2 }} />
        <TextField
          fullWidth
          variant="outlined"
          placeholder={`What's on your mind, ${user.name}?`}
          InputProps={{
            style: {
              borderRadius: 50,
              paddingLeft: "16px",
              backgroundColor: "#f0f2f5",
            },
          }}
        />
      </Box>

      {/* Buttons */}
      <Box display="flex" justifyContent="space-between" width="100%" mb={2}>
        <Button
          startIcon={<VideoCall />}
          color="primary"
          sx={{ textTransform: "none" }}
        >
          Live Video
        </Button>
        <Button
          startIcon={<PhotoLibrary />}
          color="success"
          sx={{ textTransform: "none" }}
        >
          Photo/Video
        </Button>
        <Button
          startIcon={<InsertEmoticon />}
          color="warning"
          sx={{ textTransform: "none" }}
        >
          Feeling/activity
        </Button>
      </Box>

      {/* Featured Users */}
      <Box
        display="flex"
        alignItems="center"
        width="100%"
        overflow="auto"
        sx={{
          "::-webkit-scrollbar": { display: "none" },
          whiteSpace: "nowrap",
        }}
      >
        {featuredUsers.map((featuredUser, index) => (
          <Box key={index} mx={1} display="inline-block">
            <Box
              position="relative"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Avatar
                alt={featuredUser.name}
                src={featuredUser.profilePic}
                sx={{ width: 80, height: 80, borderRadius: "8px" }}
              />
              {index === 0 && (
                <Box
                  position="absolute"
                  bottom={-10}
                  right={-10}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  sx={{
                    width: 24,
                    height: 24,
                    backgroundColor: "#00a400",
                    borderRadius: "50%",
                    color: "#fff",
                    fontWeight: "bold",
                  }}
                >
                  +
                </Box>
              )}
            </Box>
            <Typography
              align="center"
              variant="caption"
              sx={{ mt: 1, display: "block", width: 80, whiteSpace: "normal" }}
            >
              {featuredUser.name}
            </Typography>
          </Box>
        ))}
        <IconButton sx={{ ml: 2 }}>
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default CreatePost;
