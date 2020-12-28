import React from 'react'
import { Link } from 'react-router-dom'
import './Error.css'

function Error() {
  return (
    <div className='error'>
      <center>
        <img
          src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.seroundtable.com%2Fgoogle-404-page-13028.html&psig=AOvVaw0uSEniJe7imV1Akr5-jwzQ&ust=1609172632270000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLC-k67J7u0CFQAAAAAdAAAAABAD'
          alt=''
          style={{ height: '300px', width: '300px' }}
        ></img>
      </center>
      <Link to='/'>Go to Home Page</Link>
    </div>
  )
}

export default Error
