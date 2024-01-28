import { useMutation, useQueryClient } from '@tanstack/react-query';
import PostForm from './PostForm';
import { createPost } from '../api/posts';
import { v4 as uuidv4 } from 'uuid';

const AddPost = () => {
  const queryClient = useQueryClient();

  const createPostMutation = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries('posts');
      alert('Post added successfully!');
    },
  });

  const handleAddPost = (post) => {
    createPostMutation.mutate({
      id: uuidv4(),
      ...post,
    });
  };

  return (
    <>
      <h2>Add New Post</h2>
      <PostForm onSubmit={handleAddPost} />
    </>
  );
};

export default AddPost;
