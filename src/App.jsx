import { Route, Routes } from 'react-router-dom';
import './App.css';
import PostListPage from './pages/PostListPage';
import Post from './pages/Post';

function App() {
  return (
    <>
      <h1>Hello World!</h1>

      <Routes>
        <Route path='/' element={<PostListPage />} />
        <Route path='/post/:id' element={<Post />} />
        <Route path='/' element={<PostListPage />} />
      </Routes>
    </>
  );
}

export default App;
