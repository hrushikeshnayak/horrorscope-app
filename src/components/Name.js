import React  from 'react'

const Name = ({onNameSelected}) => {
 const handleChange = (e) => {
  onNameSelected(e.target.value)
 }
  return (
    <div className='name-container'>
      <label className='name' for="name">Enter Your Name</label>
      <br/>
      <input type="text" className='name-input' onChange={handleChange}/>
    </div>
  )
}

export default Name
        