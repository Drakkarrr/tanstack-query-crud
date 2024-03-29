import { useState } from 'react';

const PostForm = ({ onSubmit, initialValue }) => {
  const [post, setPost] = useState({
    title: initialValue.title || '',
    body: initialValue.body || '',
  });

  const handleOnChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(post);
    setPost({ title: '', body: '' });
  };

  const renderField = (label) => (
    <div>
      <label>{label}</label>{' '}
      <input
        type='text'
        name={label.toLowerCase()}
        value={post[label.toLowerCase()]}
        onChange={handleOnChange}
      />
    </div>
  );

  return (
    <form onSubmit={handleSubmit}>
      {renderField('Title')}
      {renderField('Body')}
      <br />
      <button type='submit'>Submit</button>
    </form>
  );
};

export default PostForm;
