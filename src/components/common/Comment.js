import React from 'react'
import Time from '../../lib/Time'

const Comment = ({ comment, handleCommentDelete, isOwnerComment }) => {
  if (!comment) return null
  if (!comment.user) return null

  return (
    <div className="comment">
      <p>{comment.text}</p>
      <p className="comment-footer">
        <img className="comment-avatar" src={comment.user.picture} title={comment.user.username}/>
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
