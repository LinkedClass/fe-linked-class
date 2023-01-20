import React, { useState } from 'react'
import {
  Logo
} from "../assets"
import { useNavigate } from 'react-router-dom'

type NavbarProps = {}

const Navbar:React.FC<NavbarProps> = () => {
  const navigate = useNavigate()
  const [style, setStyle] = useState({home: "active", aboutUs: "unactive", tutorial: "unactive"})

  const handleClick = (path: string) => {
    switch (path) {
      case '/aboutUs':
        setStyle({
          home: "unactive",
          aboutUs: "active",
          tutorial: "unactive"
        })
        break;
      case '/tutorial':
        setStyle({
          home: "unactive",
          aboutUs: "unactive",
          tutorial: "active"
        })
        break;
      default:
        setStyle({
          home: "active",
          aboutUs: "unactive",
          tutorial: "unactive"
        })
        break;
    }
    navigate(path)
  }


  return (
    <div className='navbar grid-container'>
      <div className="logo-wrapper" onClick={() => handleClick('/')}>
        <Logo />
        <div className='logo-text'>LinkedClass</div>
      </div>
      <div className="link-info">
        <ul>
          <li className={style.home} onClick={() => handleClick('/')}>Home</li>
          <li className={style.aboutUs} onClick={() => handleClick('/aboutUs')}>About Us</li>
          <li className={style.tutorial} onClick={() => handleClick('/tutorial')}>Tutorial</li>
        </ul>
      </div>
      <div className="link-cta">
        <ul>
          <li className="login">Login</li>
          <li className="signup">Sign Up</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar