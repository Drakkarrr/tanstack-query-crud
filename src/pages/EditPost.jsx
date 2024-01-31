import { useNavigate, useParams } from 'react-router-dom';
import PostForm from '../components/PostForm';
import { fetchPost, updatePost } from '../api/posts';
import { useMutation, useQuery } from '@tanstack/react-query';

const EditPost = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const {
    data: post,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['posts', id],
    queryFn: () => fetchPost(id),
  });

  const updatePostMutation = useMutation({
    mutationFn: updatePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
      navigate('/');
    },
  });

  const handleSubmit = (updatePost) => {
    updatePostMutation.mutate({ id, ...updatePost });
    alert('Post updated successfully!');
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>{error.message}</div>;

  return (
    <div>
      EditPost {id}
      <PostForm initialValue={post} onSubmit={handleSubmit} />
      <br />
      <button onClick={() => navigate('/')}>Back to list Post</button>
    </div>
  );
};

export default EditPost;
