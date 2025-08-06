import React, { useState } from 'react';

function AddBlogPage({ onAddBlog, onCancel }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = () => {
    if (!title || !content || !author) return alert('Fill all fields');
    onAddBlog({ title, content, author });
    setTitle('');
    setContent('');
    setAuthor('');
  };

  return (
    <div>
      <h2>➕ New Blog</h2>
      <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
      <input placeholder="Author" value={author} onChange={e => setAuthor(e.target.value)} />
      <textarea placeholder="Content" value={content} onChange={e => setContent(e.target.value)} />
      <button onClick={handleSubmit}>✅ Publish</button>
      <button onClick={onCancel}>❌ Cancel</button>
    </div>
  );
}

export default AddBlogPage;
