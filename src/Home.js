import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import AppsIcon from '@material-ui/icons/Apps'
import { Avatar } from '@material-ui/core'
import Search from './Search'

function Home() {
  return (
    <div className='home'>
      <div className='home__header'>
        <div className='home__headerLeft'>
          {/**Link tag does not refresh so it better to use this */}
          <a href='https://about.me/sairambalu/'>About</a>
          <Link to='/store'>Store</Link>
        </div>
        <div className='home__headerRight'>
          <a href='https://www.gmail.com'>Gmail</a>
          <Link to='/images'>Image</Link>
          {/*Icon */}
          <AppsIcon />
          <Avatar />
          {/**Avatar */}
        </div>
      </div>
      <div className='home__body'>
        <img
          src='https://res.cloudinary.com/demo/image/fetch/f_auto/https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
          alt='logo'
        ></img>
        <div className='home__inputContainer'>
          {/**search */}
          <Search />
        </div>
      </div>
    </div>
  )
}

export default Home
