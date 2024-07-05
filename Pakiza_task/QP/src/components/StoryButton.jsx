import { Button } from "@mui/material";

const StoryButton = ({ children, style, onClick, component, to }) => (
  <Button
    variant="contained"
    component={component}
    to={to}
    onClick={onClick}
    sx={{
      ...style,
      padding: "10px 20px",
      width: "247px",
      height: "449px",
      gap: "0px",
      borderRadius: "8px",
      opacity: "0px",
    }}
    
  >
    {children}
  </Button>
);

export default StoryButton;
