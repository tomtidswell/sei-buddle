import React from 'react'
import Time from '../../lib/Time'

const Comment = ({ comments, handleCommentDelete, isOwnerComment }) => {
  if (!comments) return null
  return (
    <div>
      {comments.map(comment => (
        <div key={comment._id}>
          <div>
            <div>
              {comment.text} - {comment.user.username}
            </div>
            <div>
              {Time.timeSince(comment.createdAt)}
              {isOwnerComment(comment) &&
                <span onClick={() => handleCommentDelete(comment)}>
                  &nbsp; | Delete
                </span>
              }
            </div>
          </div>

        </div>
      ))}
      <hr />
    </div>
  )
}

export default Comment
