import React from 'react'

const EventsForm = ({ data, handleChange }) => (
  <form>
    <div className="field">
      <label className="label">Category</label>
      <div className="control">
        <select
          onChange={handleChange}
          value={data.category || ''}
        >
          <option>Sports/Leisure</option>
          <option>Skills</option>
          <option>Experiences</option>
          <option>Pet Playdates</option>
        </select>
      </div>
    </div>
    <div className="field">
      <label className="label">Subcategory</label>
      <div className="control">
        <select
          onChange={handleChange}
          value={data.subcategory || ''}
        >
        </select>
      </div>
    </div>
    <div className="field">
      <label className="label">Event Name</label>
      <div className="control">
        <input
          className="input"
          name="event-name"
          placeholder="Type the name of your event here"
          onChange={handleChange}
          value={data.name || ''}
        />
      </div>
    </div>
    <div className="field">
      <label className="label">Date</label>
      <div className="control">
        <input
          type="date"
          onChange={handleChange}
          value={data.date || ''}
        />
      </div>
    </div>
    <div className="field">
      <label className="label">Description</label>
      <div className="control">
        <textarea
          className="textarea"
          name="description"
          placeholder="Describe your event here"
          onChange={handleChange}
          value={data.description || ''}
        />
      </div>
    </div>
    <div className="field">
      <label className="label">Estimated Price</label>
      <div className="control">
        <label>£</label>
        <input
          className="input"
          name="price"
          placeholder="Estimated Price"
          onChange={handleChange}
          value={data.price || ''}
        />
      </div>
    </div>
    <div className="field">
      <label className="label">Location</label>
      <div className="field">
        <label>Postcode</label>
        <div className="control">
          <input
            className="input"
            name="postcode"
            placeholder="Postcode"
            onChange={handleChange}
            value={data.postcode || ''}
          />
          <p>Please provide full address to attendees within comment section</p>
        </div>
      </div>
    </div>
    <button type="submit">Create New Event</button>
  </form>
)

export default EventsForm
