import React, { useEffect, useState } from 'react'
import {
  Logo
} from "../assets"
import pict from '../assets/logo.png'
import { useNavigate } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoClose } from 'react-icons/io5'

type NavbarProps = {}

const Navbar:React.FC<NavbarProps> = () => {
  const navigate = useNavigate()
  const [isResponsive, setIsResponsive] = useState(false)
  const [style, setStyle] = useState({home: "active", aboutUs: "unactive", tutorial: "unactive"})

  const handleClick = (path: string) => {
    if(isResponsive) setIsResponsive(!isResponsive)
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

  useEffect(() => {})


  return (
    <>
      <div className={`navbar ${isResponsive ? "hidden" : ""}`}>
        <div className="logo-wrapper" onClick={() => handleClick('/')}>
          {/* <Logo /> */}
          <img className="logo" src={pict} />
          <div className='logo-text'>LinkedClass</div>
        </div>
        <div className="link-info link-wrapper">
          <ul>
            <li className={`${style.home} home`} onClick={() => handleClick('/')}>Home</li>
            <li className={`${style.aboutUs} aboutus`} onClick={() => handleClick('/aboutUs')}>About Us</li>
            <li className={`${style.tutorial} tutorial`} onClick={() => handleClick('/tutorial')}>Tutorial</li>
          </ul>
        </div>
        <div className="link-cta">
          <ul>
            <li className="login">Login</li>
            <button className="signup" type="button">Get Started</button>
          </ul>
        </div>
        <GiHamburgerMenu className='hamburger-menu'size={30} onClick={() => setIsResponsive(!isResponsive)} />
        {/* responsive navbar */}
      </div>
      <div className={`navbar ${isResponsive ? "" : "hidden"} responsive-navbar`}>
        <div className="logo-wrapper" onClick={() => handleClick('/')}>
          {/* <Logo /> */}
          <img className="logo" src={pict} />
          <div className='logo-text'>LinkedClass</div>
        </div>
        <IoClose className='hamburger-menu'size={30} onClick={() => setIsResponsive(!isResponsive)} />
      </div>
      <div className={`animation navbar ${isResponsive ? "" : "hidden"} responsive-navbar`} style={{ width: "100%", height: "100vh"}}>
        <div className="">
          <ul>
            <li className={`${style.home} home`} onClick={() => handleClick('/')}>Home</li>
            <li className={`${style.aboutUs} aboutus`} onClick={() => handleClick('/aboutUs')}>About Us</li>
            <li className={`${style.tutorial} tutorial`} onClick={() => handleClick('/tutorial')}>Tutorial</li>

            <li className="login">Login</li>
            <button className="signup" type="button">Get Started</button>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar