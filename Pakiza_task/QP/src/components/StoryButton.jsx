import { Button } from "@mui/material";

const StoryButton = ({ children, style, onClick }) => (
    <Button
      variant="contained"
      sx={{ ...style, padding: "10px 20px", width: "100%" }}
      onClick={onClick}
    >
      {children}
    </Button>
  );

export default StoryButton;