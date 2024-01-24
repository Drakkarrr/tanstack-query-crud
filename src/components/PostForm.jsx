import { useState } from 'react';

const PostForm = () => {
  const [post, setPost] = useState({ title: '', body: '' });

  const renderField = (label) => (
    <div>
      <label>{label}</label>{' '}
      <input
        type='text'
        name={label.toLowerCase()}
        value={post[label.toLowerCase()]}
      />
    </div>
  );
  console.log(post);

  return (
    <form>
      {renderField('Title')}
      {renderField('Body')}
    </form>
  );
};

export default PostForm;
