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
import ShadowBox from "../../components/ShadowBox";
import StoryButton from "../../components/StoryButton";

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
            width: isMobile ? "100%" : 374,
            height: isMobile ? "50%" : "calc(100% - 64px)",
            top: isMobile ? "auto" : 64,
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
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              fontFamily: "Poppins",
              fontSize: "24px",
              fontWeight: "600",
              lineHeight: "36px",
              textAlign: "left",
              marginBottom: "8px",
            }}
          >
            Create Your Story
          </Typography>
          <TextField
            multiline
            rows={10}
            fullWidth
            placeholder="Start Typing"
            hiddenLabel
          />
          <FormControl fullWidth>
            <InputLabel id="select-story-type-label">Privacy</InputLabel>
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
          //           width: Fixed (991px)px;
          // height: Fixed (826px)px;
          // top: 152px;
          // left: 412px;
          padding: "20px 19px 20px 19px",
          // gap: 17px;
          // border-radius: 8px 0px 0px 0px;
          // opacity: 0px;

          // border: "2px solid black",
          // padding: "21px",
          boxSizing: "border-box",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        }}
        // width={isMobile ? "100%" : "calc(100% - 374px)"}
        marginLeft={drawerWidth}
      >
        <ShadowBox>
          <Grid
            container
            spacing={2}
            sx={{ border: "2px solid red" }}
            justifyContent={"space-between"}
          >
            <Grid item xs={6}>
              <StoryButton
                style={{
                  background: "linear-gradient(to right, #ff416c, #ff4b2b)",
                  display: { xs: "flex", sm: "block" },
                }}
                onClick={isMobile ? handleMainDrawerToggle : null}
              >
                <Box component="span" mb={1}>
                  📷
                </Box>
                Create Your Photo Story
              </StoryButton>
            </Grid>
            <Grid item xs={6}>
              <StoryButton
                style={{
                  background: "linear-gradient(to right, #00b4db, #0083b0)",
                  display: { xs: "flex", sm: "block" },
                }}
                onClick={isMobile ? handleMainDrawerToggle : null}
              >
                <Box component="span" mb={1}>
                  📝
                </Box>
                Create Your Text Story
              </StoryButton>
            </Grid>
          </Grid>
        </ShadowBox>
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

export default CreateStory;

// import React, { useState } from "react";
// import {
//   Box,
//   Button,
//   Drawer,
//   FormControl,
//   Grid,
//   InputLabel,
//   MenuItem,
//   Select,
//   TextField,
//   Typography,
//   useMediaQuery,
//   useTheme,
// } from "@mui/material";

// const StoryButton = ({ children, style }) => (
//   <Button variant="contained" sx={{ ...style, padding: "10px 20px", width: "100%" }}>
//     {children}
//   </Button>
// );

// const CreateStory = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   const handleDrawerToggle = () => {
//     setDrawerOpen(!drawerOpen);
//   };

//   return (
//     <Grid container spacing={3}>
//       {/* Sidebar */}
//       <Drawer
//         variant={isMobile ? "temporary" : "permanent"}
//         open={isMobile ? drawerOpen : true}
//         onClose={handleDrawerToggle}
//         anchor={isMobile ? "bottom" : "left"}
//         ModalProps={{ keepMounted: true }} // Better performance on mobile
//         sx={{
//           "& .MuiDrawer-paper": {
//             boxSizing: "border-box",
//             width: isMobile ? "100%" : 374,
//             height: isMobile ? "50%" : "calc(100% - 68px)",
//             top: isMobile ? 'auto' : 68,
//           },
//         }}
//       >
//         <Box
//           sx={{
//             border: "2px solid black",
//             padding: "21px",
//             height: "100%",
//             overflowY: "auto",
//           }}
//         >
//           <Typography
//             variant="h2"
//             gutterBottom
//             sx={{
//               fontFamily: "Poppins",
//               fontSize: "24px",
//               fontWeight: "600",
//               lineHeight: "36px",
//               textAlign: "left",
//               marginBottom: "8px",
//             }}
//           >
//             Create Your Story
//           </Typography>
//           <TextField
//             multiline
//             rows={10}
//             fullWidth
//             placeholder="Start Typing"
//             hiddenLabel
//           />
//           <FormControl fullWidth>
//             <InputLabel id="select-story-type-label">Privacy</InputLabel>
//             <Select labelId="select-story-type-label" defaultValue="Public">
//               <MenuItem value="Public">Public</MenuItem>
//               <MenuItem value="Private">Private</MenuItem>
//             </Select>
//           </FormControl>
//           <Box mt={2}>
//             <Button variant="contained" color="primary" fullWidth>
//               Create Your Story
//             </Button>
//           </Box>
//         </Box>
//       </Drawer>

//       {/* Main Content */}

//     </Grid>
//   );
// };

// export default CreateStory;
