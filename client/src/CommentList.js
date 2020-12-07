import React from 'react';

const CommentList = ({ comments }) => {
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
      {comments.length !== 0 && (
        <strong>
          {comments.length} {comments.length > 1 ? 'comments' : 'comment'}{' '}
        </strong>
      )}
      <ul>{renderedComments}</ul>
    </div>
  );
};

export default CommentList;
