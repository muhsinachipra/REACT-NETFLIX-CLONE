import React from 'react'
import './NavBar.css'

function NavBar() {
  return (


    <div class="navbar">
      <div class="logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix Logo" />
      </div>
      <div class="links">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">TV Shows</a></li>
          <li><a href="#">Movies</a></li>     
          <li><a href="#">New & Popular</a></li>
          <li><a href="#">My List</a></li>
          <li><a href="#">Browse by Language</a></li>
        </ul>
      </div>
      <div class="profile">
        <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar" />
      </div>
    </div>
  )
}

export default NavBar


{/* <div className='navbar'>
      <div className="left">
      <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix Logo" />
      <p>Home</p>
      <p>TV Shows</p>
      <p>Movies</p>
      <p>New & Popular</p>
      <p>My List</p>
      <p>Browse by Languages</p>
      </div>

      <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar" />
    </div> */}