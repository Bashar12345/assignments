import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, Avatar, Card, CardContent, CardMedia } from '@mui/material';
import { format } from 'date-fns';

const PostList = ({ posts, loading, loadMore, error }) => {
  const observer = useRef();

  const lastPostElementRef = useRef();

  useEffect(() => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        loadMore();
      }
    });
    if (lastPostElementRef.current) observer.current.observe(lastPostElementRef.current);
  }, [loading, loadMore]);

  if (error) return <Typography>Error loading posts: {error.message}</Typography>;

  return (
    <Box>
      {posts.map((post, index) => (
        <Card key={post._id} ref={index === posts.length - 1 ? lastPostElementRef : null} sx={{ marginBottom: 2 }}>
          <CardContent>
            <Box display="flex" alignItems="center">
              <Avatar src={post.user_id.profile_pic} alt={post.user_id.username} />
              <Box ml={2}>
                <Typography variant="h6">{`${post.user_id.first_name} ${post.user_id.last_name}`}</Typography>
                <Typography variant="body2" color="textSecondary">{format(new Date(post.createdAt), 'PPP')}</Typography>
              </Box>
            </Box>
            <Box mt={2}>
              <Typography variant="body1">{post.description}</Typography>
            </Box>
            {post.share_post_id && (
              <Card variant="outlined" sx={{ marginTop: 2 }}>
                <CardContent>
                  <Typography variant="body1">{post.share_post_id.description}</Typography>
                  <Typography variant="body2" color="textSecondary">{`Shared from ${post.share_post_id.user_id.first_name} ${post.share_post_id.user_id.last_name}`}</Typography>
                </CardContent>
              </Card>
            )}
            {post.media.length > 0 && (
              <CardMedia
                component="img"
                height="140"
                image={post.media[0]}
                alt="Post media"
              />
            )}
          </CardContent>
        </Card>
      ))}

      {loading && <Typography>Loading more posts...</Typography>}
    </Box>
  );
};

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool.isRequired,
  loadMore: PropTypes.func.isRequired,
  error: PropTypes.object,
};

export default PostList;
