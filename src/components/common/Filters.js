import React from 'react'
//import { Link } from 'react-router-dom'

const subcategories = [
  { value: 'football', label: 'Football', category: 'sports' },
  { value: 'tennis', label: 'Tennis', category: 'sports' },
  { value: 'hockey', label: 'Hockey', category: 'sports' },
  { value: 'basketball', label: 'Basketball', category: 'sports' },
  { value: 'other', label: 'Other', category: 'sports' },
  { value: 'languages', label: 'Languages', category: 'skills' },
  { value: 'music', label: 'Music', category: 'skills' },
  { value: 'art', label: 'Art', category: 'skills' },
  { value: 'other', label: 'Other', category: 'skills' },
  { value: 'museum', label: 'Museum', category: 'experiences' },
  { value: 'gallery', label: 'Gallery', category: 'experiences' },
  { value: 'wildlife', label: 'Zoo/Wildlife', category: 'experiences' },
  { value: 'tours', label: 'Tours', category: 'experiences' },
  { value: 'other', label: 'Other', category: 'experiences' },
  { value: 'dogs', label: 'Dogs', category: 'pet-playdates' },
  { value: 'cats', label: 'Cats', category: 'pet-playdates' },
  { value: 'other', label: 'Other', category: 'pet-playdates' }
]

const Filters = ({ data, handleChange, deleteFilter }) => {

  //console.log('Data for filters', data, 'keys:',Object.keys(data))

  return (
    <nav>
      <div className="applied-filters">
        {Object.keys(data).map((filter,i) => {
          let text = data[filter]
          if (filter === 'price') text = 'Free only'
          return <span key={i} onClick={()=>deleteFilter(filter)}>{text}</span>
        })}
      </div>
      <form className="sticky">
        <label className="cat-filter">
          <input type="radio"
            checked={data.category === 'sports'}
            name="category"
            onChange={handleChange}
            value="sports"/> Sport
        </label>


        {subcategories
          .filter(subCat => subCat.category === 'sports')
          .map((subCat,i) => (
            <label key={i}
              className={`sub-cat-filter ${data.category === 'sports' ? 'active' : 'inactive' }`}>
              <input type="radio"
                checked={data.subcategory === subCat.value}
                name="subcategory"
                onChange={handleChange}
                value={subCat.value}/>
              <span>{subCat.label}</span>
            </label>
          ))
        }

        <label className="cat-filter">
          <input type="radio"
            checked={data.category === 'skills'}
            name="category"
            onChange={handleChange}
            value="skills"/> Skills
        </label>

        {subcategories
          .filter(subCat => subCat.category === 'skills')
          .map((subCat,i) => (
            <label key={i}
              className={`sub-cat-filter ${data.category === 'skills' ? 'active' : 'inactive' }`}>
              <input type="radio"
                checked={data.subcategory === subCat.value}
                name="subcategory"
                onChange={handleChange}
                value={subCat.value}/>
              <span>{subCat.label}</span>
            </label>
          ))
        }

        <label className="cat-filter">
          <input type="radio"
            checked={data.category === 'experiences'}
            name="category"
            onChange={handleChange}
            value="experiences"/> Experiences
        </label>

        {subcategories
          .filter(subCat => subCat.category === 'experiences')
          .map((subCat,i) => (
            <label key={i}
              className={`sub-cat-filter ${data.category === 'experiences' ? 'active' : 'inactive' }`}>
              <input type="radio"
                checked={data.subcategory === subCat.value}
                name="subcategory"
                onChange={handleChange}
                value={subCat.value}/>
              <span>{subCat.label}</span>
            </label>
          ))
        }


        <label className="cat-filter">
          <input type="radio"
            checked={data.category === 'pet-playdates'}
            name="category"
            onChange={handleChange}
            value="pet-playdates"/> Pet playdates
        </label>

        {subcategories
          .filter(subCat => subCat.category === 'pet-playdates')
          .map((subCat,i) => (
            <label key={i}
              className={`sub-cat-filter ${data.category === 'pet-playdates' ? 'active' : 'inactive' }`}>
              <input type="radio"
                checked={data.subcategory === subCat.value}
                name="subcategory"
                onChange={handleChange}
                value={subCat.value}/>
              <span>{subCat.label}</span>
            </label>
          ))
        }

        <hr />

        <label className="cat-filter">
          <input type="checkbox"
            checked={data.price === '0'}
            name="price"
            onChange={handleChange}
            value="0"/> Free events only
        </label>



      </form>
    </nav>
  )
}

export default Filters
