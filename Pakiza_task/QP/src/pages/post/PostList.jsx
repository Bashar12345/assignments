import React, { useEffect, useState } from 'react';
import { Container, Typography, Card, CardContent, CardActions, Button } from '@mui/material';
// import axios from '../api/axios';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // const response = await axios.get('/api/posts');
        // setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Posts</Typography>
      {posts.map(post => (
        <Card key={post.id} style={{ marginBottom: '20px' }}>
          <CardContent>
            <Typography variant="h5">{post.title}</Typography>
            <Typography variant="body2">{post.content}</Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">Like</Button>
            <Button size="small" color="primary">Comment</Button>
          </CardActions>
        </Card>
      ))}
    </Container>
  );
};

export default PostList;
