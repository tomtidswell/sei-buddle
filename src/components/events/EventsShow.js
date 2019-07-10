import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Auth from '../../lib/Auth'

import Comment from '../common/Comment'
import CommentForm from '../common/CommentForm'

class EventsShow extends React.Component {
  constructor() {
    super()

    this.state = { event: null, comment: { text: '' } }
    this.handleDelete = this.handleDelete.bind(this)
    this.handleCommentChange = this.handleCommentChange.bind(this)
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this)
    this.handleCommentDelete = this.handleCommentDelete.bind(this)
  }

  componentDidMount() {
    this.getData()
  }

  getData() {
    axios.get(`/api/events/${this.props.match.params.id}`)
      .then(res => this.setState({ event: res. data }))
      .catch(err => console.log(err))
  }

  handleCommentSubmit(e){
    e.preventDefault()
    console.log('trying to submit comment')
    axios.post(`/api/events/${this.props.match.params.id}/comments`, this.state.comment, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(() => {
        const comment = { ...this.state.comment, text: '' }
        this.setState({ comment }, () => this.getData())
      })
      .catch(err => console.log(err.response))

  }

  handleCommentChange({ target: { name, value } }) {
    const comment = { ...this.state.comment, [name]: value }
    this.setState({ comment })
  }

  isOwner() {
    return Auth.getPayload().sub === this.state.event.user._id
  }

  isOwnerComment(comment) {
    console.log('hi', comment)
    return Auth.getPayload().sub === comment.user
  }

  handleDelete() {
    axios.delete(`/api/events/${this.props.match.params.id}  `, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(() => this.props.history.push('/index'))
      .catch(err => console.log(err.response))
  }

  handleCommentDelete(comment) {
    axios.delete(`/api/events/${this.props.match.params.id}/comments/${comment._id}`, {
      headers: { 'Authorization': Auth.getToken() }
    })
      .then(() => this.getData())
      .catch(err => console.log(err))
  }

  render() {
    if (!this.state.event) return null
    console.log(this.state)
    const { event } =  this.state
    return (
      <main className="section">
        <div className="container">
          <h2 className="title">{event.name}</h2>
          <h4 className="title">Description</h4>
          <p>{event.description}</p>
          <hr />
          <h4 className="title">Date</h4>
          <p>{new Date(event.date).toLocaleDateString()}</p>
          <hr />
          <h4 className="title">Location</h4>
          <p>{event.postcode}</p>
          <hr />
          <Comment
            comments={this.state.event.comments}
            isOwnerComment={this.isOwnerComment}
          />
          {Auth.isAuthenticated() &&
            <CommentForm
              text={this.state.comment.text}
              handleCommentChange={this.handleCommentChange}
              handleCommentSubmit={this.handleCommentSubmit}
            />}
          {
            this.isOwner() &&
            <div>
              <button onClick={this.handleDelete}>Delete</button>
              <Link
                className="button"
                to={`/events/${event._id}/edit`}
              >
                Edit
              </Link>
            </div>
          }
        </div>
      </main>
    )
  }
}

export default EventsShow
