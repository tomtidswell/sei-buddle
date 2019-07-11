import React from 'react'

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
    </div>
  )
}

export default Comment
