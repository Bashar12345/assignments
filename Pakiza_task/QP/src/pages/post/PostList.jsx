import React, { useEffect, useRef } from "react";
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
} from "@mui/material";
import { format } from "date-fns";
import alterImage from "../../assets/props_img.jpeg";

import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import ThreeCirclesSVG from "../../assets/ThreeDotIcon";
import CrossSVG from "../../assets/CloseRingLight";
import PublicSvg from "../../assets/publicSvg";
import Haha from "../../assets/haha.png";
import Like from "../../assets/Like.jsx";
import Love from "../../assets/love.png";

// import Wow from "../../assets/Wow.png";
// import Sad from "../../assets/Sad.png";
// import Angry from "../../assets/Angry.png";

const PostList = ({ posts, loading, loadMore, error }) => {
  const observer = useRef();

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

  return (
    <Box display="grid" justifyContent={"center"}>
      {posts.map((post, index) => (
        <Card
          key={index}
          ref={index === posts.length - 1 ? lastPostElementRef : null}
          sx={{ marginBottom: 2, width: "655px" }}
        >
          <CardContent sx={{ padding: 0 }}>
            {/* Post Header */}
            <Box display="flex" alignItems="center">
              {/* Left-aligned content */}
              <Box
                flex="1"
                display="flex"
                alignItems="center"
                paddingLeft={2}
                marginTop={2}
              >
                <Avatar
                  src={alterImage || post.user_id.profile_pic}
                  alt={post.user_id.username}
                />
                <Box ml={2}>
                  <Typography
                    variant="h6"
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
                    variant="body2"
                    color="textSecondary"
                    display="flex"
                    alignItems="center"
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: "13px",
                      fontWeight: 400,
                      lineHeight: "19.5px",
                      textAlign: "left",
                    }}
                  >
                    {format(new Date(post.createdAt), "PPP")}
                    <Box ml={1}>
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
                <Box
                  sx={{
                    margin: "0px",
                    padding: "0px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <ThreeCirclesSVG />
                </Box>
                <Box ml={2}>
                  <CrossSVG />
                </Box>
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
                    src={Love}
                    alt="comment icon"
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
                  {post.postShareCount}
                </Typography>
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
                    src={Love}
                    alt="share icon"
                  />
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
            >
              <Box display="flex" alignItems="center">
                <IconButton
                  sx={{
                    marginLeft: "16px",
                    paddingRight: "0px",
                    marginRight: "0px",
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

          {/* Display comments */}
          {post.comments.length > 0 && (
            <div>
              {post.comments.map((comment) => (
                <div key={comment._id}>
                  <Avatar
                    alt={`${comment.user_id.first_name} ${comment.user_id.last_name}`}
                    src={comment.user_id.profile_pic}
                  />
                  <div>
                    <Typography variant="subtitle1">
                      {`${comment.user_id.first_name} ${comment.user_id.last_name}`}
                    </Typography>
                    <Typography variant="body2">
                      {comment.comment_name}
                    </Typography>
                    {/* Display comment reactions */}
                    {comment.comment_reactions.length > 0 && (
                      <div>
                        {comment.comment_reactions.map((reaction) => (
                          <IconButton key={reaction._id}>
                            {/* Depending on the reaction_type, show different icons */}
                            {reaction.reaction_type === "love" && (
                              <FavoriteIcon color="secondary" />
                            )}
                            {/* Add more reaction types as needed */}
                          </IconButton>
                        ))}
                      </div>
                    )}
                    {/* Display replies */}
                    {comment.replies.length > 0 && (
                      <div>
                        {comment.replies.map((reply) => (
                          <div key={reply._id}>
                            <Avatar
                              alt={`${reply.replies_user_id.first_name} ${reply.replies_user_id.last_name}`}
                              src={reply.replies_user_id.profile_pic}
                            />
                            <div>
                              <Typography variant="subtitle2">
                                {`${reply.replies_user_id.first_name} ${reply.replies_user_id.last_name}`}
                              </Typography>
                              <Typography variant="body2">
                                {reply.replies_comment_name}
                              </Typography>
                              {/* Display reply reactions */}
                              {reply.replies_comment_reactions.length > 0 && (
                                <div>
                                  {reply.replies_comment_reactions.map(
                                    (reaction) => (
                                      <IconButton key={reaction._id}>
                                        {/* Depending on the reaction_type, show different icons */}
                                        {reaction.reaction_type === "love" && (
                                          <FavoriteIcon color="secondary" />
                                        )}
                                        {/* Add more reaction types as needed */}
                                      </IconButton>
                                    )
                                  )}
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
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
