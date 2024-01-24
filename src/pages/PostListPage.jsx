import { fetchPosts } from '../api/posts';
import AddPost from '../components/AddPost';
import { useQuery } from '@tanstack/react-query';

const PostListPage = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });

  console.log(data);

  return (
    <div>
      <AddPost />
      <br />
      List Here
    </div>
  );
};

export default PostListPage;
