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
import { Link } from "react-router-dom";
import { Close } from "@mui/icons-material";

const CreateStory = () => {
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
            Create Your Story
          </Typography>

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
              Create Story
            </Button>
          </Box>
        </Box>
      </Drawer>

      {/* Main Content */}
      {/* <Container sx={{ border: "2px solid green" }}> */}

      <Box
        sx={{
          backgroundColor: "white",
          width: { xs: "100%", md: "991px" },
          height: { xs: "100%", md: "826px" },
          marginTop: { xs: "10px", md: "100px" },
          padding: "20px 19px 20px 19px",
          gap: { xs: "14px", md: "16px" },
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
          <Grid item sm={12}>
            <Typography
              variant="h2"
              gutterBottom
              sx={{
                display: { xs: "none", md: "block" },
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

            {isMobile && (
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Close />
                <Typography
                  variant="h2"
                  gutterBottom
                  sx={{
                    fontFamily: "Public Sans",
                    fontSize: "16px",
                    fontWeight: "700",
                    lineHeight: "8px",
                    textAlign: "center",
                    marginBottom: "8px",
                  }}
                >
                  Create Story
                </Typography>
              </Box>
            )}
          </Grid>

          <>
            {/* For desktop/tablet view */}
            {!isMobile && (
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
                    component={Link}
                    to="/photo-stories"
                    style={{
                      background:
                        "linear-gradient(180deg, #F25268 0%, #FD1EBE 100%)",
                      width: { xs: "154px", md: "247px" },
                      height: { xs: "271px", md: "449px" },
                    }}
                    onClick={isMobile ? handleMainDrawerToggle : null}
                  >
                    <Box
                      component="span"
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
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

                <Box xs={6}>
                  <StoryButton
                    component={Link}
                    to="/stories-form"
                    style={{
                      background:
                        "linear-gradient(180deg, #136CAC 0%, #59DDDD 100%)",
                    }}
                    onClick={isMobile ? handleMainDrawerToggle : null}
                  >
                    <Box
                      component="span"
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <TextIcon />
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
                        Create Your Text Story
                      </Typography>
                    </Box>
                  </StoryButton>
                </Box>
              </Box>
            )}

            {/* For mobile view, render StoryButton components directly without the wrapping Box */}
            {isMobile && (
              <>
                <StoryButton
                  component={Link}
                  to="/photo-stories"
                  style={{
                    background:
                      "linear-gradient(180deg, #F25268 0%, #FD1EBE 100%)",
                    width: { xs: "154px", md: "247px" },
                    height: { xs: "271px", md: "449px" },
                    margin: "10px", // Adjust margin as needed
                  }}
                  onClick={isMobile ? handleMainDrawerToggle : null}
                >
                  <Box
                    component="span"
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
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

                <StoryButton
                  component={Link}
                  to="/stories-form"
                  style={{
                    background:
                      "linear-gradient(180deg, #136CAC 0%, #59DDDD 100%)",
                    margin: "10px", // Adjust margin as needed
                  }}
                  onClick={isMobile ? handleMainDrawerToggle : null}
                >
                  <Box
                    component="span"
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <TextIcon />
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
                      Create Your Text Story
                    </Typography>
                  </Box>
                </StoryButton>
              </>
            )}
          </>

          {/* End of StoryButton components  */}
        </Grid>
      </Box>

      {/* </Container> */}
    </Box>
  );
};

export default CreateStory;
