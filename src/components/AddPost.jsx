import { useMutation } from '@tanstack/react-query';
import PostForm from './PostForm';

const AddPost = () => {
  const createPostMutation = useMutation({
    mutationFn: 
  });

  return (
    <>
      <h2>Add New Post</h2>
      <PostForm />
    </>
  );
};

export default AddPost;
