import React from 'react';
import { useComments } from './hooks/useComments';

const CommentList = ({ postId }) => {
  const { data, isLoading, isError, error } = useComments(postId)


  if(isLoading) return <div className='container d-flex justify-content-center'>Loading...</div>
  if(isError) return <div className='container d-flex justify-content-center'>{error.message}</div>

  const comments = Object.values(data.data)

  const renderedComments = comments.map((comment) => {
    let content;

    if (comment.status === 'approved') {
      content = comment.content;
    }
    if (comment.status === 'pending') {
      content = 'Awaiting moderation';
    }

    if (comment.status === 'rejected') {
      content = 'comment rejected';
    }

    return <li key={comment.id}>{content}</li>;
  });

  return (
    <div>
      {
      comments.length !== 0 && (
        <strong>
          {comments.length} {comments.length > 1 ? 'comments' : 'comment'}{' '}
        </strong>
      )}
      <ul>{renderedComments}</ul>
    </div>
  );
};

export default CommentList;
