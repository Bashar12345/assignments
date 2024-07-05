import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Drawer,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CloseButton from "../../components/Closebutton";
import StoryButton from "../../components/StoryButton";
import GalleryIcon from "../../assets/GallaryIcon";
import TextIcon from "../../assets/TextIcon";

const TextStoryForm = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mainDrawerOpen, setMainDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleMainDrawerToggle = () => {
    setMainDrawerOpen(!mainDrawerOpen);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };
  const drawerWidth = isMobile ? "0%" : "374px";

  return (
    <Box
      sx={{
        // border: "1px solid black",
        width: "100%",
      }}
    >
      {/* Sidebar */}
      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        open={isMobile ? drawerOpen : true}
        onClose={handleDrawerToggle}
        anchor={isMobile ? "bottom" : "left"}
        ModalProps={{ keepMounted: true }} // Better performance on mobile
        sx={{
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            zIndex: -1,
            width: isMobile ? "100%" : 374,
            height: isMobile ? "50%" : "calc(100% - 64px)",
            top: isMobile ? "auto" : 64,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            // border: "2px solid black",
            padding: "21px",
            height: "100%",
            overflowY: "auto",
          }}
        >
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              fontFamily: "Poppins",
              fontSize: "24px",
              fontWeight: "600",
              lineHeight: "36px",
              textAlign: "left",
              marginBottom: "20px",
            }}
          >
            Create Story
          </Typography>
          <TextField
            multiline
            rows={10}
            fullWidth
            placeholder="Start Typing"
            hiddenLabel
          />
          <FormControl fullWidth sx={{ flexGrow: 1 }}>
            {/* <InputLabel id="select-story-type-label">Privacy</InputLabel> */}
            <Select labelId="select-story-type-label" defaultValue="Public">
              <MenuItem value="Public">Public</MenuItem>
              <MenuItem value="Private">Private</MenuItem>
            </Select>
          </FormControl>

          <Box mt={2}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleSubmit}
            >
              Create Your Story
            </Button>
          </Box>
        </Box>
      </Drawer>

      {/* Main Content */}
      {/* <Container sx={{ border: "2px solid green" }}> */}

      <Box
        sx={{
          backgroundColor: "white",
          width: "991px",
          height: "826px",
          marginTop: "100px",
          padding: "20px 19px 20px 19px",
          gap: "17px",
          borderRadius: "8px",
          // opacity: 0px;

          // border: "2px solid black",

          boxSizing: "border-box",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        }}
        // width={isMobile ? "100%" : "calc(100% - 374px)"}
        marginLeft={drawerWidth}
      >
        <Grid
          container
          // sx={{ border: "2px solid red" }}
          justifyContent={"space-between"}
        >
          <Grid item xs={12}>
            <Typography
              variant="h2"
              gutterBottom
              sx={{
                fontFamily: "Poppins",
                fontSize: "16px",
                fontWeight: "600",
                lineHeight: "24px",
                textAlign: "left",
                marginBottom: "8px",
              }}
            >
              Select Story Type
            </Typography>
          </Grid>

          <Box
            sx={{
              display: "flex",
              width: "951px",
              height: "742px",
              padding: "71px 281px 79px 281px",
              gap: "10px",
              borderRadius: "8px",
              opacity: "0px",
              background: "#F0F2F5",
            }}
          >
            <Box xs={6}>
              <StoryButton
                style={{
                  background:
                    "linear-gradient(180deg, #F25268 0%, #FD1EBE 100%)",
                  display: { xs: "flex", sm: "block" },
                }}
                onClick={isMobile ? handleMainDrawerToggle : null}
              >
              <Box component="span" sx={{ display: "flex" ,flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                  <GalleryIcon />
                 
                  <Typography
                    variant="body1"
                    component="span"
                    marginTop={1}
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: 16,
                      fontWeight: 600,
                      lineHeight: "24px",
                      textAlign: "center",
                    }}
                  >
                    Create Your Photo Story
                  </Typography>
                </Box>
              </StoryButton>
            </Box>

            
          </Box>
        </Grid>
      </Box>

      {/* </Container> */}

      {isMobile && (
        <>
          {/* Drawer for mobile view */}

          <Drawer
            variant="temporary"
            open={mainDrawerOpen}
            onClose={handleMainDrawerToggle}
            anchor="bottom"
            ModalProps={{ keepMounted: true }}
            sx={{
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "100%",
                height: "100%",
              },
            }}
          >
            <Box
              sx={{
                border: "2px solid black",
                padding: "21px",
                height: "100%",
                overflowY: "auto",
              }}
            >
              <Grid container spacing={3} justifyContent="center">
                <CloseButton onClick={handleDrawerToggle} />
                <Grid item>
                  <StoryButton
                    style={{
                      background: "linear-gradient(to right, #ff416c, #ff4b2b)",
                    }}
                    onClick={handleMainDrawerToggle}
                  >
                    <Box component="span" mb={1}>
                      📷
                    </Box>
                    Create Your Photo Story
                  </StoryButton>
                </Grid>
                <Grid item>
                  <StoryButton
                    style={{
                      background: "linear-gradient(to right, #00b4db, #0083b0)",
                    }}
                    onClick={handleMainDrawerToggle}
                  >
                    <Box component="span" mb={1}>
                      📝
                    </Box>
                    Create Your Text Story
                  </StoryButton>
                </Grid>
              </Grid>
            </Box>
          </Drawer>
        </>
      )}
    </Box>
  );
};

export default TextStoryForm;

// return (
//   <form onSubmit={handleSubmit}>
//     {/* <StoryComposer /> */}
//     <textarea
//       placeholder="Type your story here..."
//       value={storyText}
//       onChange={(e) => setStoryText(e.target.value)}
//       rows={5}
//       cols={30}
//       required
//     />
//     <button type="submit">Post Story</button>
//   </form>
// );
// };
