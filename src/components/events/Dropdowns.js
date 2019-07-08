import React from 'react'
import Select from 'react-select'

class Dropdowns extends React.Component {
  constructor() {
    super()
    this.state = {
      selectedOption: { },
      selectedOption2: { }
    }

    this.handleChange1 = this.handleChange1.bind(this)
    this.handleChange2 = this.handleChange2.bind(this)
  }

  handleChange1(selectedOption) {
    this.setState({ selectedOption })
  }


  handleChange2(selectedOption){
    this.setState({ selectedOption2: selectedOption })
  }

  render() {

    const options1 = [
      { value: 'sports', label: 'Sports/Leisure' },
      { value: 'skills', label: 'Skills' },
      { value: 'experiences', label: 'Experiences' },
      { value: 'pet-playdates', label: 'Pet Playdates' }
    ]

    const options2 = [
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

    const filteredOptions = options2.filter(o => o.link === this.state.selectedOption.value)

    console.log('filter:', this.state.selectedOption.value)

    return (
      <div className="field">
        <label className="label">Choose a category</label>
        <Select
          name="form-field-name"
          defaultValue={this.state.selectedOption.value}
          onChange={this.handleChange1}
          options={options1}
        />
        <label className="label">Choose a subcategory</label>
        <Select
          name="form-field-name"
          defaultValue={this.state.selectedOption2.value}
          onChange={this.handleChange2}
          options={filteredOptions}
        />
      </div>
    )
  }
}

export default Dropdowns
