import { Box } from "@mui/material";

const StoryPreview = ({ children, style, onClick }) => (
    <Box
      variant="contained"
      sx={{
        ...style,
        padding: "10px 20px",
        width: "323px",
        height: "588px",
        gap: "0px",
        borderRadius: "8px",
        opacity: "0px",
      }}
     
    >
      {children}
    </Box>
  );

export default StoryPreview;