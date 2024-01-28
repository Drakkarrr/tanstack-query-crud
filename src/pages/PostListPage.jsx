import { useNavigate } from 'react-router-dom';
import { fetchPosts } from '../api/posts';
import AddPost from '../components/AddPost';
import { useQuery } from '@tanstack/react-query';

const PostListPage = () => {
  const navigate = useNavigate();

  const {
    data: posts,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>{error.message}</div>;

  return (
    <>
      <AddPost />
      <br />
      {posts.map((post) => (
        <div key={post.id}>
          <h4
            className='button-text'
            onClick={() => navigate(`/post/${post.id}`)}>
            {post.title}
          </h4>
          <button onClick={() => navigate(`/post/${post.id}/edit`)}>
            Edit Post
          </button>{' '}
          <button>Delete Post</button>
        </div>
      ))}
    </>
  );
};

export default PostListPage;
