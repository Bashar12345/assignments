import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import Login from './pages/Login';
import Register from './pages/Register';
import PostList from './pages/post/PostList';
import StoryList from './pages/story/StoryList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<AppLayout />}>
          <Route path="home" element={<PostList />} />
          <Route path="posts" element={<PostList />} />
          <Route path="stories" element={<StoryList />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
