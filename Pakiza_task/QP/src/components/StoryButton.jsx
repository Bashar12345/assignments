import { Button } from "@mui/material";

const StoryButton = ({ children, style, onClick }) => (
  <Button
    variant="contained"
    sx={{
      ...style,
      padding: "10px 20px",
      width: "247px",
      height: "449px",
      gap: "0px",
      borderRadius: "8px",
      opacity: "0px",
    }}
    onClick={onClick}
  >
    {children}
  </Button>
);

export default StoryButton;
