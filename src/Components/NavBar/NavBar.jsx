
import { useState, useEffect } from 'react';
import { FiSearch } from "react-icons/fi";
import { FaRegBell } from "react-icons/fa";
import "./NavBar.css"

function Navbar() {

  const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  return (
    <div className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="netflix-logo" />
        <div className="items">
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>News & Popular</li>
          <li>My List</li>
          <li>Browse By Languages</li>
        </div>
        <div className="rightItems">
        
        <p>
        <FiSearch size={25}/>
        </p>
        <p>
        <FaRegBell size={25}/>
        </p>
        <img className="avatar" src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar" />
        </div>
    </div>
  )
}

export default Navbar