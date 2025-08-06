import React, { useState, useEffect } from 'react';
import fakeBlogDatabase from './data/fakeBlogDatabase';
import HomePage from './components/HomePage';
import BlogPage from './components/BlogPage';
import AddBlogPage from './components/AddBlogPage';

function App() {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    setBlogs(fakeBlogDatabase);
  }, []);

  const goToHomePage = () => {
    setCurrentPage('home');
    setSelectedBlog(null);
  };

  const goToBlogPage = (blogId) => {
    const blog = blogs.find(b => b.id === blogId);
    setSelectedBlog(blog);
    setCurrentPage('blog');
  };

  const goToAddPage = () => {
    setCurrentPage('add');
  };

  const addNewBlog = (data) => {
    const newBlog = { id: blogs.length + 1, ...data };
    setBlogs([newBlog, ...blogs]);
    goToHomePage();
  };

  let content;
  if (currentPage === 'home') {
    content = <HomePage blogs={blogs} onBlogClick={goToBlogPage} />;
  } else if (currentPage === 'blog') {
    content = <BlogPage blog={selectedBlog} onBackClick={goToHomePage} />;
  } else if (currentPage === 'add') {
    content = <AddBlogPage onAddBlog={addNewBlog} onCancel={goToHomePage} />;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>📚 Simple Blog App</h1>
      <button onClick={goToHomePage}>🏠 Home</button>
      <button onClick={goToAddPage}>➕ Add Blog</button>
      <hr />
      {content}
    </div>
  );
}

export default App;
