import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Blogs } from './pages/blogs';
import { Post } from './pages/post';
import { NoRoute } from './pages/404';
import { NewPost } from './pages/newPost';
// import { Header } from './components/common/Header';
// import { Footer } from './components/common/Footer';
import { Layout } from './Layout';

function App() {
  return (
    <div className="layout">
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Blogs/>}/>
            <Route path='list/:tab' element={<Blogs/>}/>
            <Route path='details/:post' element={<Post/>}/>
            <Route path='create/new' element={<NewPost/>}/>
            <Route path='*' element={<NoRoute/>}/>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
