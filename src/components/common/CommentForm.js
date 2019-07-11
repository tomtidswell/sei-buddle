import React from 'react'

const CommentForm = ({ text, handleCommentChange, handleCommentSubmit }) => (
  <div >
    <div className="field">
      <div className="control">
        <textarea
          name="text"
          className="textarea input comment"
          placeholder="Leave a comment...."
          value={text || ''}
          onChange={handleCommentChange}
        >
        </textarea>
      </div>
    </div>
    <button className="button" onClick={handleCommentSubmit}>Comment</button>
  </div>
)

export default CommentForm
