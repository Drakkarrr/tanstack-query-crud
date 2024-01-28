import { useMutation } from '@tanstack/react-query';
import PostForm from './PostForm';

const AddPost = () => {
  const createPostMutation = useMutation({
    mutationFn: createPostMutation,
  });

  return (
    <>
      <h2>Add New Post</h2>
      <PostForm />
    </>
  );
};

export default AddPost;
