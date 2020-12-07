import React, { useState } from 'react';
import axios from 'axios';

const PostCreate = () => {
  const [title, setTtile] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();

    await axios.post('http://posts.com/posts/create', {
      title
    });
    setTtile('');
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor=''>Title</label>
          <input
            type='text'
            value={title}
            onChange={(e) => setTtile(e.target.value)}
            className='form-control'
          />
        </div>
        <button className='btn btn-primary'>Submit</button>
      </form>
    </div>
  );
};

export default PostCreate;
