import React from 'react'
import Select from 'react-select'

//import Dropdowns from './Dropdowns'

const EventsForm = ({ data, handleChange, handleCatChange, handleSubCatChange, handleSubmit }) => {

  const category = [
    { value: 'sports', label: 'Sports/Leisure' },
    { value: 'skills', label: 'Skills' },
    { value: 'experiences', label: 'Experiences' },
    { value: 'pet-playdates', label: 'Pet Playdates' }
  ]

  const subcategory = [
    { value: 'football', label: 'Football', link: 'sports' },
    { value: 'tennis', label: 'Tennis', link: 'sports' },
    { value: 'hockey', label: 'Hockey', link: 'sports' },
    { value: 'basketball', label: 'Basketball', link: 'sports' },
    { value: 'other', label: 'Other', link: 'sports' },
    { value: 'languages', label: 'Languages', link: 'skills' },
    { value: 'music', label: 'Music', link: 'skills' },
    { value: 'art', label: 'Art', link: 'skills' },
    { value: 'other', label: 'Other', link: 'skills' },
    { value: 'museum', label: 'Museum', link: 'experiences' },
    { value: 'gallery', label: 'Gallery', link: 'experiences' },
    { value: 'wildlife', label: 'Zoo/Wildlife', link: 'experiences' },
    { value: 'tours', label: 'Tours', link: 'experiences' },
    { value: 'other', label: 'Other', link: 'experiences' },
    { value: 'dogs', label: 'Dogs', link: 'pet-playdates' },
    { value: 'cats', label: 'Cats', link: 'pet-playdates' },
    { value: 'other', label: 'Other', link: 'pet-playdates' }
  ]

  let filteredOptions = null

  //console.log(data)

  if (data.category)
    filteredOptions = subcategory.filter(o => o.link === data.category)

  //console.log('filter:', filteredOptions)

  return (
    <form onSubmit={handleSubmit}>

      <div className="field">
        <label className="label">Choose a category</label>
        <Select
          name="form-field-name"
          defaultValue={data.category.value || ''}
          onChange={(e)=>handleCatChange(e)}
          options={category}
        />
        <label className="label">Choose a subcategory</label>
        <Select
          name="form-field-name"
          defaultValue={data.subcategory.value || ''}
          onChange={handleSubCatChange}
          options={filteredOptions}
        />
      </div>
      <div className="field">
        <label className="label">Event Name</label>
        <div className="control">
          <input
            className="input"
            name="name"
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
            name="date"
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

}

export default EventsForm

// <label>Address Line One</label>
// <div className="control">
//   <input
//     className="input"
//     name="address-line-one"
//     placeholder="Address Line One"
//   />
// </div>
// <label>Address Line Two</label>
// <div className="control">
//   <input
//     className="input"
//     name="address-line-two"
//     placeholder="Address Line Two"
//   />
// </div>
// <label>City</label>
// <div className="control">
//   <input
//     className="input"
//     name="city"
//     placeholder="City"
//   />
// </div>
