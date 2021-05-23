import React, { useState } from "react";
import { useCreatePost } from "./hooks/useCreatePost";

const PostCreate = () => {
  const [title, setTtile] = useState("");
  const { isLoading, isError, error, mutate } = useCreatePost(title);

  const onSubmit = async (e) => {
    e.preventDefault();

    mutate(title);
    setTtile("");
  };

  if (isLoading)
    return (
      <div className='container d-flex justify-content-center'>Loading...</div>
    );
  if (isError)
    return (
      <div className='container d-flex justify-content-center'>
        {error.message}
      </div>
    );

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
