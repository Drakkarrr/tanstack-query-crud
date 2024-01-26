import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { fetchPost } from '../api/posts';

const Post = () => {
  const { id } = useParams();

  const {
    data: posts,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: () => fetchPost(id),
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>{error.message}</div>;

  console.log(posts);

  return (
    <>
      <div>Post {id}</div>
    </>
  );
};

export default Post;
