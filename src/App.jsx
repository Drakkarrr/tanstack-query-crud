import { Route, Routes } from 'react-router-dom';
import './App.css';
import PostListPage from './pages/PostListPage';
import Post from './pages/Post';
import EditPost from './pages/EditPost';

function App() {
  return (
    <>
      <h1>Hello Tanstack Query!</h1>

      <Routes>
        <Route path='/' element={<PostListPage />} />
        <Route path='/post/:id' element={<Post />} />
        <Route path='/post/:id/edit' element={<EditPost />} />
      </Routes>
    </>
  );
}

export default App;
