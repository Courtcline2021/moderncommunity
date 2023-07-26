import React, { useState } from 'react';

export default function Community(){
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      setComments([...comments, newComment]);
      setNewComment('');
    }
   };
  const handleCancelComment = (comment) => {
        const filteredComments = newComment.filter((e) => e !== comment);
        setNewComment(filteredComments);
   } 


  return (
    <div className="community--info">
      <h1>Community Dashboard</h1>
      <p>Add a comment to our Community Board! See what other members have in mind for and about community events! </p>
    <div className="community--input">
    <input
      type="text"
      value={newComment}
      onChange={(e) => setNewComment(e.target.value)}
      placeholder="Enter your comment"
      className="community-news"
    />
    <button  className="add-comment"onClick={handleAddComment}>Add Comment</button>
    <button className="delete-comment" onClick={handleCancelComment}>Delete Comment</button>
    </div>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
    </div>
  );
};

