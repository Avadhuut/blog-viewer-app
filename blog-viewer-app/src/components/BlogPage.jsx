import React from 'react';

function BlogPage({ blog, onBackClick }) {
  if (!blog) return <p>Blog not found</p>;

  return (
    <div>
      <button onClick={onBackClick}>← Back</button>
      <h1>{blog.title}</h1>
      <p><strong>By:</strong> {blog.author}</p>
      <div>{blog.content}</div>
    </div>
  );
}

export default BlogPage;
