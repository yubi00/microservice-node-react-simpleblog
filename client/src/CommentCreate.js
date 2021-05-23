import React, { useState } from "react";
import { useCreateComments } from "./hooks/useCreateComments";

const CommentCreate = ({ postId }) => {
  const [content, setContent] = useState("");
  const { isLoading, isError, error, mutate } = useCreateComments(
    postId,
    content
  );

  const onSubmit = async (e) => {
    e.preventDefault();

    mutate(content);
    setContent("");
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
          <label htmlFor='' className='font-weight-bold'>
            New Comment
          </label>
          <input
            type='text'
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className='form-control'
          />
        </div>
        <button className='btn btn-primary'>Submit</button>
      </form>
    </div>
  );
};

export default CommentCreate;
