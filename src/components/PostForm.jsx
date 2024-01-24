import { useState } from 'react';

const PostForm = () => {
  const [post, setPost] = useState({ title: '', body: '' });

  const handleOnChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(post);
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
  console.log(post);

  return (
    <form onSubmit={handleSubmit}>
      {renderField('Title')}
      {renderField('Body')}

      <button type='submit'>Submit</button>
    </form>
  );
};

export default PostForm;
