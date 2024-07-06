import useFetchPosts from '../api/getAllusersPosts';
import PostList from '../pages/post/PostList';
import { Typography } from '@mui/material';

const NewsFeed = () => {
  const { posts, loading, error, loadMore } = useFetchPosts();

  if (error) return <Typography>Error loading posts: {error.message}</Typography>;

  return (
    <PostList
      posts={posts}
      loading={loading}
      loadMore={loadMore}
      error={error}
    />
  );
};

export default NewsFeed;
