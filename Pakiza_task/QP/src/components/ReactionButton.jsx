import { useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import Love from "../assets/love.png";
import Haha from "../assets/haha.png";
// import Angry from "./icons/Angry";
// import Sad from "./icons/Sad";
import Like from "../assets/Like.jsx";

const ReactionButton = () => {
  const [showReactions, setShowReactions] = useState(false);

  const handleMouseEnter = () => {
    setShowReactions(true);
  };

  const handleMouseLeave = () => {
    setShowReactions(false);
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      color={"#6A6A6B"}
      marginInline={"16px"}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Box display="flex" alignItems="center" justifyContent={"center"} position="relative">
        <IconButton
          sx={{
            paddingRight: "0px",
            marginRight: "0px",
            marginBottom: "4px",
          }}
        >
          <Like />
        </IconButton>
        <Typography
          sx={{
            marginLeft: "4px",
            fontFamily: "Poppins",
            fontSize: "16px",
            fontWeight: 500,
            lineHeight: "24px",
          }}
        >
          Like
        </Typography>
        {showReactions && (
          <Box
            display="flex"
            position="absolute"
            bottom="40px"
            left="0"
            bgcolor="white"
            boxShadow="0 0 10px rgba(0, 0, 0, 0.1)"
            borderRadius="8px"
            padding="4px"
          >
            <IconButton sx={{ padding: "4px" }}>
              <Like />
            </IconButton>
            <IconButton sx={{ padding: "4px" }}>
              <Love />
            </IconButton>
            <IconButton sx={{ padding: "4px" }}>
              <Haha />
            </IconButton>
            <IconButton sx={{ color: "white" }}>
              <Typography
                variant="body1"
                sx={{ color: "white", padding: "4px" }}
              >
                😢
              </Typography>
            </IconButton>
            <IconButton sx={{ color: "white" }}>
              <Typography
                variant="body1"
                sx={{ color: "white", padding: "4px" }}
              >
                😡
              </Typography>
            </IconButton>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ReactionButton;
