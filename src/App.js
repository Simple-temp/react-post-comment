import React from 'react';
import './App.css';
import Header from './component/Header/Header';
import Post from './component/Post/Post';
import Comment from './component/Comment/Comment';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from './component/NotFound/NotFound';

function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
            <Route path="/" element={<Header/>}></Route>
            <Route path="/post" element={<Post/>}></Route>
            <Route path="/comment/:userId" element={<Comment/>}></Route>
            <Route path="/*" element={<NotFound/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
