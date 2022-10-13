import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import Home from './pages/Home';
import PostList from './pages/PostList';
import PostWrite from './pages/PostWrite';
import Search from './pages/Search';
import Settings from './pages/Settings';
  
function App() {

  return ( // 화면
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/postlist" element={<PostList />} />
        <Route path="/postwrite" element={<PostWrite />} />
        <Route path="/search" element={<Search />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </>
  );
}

export default App;
