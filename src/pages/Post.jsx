import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { fetchPost } from '../api/posts';

const Post = () => {
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
        <button>Create Post</button>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    </>
  );
};

export default Post;
