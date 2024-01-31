export const fetchPosts = async () => {
  const response = await fetch('http://localhost:3000/posts');
  return response.json();
};

export const fetchPost = async (id) => {
  const response = await fetch(`http://localhost:3000/posts/${id}`);
  return response.json();
};

export const createPost = async (newPost) => {
  const response = await fetch(`http://localhost:3000/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newPost),
  });
  return response.json();
};

export const updatePost = async (updatedPost) => {
  const response = await fetch(`http://localhost:3000/posts/${updatePost.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatePost),
  });
  return response.json();
};
