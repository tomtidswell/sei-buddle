import React from 'react'
import Time from '../../lib/Time'

const Comment = ({ comment, handleCommentDelete, isOwnerComment }) => {
  if (!comment) return null
  if (!comment.user) return null

  return (
    <div className="comment">
      <div className="comment-content">
        <img className="comment-avatar" src={comment.user.picture} title={comment.user.username}/>
        <p>{comment.text}</p>
      </div>
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
