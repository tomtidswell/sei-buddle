import React from 'react'
import Time from '../../lib/Time'

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
    </div>
  )
}

export default Comment
