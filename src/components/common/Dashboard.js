import React from 'react'
import Modal from './Modal'

class Dashboard extends React.Component {
  constructor() {
    super()

    this.state = { show: null }

    this.showModal = this.showModal.bind(this)
  }

  showModal() {
    this.setState({ show: true })
  }

  render() {
    return (
      <main>
        <div className="open-modal-container">
          <button
            className="open-modal"
            type="button"
            onClick={this.showModal}>
            Browse Categories
          </button>
          {this.state.show &&
            <Modal
              show={this.state.show}>
            </Modal>
          }
        </div>
      </main>
    )
  }
}

export default Dashboard
