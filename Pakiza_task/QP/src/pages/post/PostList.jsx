import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Typography,
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Divider,
  IconButton,
  Button,
  CardHeader,
  Container,
  TextField,
} from "@mui/material";
import { format } from "date-fns";
import alterImage from "../../assets/props_img.jpeg";
import propImage from "../../assets/props_img.jpeg";

import FavoriteIcon from "@mui/icons-material/Favorite";
import ThreeCirclesSVG from "../../assets/ThreeDotIcon";
import CrossSVG from "../../assets/CloseRingLight";
import PublicSvg from "../../assets/publicSvg";
import Haha from "../../assets/haha.png";
import Like from "../../assets/Like.jsx";
import CommentIcon from "../../assets/CommentIcon.jsx";
import Love from "../../assets/love.png";
import ShareIcon from "../../assets/ShareIcon.jsx";
import ReplyArrow from "../../assets/ReplyArrow.jsx";

// import Wow from "../../assets/Wow.png";
// import Sad from "../../assets/Sad.png";
// import Angry from "../../assets/Angry.png";

const PostList = ({ posts, loading, loadMore, error }) => {
  const observer = useRef();
  const [repliesVisible, setRepliesVisible] = useState({});

  const lastPostElementRef = useRef();

  useEffect(() => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        loadMore();
      }
    });
    if (lastPostElementRef.current)
      observer.current.observe(lastPostElementRef.current);
  }, [loading, loadMore]);

  if (error)
    return <Typography>Error loading posts: {error.message}</Typography>;

  const toggleRepliesVisibility = (commentId) => {
    setRepliesVisible((prevState) => ({
      ...prevState,
      [commentId]: !prevState[commentId],
    }));
  };

  return (
    <Box display="grid" justifyContent={"center"} mt={2}>
      {posts.map((post, index) => (
        <Card
          key={index}
          ref={index === posts.length - 1 ? lastPostElementRef : null}
          sx={{ marginBottom: 2, width: "655px" }}
        >
          <CardContent sx={{ padding: 0 }}>
            {/* Post Header */}

            <Box display="flex" alignItems="center" mb={1}>
              {/* Left-aligned content */}
              <Box
                flex="1"
                display="flex"
                alignItems="center"
                paddingLeft={2}
                marginTop={2}
              >
                <Avatar
                  // sx={{ width: "40px", height: "40px" }}
                  src={alterImage || post.user_id.profile_pic}
                  alt={post.user_id.username}
                />
                <Box ml={1}>
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: "15px",
                      fontWeight: 500,
                      lineHeight: "22.5px",
                      textAlign: "left",
                    }}
                  >
                    {`${post.user_id.first_name} ${post.user_id.last_name}`}
                  </Typography>
                  <Typography
                    color="textSecondary"
                    display="flex"
                    alignItems="center"
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: "13px",
                      fontWeight: 400,
                      lineHeight: "10.5px",
                      textAlign: "left",
                    }}
                  >
                    {format(new Date(post.createdAt), "PPP")} •
                    <Box sx={{ marginLeft: "2px" }}>
                      <PublicSvg />
                    </Box>
                  </Typography>
                </Box>
              </Box>

              {/* Right-aligned content */}
              <Box
                display="flex"
                alignItems="center"
                justifyContent={"center"}
                marginTop={2}
              >
                <Button>
                  <IconButton
                    sx={{
                      margin: "0px",
                      padding: "0px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <ThreeCirclesSVG />
                  </IconButton>
                </Button>

                <Button mx={1}>
                  <CrossSVG />
                </Button>
              </Box>
            </Box>

            {/* Post Header End */}

            {/* Post Content  */}

            {/* Post Description */}
            {post.description !== null ? (
              <Container>
                <Box mt={2}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: "poppins",
                      fontSize: "14px",
                      fontWeight: 400,
                      lineHeight: "18.5px",
                      textAlign: "left",
                    }}
                  >
                    {post.description}
                  </Typography>
                </Box>
              </Container>
            ) : null}

            {/* Shared Post Description */}
            {post.share_post_id && (
              <Card variant="outlined" sx={{ margin: 3, padding: 0 }}>
                <CardContent>
                  <Typography
                    sx={{
                      fontFamily: "poppins",
                      fontSize: "15px",
                      fontWeight: 400,
                      lineHeight: "18.5px",
                      textAlign: "left",
                    }}
                  >
                    {post.share_post_id.description ||
                      "No shared post description"}
                  </Typography>
                  <Typography
                    color="textSecondary"
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: "12px",
                      fontWeight: 400,
                      lineHeight: "18.5px",
                      textAlign: "left",
                      color: "gray",
                    }}
                  >
                    {`Shared from ${post.share_post_id.user_id.first_name} ${post.share_post_id.user_id.last_name}`}
                  </Typography>
                </CardContent>
              </Card>
            )}

            {/* Post Media */}
            {post.media.length > 0 && (
              <CardMedia
                component="img"
                sx={{ margin: "0px", padding: "0px", objectFit: "cover" }}
                height="395"
                width="655"
                // image={post.media[0] || alterImage}
                image={alterImage || "https://picsum.photos/200"}
                alt="Post media"
              />
            )}

            {/* Post Reactions */}
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              my={2}
              mx={2}
            >
              <Box display="flex" alignItems="center">
                <IconButton
                  sx={{
                    padding: 0,
                    margin: 0,
                  }}
                >
                  <Box
                    sx={{
                      width: "20px",
                      height: "20px",
                      border: "2px solid black",
                      borderRadius: "50%",
                    }}
                    component="img"
                    src={Haha}
                    alt="haha"
                  />
                </IconButton>

                <IconButton
                  sx={{
                    padding: 0,
                    margin: 0,
                    marginLeft: "-2px", // Adjust margin to overlap slightly
                  }}
                >
                  <Box
                    sx={{
                      width: "20px",
                      height: "20px",
                      border: "2px solid black",
                      borderRadius: "50%",
                    }}
                    component="img"
                    src={Love}
                    alt="love"
                  />
                </IconButton>

                <Typography
                  marginLeft={1}
                  sx={{
                    fontFamily: "poppins",
                    fontSize: "14px",
                    fontWeight: 500,
                    lineHeight: "20.5px",
                    textAlign: "left",
                  }}
                >
                  {post.reactionCount}
                </Typography>
              </Box>

              {/* Post Comments */}
              <Box display="flex" alignItems="center">
                <Typography
                  marginLeft={1}
                  sx={{
                    fontFamily: "poppins",
                    fontSize: "14px",
                    fontWeight: 500,
                    lineHeight: "20.5px",
                    textAlign: "left",
                  }}
                >
                  {post.totalComments}
                </Typography>
                <IconButton
                  sx={{
                    margin: 0,
                    padding: "2px",
                  }}
                >
                  <CommentIcon />
                </IconButton>

                {/* Post Shares */}
                <Typography
                  marginLeft={1}
                  sx={{
                    fontFamily: "poppins",
                    fontSize: "14px",
                    fontWeight: 500,
                    lineHeight: "20.5px",
                    textAlign: "left",
                  }}
                >
                  {post.postShareCount}
                </Typography>
                <IconButton
                  sx={{
                    padding: "2px",
                    margin: 0,
                  }}
                >
                  <ShareIcon />
                </IconButton>
              </Box>
            </Box>

            {/* Post Actions */}
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              mt={2}
              color={"#6A6A6B"}
              marginInline={"16px"}
            >
              <Box display="flex" alignItems="center">
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
              </Box>

              <Box display="flex" alignItems="center">
                <IconButton
                  sx={{
                    padding: 0,
                    margin: 0,
                  }}
                ></IconButton>
                <Typography
                  marginLeft={1}
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "16px",
                    fontWeight: 500,
                    lineHeight: "24px",
                  }}
                >
                  Comment
                </Typography>
              </Box>

              <Box display="flex" alignItems="center">
                <IconButton
                  sx={{
                    padding: 0,
                    margin: 0,
                  }}
                ></IconButton>
                <Typography
                  marginLeft={1}
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "16px",
                    fontWeight: 500,
                    lineHeight: "24px",
                  }}
                >
                  Share
                </Typography>
              </Box>
            </Box>
          </CardContent>

          {/* Post Content end */}

          {/* Display comments Box */}
          {post.comments.length > 0 && (
            <Box display="flex" flexDirection="column" mt={2} px={4}>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "16px",
                  fontWeight: 600,
                  lineHeight: "24px",
                }}
              >
                View more comments
              </Typography>

              {/*              Display comments section */}
              {post.comments.length > 0 && (
                <Box display="flex" flexDirection="column" mt={2} mb={2}>
                  {post.comments.map((comment) => (
                    <Box key={comment._id} display="flex" mb={2}>
                      <Avatar
                        alt={`${comment.user_id.first_name} ${comment.user_id.last_name}`}
                        src={comment.user_id.profile_pic}
                        sx={{ width: 40, height: 40, marginRight: 2 }}
                      />

                      {/* Comment container */}
                      <Box display="flex" flexDirection="column" width="100%">
                        {/* Comment */}
                        <Box
                          display="flex"
                          width="100%"
                          flexDirection="column"
                          // border={"2px solid #E4E4E4"}
                          // borderRadius={3}
                          // paddingLeft={2}
                          p={1}
                        >
                          <Box display="flex" alignItems="center">
                            <Typography
                              variant="subtitle1"
                              sx={{
                                fontFamily: "Poppins",
                                fontSize: "14px",
                                fontWeight: 500,
                                lineHeight: "21.5px",
                              }}
                            >
                              {`${comment.user_id.first_name} ${comment.user_id.last_name}`}
                            </Typography>
                          </Box>
                          {/* Comment Text */}
                          <Typography
                            variant="body2"
                            sx={{
                              mt: 1,
                              fontFamily: "Poppins",
                              fontSize: "12px",
                              fontWeight: 400,
                              lineHeight: "18.5px",
                            }}
                          >
                            {comment.comment_name || comment.comment_text}
                          </Typography>

                          {/* Display comment reactions */}

                          <Box>
                            <Box display="flex" alignItems="center">
                              <Typography
                                variant="body2"
                                color="textSecondary"
                                ml={2}
                                sx={{
                                  mt: 1,
                                  fontFamily: "Manrope",
                                  fontSize: "12px",
                                  fontWeight: 700,
                                  lineHeight: "14.5px",
                                  color: "#000000",
                                }}
                              >
                                1 h
                              </Typography>
                              <Typography
                                variant="body2"
                                color="textSecondary"
                                ml={2}
                                sx={{
                                  mt: 1,
                                  fontFamily: "Manrope",
                                  fontSize: "12px",
                                  fontWeight: 700,
                                  lineHeight: "14.5px",
                                  color: "#000000",
                                }}
                              >
                                Like
                              </Typography>
                              <Typography
                                variant="body2"
                                color="textSecondary"
                                ml={2}
                                sx={{
                                  mt: 1,
                                  fontFamily: "Manrope",
                                  fontSize: "12px",
                                  fontWeight: 700,
                                  lineHeight: "14.5px",
                                  color: "#000000",
                                }}
                              >
                                Reply
                              </Typography>
                            </Box>

                            <Box display="flex" alignItems="center">
                              {comment.replies.length > 0 && (
                                <>
                                  <Button
                                    onClick={() =>
                                      toggleRepliesVisibility(comment._id)
                                    }
                                  >
                                    <ReplyArrow />
                                  </Button>

                                  <Typography
                                    sx={{
                                      mt: 1,
                                      fontFamily: "poppins",
                                      fontSize: "12px",
                                      fontWeight: 500,
                                      lineHeight: "18.5px",
                                      color: "#000000",
                                    }}
                                  >
                                    {repliesVisible[comment._id]
                                      ? "Hide"
                                      : "View"}{" "}
                                    {comment.replies.length} Reply
                                  </Typography>
                                </>
                              )}
                            </Box>
                          </Box>

                          {/* Replies */}
                          {repliesVisible[comment._id] && (
                            <Box mt={2} pl={5}>
                              {comment.replies.map((reply) => (
                                <Box key={reply._id} display="flex" mb={2}>
                                  <Avatar
                                    alt={`${reply.replies_user_id.first_name} ${reply.replies_user_id.last_name}`}
                                    src={reply.replies_user_id.profile_pic}
                                    sx={{
                                      width: 30,
                                      height: 30,
                                      marginRight: 2,
                                    }}
                                  />
                                  <Box display="flex" flexDirection="column">
                                    <Box display="flex" alignItems="center">
                                      <Typography
                                        variant="subtitle2"
                                        sx={{
                                          fontFamily: "Poppins",
                                          fontSize: "14px",
                                          fontWeight: 500,
                                        }}
                                      >
                                        {`${reply.replies_user_id.first_name} ${reply.replies_user_id.last_name}`}
                                      </Typography>
                                    </Box>
                                    <Typography variant="body2" sx={{ mt: 1 }}>
                                      {reply.replies_comment_name}
                                    </Typography>
                                    {reply.replies_comment_reactions.length >
                                      0 && (
                                      <Box display="flex" mt={1}>
                                        {reply.replies_comment_reactions.map(
                                          (reaction) => (
                                            <IconButton
                                              key={reaction._id}
                                              sx={{ padding: "4px" }}
                                            >
                                              {reaction.reaction_type ===
                                                "love" && (
                                                <FavoriteIcon
                                                  color="secondary"
                                                  fontSize="small"
                                                />
                                              )}
                                            </IconButton>
                                          )
                                        )}
                                      </Box>
                                    )}
                                  </Box>
                                </Box>
                              ))}
                            </Box>
                          )}

                          {/* Comment Box */}
                          {/* Input Field */}
                          <Box
                            display="flex"
                            alignItems="center"
                            width="100%"
                            mb={2}
                            paddingInline={2}
                          >
                            <Avatar
                              src={propImage}
                              sx={{
                                width: "59px",
                                height: "59px",
                                marginRight: "1rem", // Adjust margin right as needed
                              }}
                            />
                            <TextField
                              fullWidth
                              variant="outlined"
                              placeholder={`Write a Public comment...`}
                              InputProps={{
                                style: {
                                  border: "none", // light border
                                  borderRadius: "8px",
                                  paddingInline: "16px",
                                  backgroundColor: "#EEEEEE",
                                  fontFamily: "Poppins",
                                  fontSize: "14px",
                                  fontWeight: 400,
                                  lineHeight: "21px",
                                  letterSpacing: "0.01em",
                                  textAlign: "left",
                                  color: "#000", // text color
                                  "&::placeholder": {
                                    color: "#B0B3B8", // placeholder color
                                  },
                                },
                              }}
                            />
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  ))}
                </Box>
              )}
            </Box>
          )}

          <Divider />
        </Card>
      ))}

      {loading && <Typography>Loading more posts...</Typography>}
    </Box>
  );
};

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
  loadMore: PropTypes.func,
  error: PropTypes.object,
};

export default PostList;
