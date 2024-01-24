import { useParams } from 'react-router-dom';
import PostForm from '../components/PostForm';

const EditPost = () => {
  const { id } = useParams();
  return (
    <div>
      EditPost {id}
      <PostForm />
    </div>
  );
};

export default EditPost;
