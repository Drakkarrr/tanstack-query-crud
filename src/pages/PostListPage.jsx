import { useNavigate } from 'react-router-dom';
import { deletePost, fetchPosts } from '../api/posts';
import AddPost from '../components/AddPost';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

const PostListPage = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {
    data: posts,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });

  const deletePostMutation = useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
      alert('Post deleted successfully!');
    },
  });

  const handleDeletePost = (id) => {
    deletePostMutation.mutate(id);
  };

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
          <button onClick={() => handleDeletePost(post.id)}>Delete Post</button>
        </div>
      ))}
    </>
  );
};

export default PostListPage;
