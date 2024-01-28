import { useQuery } from '@tanstack/react-query';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchPost } from '../api/posts';

const Post = () => {
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

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>{error.message}</div>;

  console.log(post);

  return (
    <>
      <div>
        Post {id} <br /> <br />
        <button onClick={() => navigate(-1)}>Back to list Post</button>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    </>
  );
};

export default Post;
