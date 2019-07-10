import React from 'react'

const Comment = ({ comments, handleCommentDelete, isOwnerComment }) => {
  if (!comments) return null
  return (
    <div>
      {comments.map(comment => (
        <div key={comment._id}>
          <div>
            {comment.text} - {new Date(comment.createdAt).toLocaleString()}
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
