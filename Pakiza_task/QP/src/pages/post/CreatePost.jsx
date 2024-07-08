import {
  Box,
  Avatar,
  Typography,
  TextField,
  Button,
  IconButton,
  Divider,
} from "@mui/material";
import { KeyboardArrowRight } from "@mui/icons-material";
import {
  // VideoCall,
  // PhotoLibrary,
  InsertEmoticon,
  LocationOn,
  MoreHoriz,
  // ArrowForwardIosIcon,
} from "@mui/icons-material";
import useUserInfo from "../../api/getUserInfo";
import propImage from "../../assets/props_img.jpeg";
import propImageTwo from "../../assets/prop_img-2.png";

import PlusIcon from "../../assets/PlusIcon";
import CameraIcon from "../../assets/CameraIcon";
// import PlusIcon from "../../assets/PlusIcon";

import { color, display } from "@mui/system";
import PhotoIcon from "../../assets/PhotoIcon";
import PhotoIconTwo from "../../assets/PhotoIconTwo";

const btnTypoStyleProps = {
  fontFamily: "poppins",
  fontSize: "14px",
  fontWeight: 600,
  lineHeight: "21px",
  textAlign: "left",
  color: "#9FA2A6",
};

const CreatePost = () => {
  const { userInfo, loading, error } = useUserInfo();

  // console.log(userInfo);

  const featuredUsers = [
    { id: 1, name: "John Doe", profilePic: propImage },
    { id: 2, name: "Jane Smith", profilePic: propImage },
    { id: 3, name: "Mike Johnson", profilePic: propImage },
    { id: 4, name: "Emily Smith", profilePic: propImage },
    { id: 5, name: "Lola Johnson", profilePic: propImage },
    // Add more as needed
  ];

  const handleNextClick = () => {
    console.log("Next clicked");
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{
        backgroundColor: "#fff",
        borderRadius: "2px",
        p: { xs: 0, sm: 2 },
        boxShadow: 3,
        pt: 5,
        height: { xs: "234px", md: "474px" },
        borderBottom: "1px solid #E5E5E5",
      }}
    >
      {/* Input Field */}
      <Box
        display="flex"
        alignItems="center"
        width="100%"
        my={{ xs: 0, sm: 2 }}
        paddingTop={1}
        paddingInline={{ xs: 1, sm: 2 }}
      >
        <Avatar
          alt={userInfo.last_name}
          src={propImage || userInfo?.profilePic}
          sx={{
            width: "59px",
            height: "59px",
            marginRight: "1rem", // Adjust margin right as needed
            borderRadius: { xs: "10px", sm: "50%" },
          }}
        />

        <TextField
          fullWidth
          placeholder={`What's on your mind, ${userInfo?.last_name}?`}
          InputProps={{
            sx: {
              "& .MuiOutlinedInput-notchedOutline": {
                border: { xs: "0px", md: "1px" }, // light border
              },

              borderRadius: { xs: "4px", md: "160px" },
              paddingInline: { xs: "4px", sm: "16px" },
              backgroundColor: { xs: "none", sm: "#EEEEEE" },
              fontFamily: "Poppins",
              fontSize: { xs: "12px", sm: "14px" },
              fontWeight: 400,
              lineHeight: { xs: "18px", sm: "21px" },
              letterSpacing: "0.01em",
              textAlign: "left",
              color: "#000", // text color
              "&::placeholder": {
                // backgroundColor:
                color: "#B0B3B8", // placeholder color
              },
            },
          }}
        />
        <IconButton
          sx={{
            display: { xs: "block", sm: "none" },
            backgroundColor: "#EEEEEE",
            borderRadius: "8px",
          }}
        >
          <PhotoIconTwo sx={{ padding: "4px" }} />
        </IconButton>
      </Box>

      <Box
        sx={{
          display: { xs: "none", md: "block" },
          border: "1px solid rgba(227, 237, 237, 0.6)",
          width: "100%",
        }}
      />

      {/* Post Buttons */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          justifyContent: "space-around",
          alignItems: "center",
          marginBlock: "0.6rem",
        }}
        width="100%"
      >
        <Button startIcon={<CameraIcon />} sx={{ textTransform: "none" }}>
          <Typography sx={btnTypoStyleProps}>Live Video</Typography>
        </Button>
        <Button startIcon={<PhotoIcon />} sx={{ textTransform: "none" }}>
          <Typography sx={btnTypoStyleProps}>Photo/Video</Typography>
        </Button>
        <Button
          startIcon={
            <InsertEmoticon
              sx={{ width: "24px", height: "24px", color: "#F6B83C" }}
            />
          }
          sx={{ textTransform: "none" }}
        >
          <Typography sx={btnTypoStyleProps}>Feeling/activity</Typography>
        </Button>
      </Box>

      <Box
        sx={{
          display: { xs: "none", md: "block" },
          border: "1px solid rgba(227, 237, 237, 0.6)",
          width: "100%",
        }}
      />

      {/* Featured Users */}
      <Box position="relative" width="100%" height="100%" overflow="visible">
        <Box
          display="flex"
          alignItems="center"
          sx={{
            whiteSpace: "nowrap",
            overflowX: "auto",
            "::-webkit-scrollbar": { display: "none" },
          }}
        >
          {/* Featured User Cards */}
          {featuredUsers?.map((featuredUser, index) => (
            <Box
              key={index}
              ml={{ xs: 1, sm: 0 }}
              mr={{ xs: 0, sm: 1 }}
              display="inline-block"
            >
              <Box
                position="relative"
                display="flex"
                justifyContent="center"
                alignItems="center"
                sx={{
                  width: { xs: "80px", sm: "150px" },
                  height: { xs: "142px", sm: "264px" },
                }}
              >
                <Avatar
                  alt={featuredUser.last_name}
                  src={propImage || featuredUser.profilePic}
                  sx={{
                    width: { xs: "80px", sm: "150px" },
                    height: { xs: "118px", sm: "214px" },
                    borderRadius: "16px",
                    border: "1.5px solid",
                    borderImageSource:
                      "linear-gradient(0deg, #2DB9B9, #2DB9B9)",
                  }}
                />
                {/* Conditionally render either PlusIcon or Avatar */}
                <Box
                  position="absolute"
                  bottom={{ xs: "-1%", sm: "0%" }}
                  transform="translate(-50%, -50%)"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  {index === 0 ? (
                    <PlusIcon />
                  ) : (
                    <Box
                      display="flex"
                      flexDirection="column"
                      alignItems="center"
                    >
                      <Avatar
                        transform="translate(-50%, -50%)"
                        sx={{
                          alignItem: "center",
                          width: { xs: "22px", sm: "40px" },
                          height: { xs: "22px", sm: "40px" },
                          border: "2px solid #307777",
                          borderRadius: "50%",
                        }}
                        alt={featuredUser.last_name}
                        src={propImageTwo || featuredUser.profilePic}
                      />
                      <Typography
                        sx={{
                          marginTop: "2px",
                          display: index === 0 ? "none" : "block",
                          fontSize: "10px",
                          fontWeight: 400,
                          fontFamily: "SF Pro Text",
                          lineHeight: "6px",
                        }}
                      >
                        {featuredUser.name}
                      </Typography>
                    </Box>
                  )}
                </Box>
              </Box>
            </Box>
          ))}
        </Box>

        {/* Next Arrow */}
        <IconButton
          sx={{
            display: { xs: "none", md: "block" },
            position: "absolute",
            right: "16px", // Adjust as necessary
            width: "50px",
            height: "50px",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 1000,
            backgroundColor: "rgba(255, 255, 255, 0.8)", // Background to make it more visible
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 1)",
            },
          }}
          onClick={handleNextClick} // Add click handler for sliding functionality
        >
          <KeyboardArrowRight style={{ zIndex: 1000, right: "16px" }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default CreatePost;
