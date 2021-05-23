import React from 'react';
import CommentCreate from './CommentCreate';
import CommentList from './CommentList';
import { usePosts } from './hooks/usePosts';

const PostList = () => {
 const { data, error, isError, isLoading } = usePosts() 
  if(isLoading) return <div className='container d-flex justify-content-center'>Loading...</div>
  if(isError) return <div className='container d-flex justify-content-center'>{error.message}</div>

  const renderedPosts =data.map((post) => (
    <div
      key={post.id}
      className='card'
      style={{ width: '30%', marginBottom: '20px' }}
    >
      <div className='card-body'>
        <h3>{post.title}</h3>
        <CommentList postId={post.id} />
        <CommentCreate postId={post.id} />
      </div>
    </div>
  ));

  return (
    <div className='d-flex flex-row flex-wrap justify-content-between'>
      {renderedPosts}
    </div>
  );
};

export default PostList;
