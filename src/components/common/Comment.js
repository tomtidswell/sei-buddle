import React from 'react'

<<<<<<< HEAD
const Comment = ({ comments, handleCommentDelete, isOwnerComment }) => {
  if (!comments) return null
  console.log(comments)
  return (
    <div>
      {comments.map(comment => (
        <div key={comment._id}>
          <div>
            <img className="avatar" src={comment.user.picture} title={comment.user.username}/> - {comment.user.username} - {comment.text} - {new Date(comment.createdAt).toLocaleString()}
          </div>
          {isOwnerComment(comment) &&
            <button
              className="button"
              onClick={() => handleCommentDelete(comment)}
            >
              Delete
            </button>}
        </div>
      ))}
      <hr />
=======
const Comment = ({ comment, handleCommentDelete, isOwnerComment }) => {
  if (!comment) return null
  return (
    <div className="comment">
      <p>{comment.text}</p>
      <p className="comment-footer">
        {comment.user.username}&nbsp; | &nbsp;
        {Time.timeSince(comment.createdAt)}
        {isOwnerComment(comment) &&
          <span onClick={() => handleCommentDelete(comment)} className="delete-comment">
            &nbsp; | &nbsp;Delete
          </span>
        }
      </p>
>>>>>>> development
    </div>
  )
}

export default Comment
