import useFetchPosts from '../api/getAllusersPosts';
import PostList from '../pages/post/PostList';
import { Container, Typography } from '@mui/material';

const NewsFeed = () => {
  const { posts, loading, error, loadMore } = useFetchPosts();

  if (error) return <Typography>Error loading posts: {error.message}</Typography>;

  return (
    <Container>
    <PostList
      posts={posts}
      loading={loading}
      loadMore={loadMore}
      error={error}
    />
    </Container>
  );
};

export default NewsFeed;
