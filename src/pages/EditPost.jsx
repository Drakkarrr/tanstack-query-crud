import { useNavigate, useParams } from 'react-router-dom';
import PostForm from '../components/PostForm';
import { fetchPost } from '../api/posts';
import { useQuery } from '@tanstack/react-query';

const EditPost = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleSubmit = (post) => {
    console.log(post);
    // navigate('/');
  };

  const {
    data: post,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['posts', id],
    queryFn: () => fetchPost(id),
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>{error.message}</div>;

  return (
    <div>
      EditPost {id}
      <PostForm initialValue={post} onSubmit={handleSubmit} />
    </div>
  );
};

export default EditPost;
