import React from 'react';

function HomePage({ blogs, onBlogClick }) {
  return (
    <div>
      <h2>📖 All Blog Posts ({blogs.length})</h2>
      {blogs.length === 0 ? (
        <p>No blogs yet.</p>
      ) : (
        blogs.map(blog => (
          <div key={blog.id} onClick={() => onBlogClick(blog.id)} style={{ cursor: 'pointer', marginBottom: '15px', border: '1px solid #ccc', padding: '10px', borderRadius: '6px' }}>
            <h3>{blog.title}</h3>
            <p>By: {blog.author}</p>
            <p>{blog.content.substring(0, 100)}...</p>
          </div>
        ))
      )}
    </div>
  );
}

export default HomePage;
