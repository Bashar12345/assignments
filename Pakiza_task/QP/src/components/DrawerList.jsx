import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import PropImage from "../assets/prop_img-2.png";
import ExploreSVG from "../assets/Explore";
import HomeIcon from "../assets/homeicon";
import GroupIcon from "../assets/GroupIcon";
import Friends from "../assets/Friends";
import PagesIcon from "../assets/PagesIcon";
import BookmarkIcon from "../assets/BookmarkIcon";
import WalletIcon from "../assets/WalletIcon";
import SellerIcon from "../assets/SellerIcon";
import BuyerIcon from "../assets/BuyerIcon";
import MarketPlace from "../assets/MarketPlace";
import logo from ".././assets/op.png";

//   const iconStyle = {
//     height: "24px",
//     width: "24px",
//     color: theme.palette.primary.main,
//   };

const typographyProps = {
  fontFamily: "Inter",
  fontSize: "14px",
  fontWeight: 400,
  lineHeight: "16.94px",
  textAlign: "left",
};

const DrawerList = ({ toggleDrawer }) => {
  const theme = useTheme();

  const iconStyle = {
    height: "24px",
    width: "24px",
    color: theme.palette.primary.main,
    paddingTop: "8px",
  };

  const userInfo = {
    _id: "6514147376594264b1103efe",
    first_name: "Md ",
    last_name: "Anik Islam",
    username: "anik.ba",
    email: "anik.ba@pakizatvl.com",
    phone: "+1 212 121 212",
    profile_pic:
      "1719995947437-6514147376594264b1103efe-1719996478687-croppedImageProfile.jpg",
    cover_pic:
      "1718184718411-6514147376594264b1103efe-1718270743668-croppedImageCover.jpg",
    user_status: null,
    gender: {
      _id: "65018b27577b4590853ef576",
      gender_name: "Female",
    },
    email_list: ["asif@gmail.com", "pakiza@ptvl.com"],
    fullName: "Md  Anik Islam",
  };

  return (
    <Box
      sx={{
        width: "233px",
        marginTop: "12px",
        flexGrow: 1,
        bgcolor: "background.paper",
      }}
      role="presentation"
      onClick={toggleDrawer}
    >
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          component="img"
          sx={{
            width: "45px",
            height: "45px",
            marginInline: "1rem",
          }}
          src={logo}
          alt="Logo"
        />
        <Typography variant="h6">Quantam Pakizat</Typography>
      </Box>
      <Divider />

      <List>
        <ListItem button component={Link} to="/profie">
          <ListItemAvatar>
            <Avatar alt="Anik Islam" src={PropImage || userInfo.profile_pic} />
          </ListItemAvatar>
          <ListItemText
            primary={userInfo.fullName}
            primaryTypographyProps={{ fontSize: "16px" }}
          />
        </ListItem>

        <ListItem button component={Link} to="/explore">
          <ListItemIcon sx={{ minWidth: 0, marginRight: "4px" }}>
            <ExploreSVG sx={iconStyle} />
          </ListItemIcon>
          <ListItemText
            primary="Explore"
            primaryTypographyProps={typographyProps}
          />
        </ListItem>

        <ListItem button component={Link} to="/friends">
          <ListItemIcon sx={{ minWidth: 0, marginRight: "4px" }}>
            <Friends sx={iconStyle} />
          </ListItemIcon>
          <ListItemText
            primary="Friends"
            primaryTypographyProps={typographyProps}
          />
        </ListItem>

        <ListItem button component={Link} to="/groups">
          <ListItemIcon sx={{ minWidth: 0, marginRight: "4px" }}>
            <GroupIcon sx={iconStyle} />
          </ListItemIcon>
          <ListItemText
            primary="Groups"
            primaryTypographyProps={typographyProps}
          />
        </ListItem>

        <ListItem button component={Link} to="/pages">
          <ListItemIcon sx={{ minWidth: 0, marginRight: "4px" }}>
            <PagesIcon sx={iconStyle} />
          </ListItemIcon>
          <ListItemText
            primary="Pages"
            primaryTypographyProps={typographyProps}
          />
        </ListItem>

        <ListItem button component={Link} to="/bookmarks">
          <ListItemIcon sx={{ minWidth: 0, marginRight: "4px" }}>
            <BookmarkIcon sx={iconStyle} />
          </ListItemIcon>
          <ListItemText
            primary="Bookmarks"
            primaryTypographyProps={typographyProps}
          />
        </ListItem>

        <ListItem button component={Link} to="/wallet">
          <ListItemIcon sx={{ minWidth: 0, marginRight: "4px" }}>
            <WalletIcon sx={iconStyle} />
          </ListItemIcon>
          <ListItemText
            primary="Wallet"
            primaryTypographyProps={typographyProps}
          />
        </ListItem>

        <ListItem button component={Link} to="/marketplace">
          <ListItemIcon sx={{ minWidth: 0, marginRight: "4px" }}>
            <MarketPlace sx={iconStyle} />
          </ListItemIcon>
          <ListItemText
            primary="Marketplace"
            primaryTypographyProps={typographyProps}
          />
        </ListItem>

        <ListItem button component={Link} to="/seller-panel">
          <ListItemIcon sx={{ minWidth: 0, marginRight: "4px" }}>
            <SellerIcon sx={iconStyle} />
          </ListItemIcon>
          <ListItemText
            primary="Seller Panel"
            primaryTypographyProps={typographyProps}
          />
        </ListItem>

        <ListItem button component={Link} to="/buyer-panel">
          <ListItemIcon sx={{ minWidth: 0, marginRight: "4px" }}>
            <BuyerIcon sx={iconStyle} />
          </ListItemIcon>
          <ListItemText
            primary="Buyer Panel"
            primaryTypographyProps={typographyProps}
          />
        </ListItem>

        <ListItem button component={Link} to="/posts">
          <ListItemText primary="Posts" sx={{ fontSize: "16px" }} />
        </ListItem>

        <ListItem button component={Link} to="/post-stories">
          <ListItemText primary="Post a Story" sx={{ fontSize: "16px" }} />
        </ListItem>

        <ListItem button component={Link} to="/stories-form">
          <ListItemText primary="Create Text Story" sx={{ fontSize: "16px" }} />
        </ListItem>

        <ListItem button component={Link} to="/photo-stories">
          <ListItemText
            primary="Create Photo Story"
            sx={{ fontSize: "16px" }}
          />
        </ListItem>

        <ListItem button component={Link} to="/stories-lists">
          <ListItemText primary="Story View" sx={{ fontSize: "16px" }} />
        </ListItem>
      </List>
    </Box>
  );
};

export default DrawerList;
