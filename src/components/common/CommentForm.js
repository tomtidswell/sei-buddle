import React from 'react'

const CommentForm = ({ text, handleCommentChange, handleCommentSubmit }) => (
  <form onSubmit={handleCommentSubmit}>
    <div className="field">
      <div className="control">
        <textarea
          name="text"
          className="textarea"
          placeholder="Comments...."
          value={text || ''}
          onChange={handleCommentChange}
        >
        </textarea>
      </div>
    </div>
    <button className="button" type="submit">Comment</button>
  </form>
)

export default CommentForm
