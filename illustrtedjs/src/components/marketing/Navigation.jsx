import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../AuthButton';
import logo from '../../assets/iJS-logo.png';
import './Navigation.css';
import BurgerMenu from "./BurgerMenu.jsx";
import Modal from "./Modal.jsx";

const Navigation = () => {

  function handleSlide(e) {
    const nav = document.querySelector('.navigationLinks');
    const eachLink = document.querySelectorAll('.navigationLinks li')

    e.preventDefault();
    // Toggle Navigation to slide in/out on Burger Menu click
    nav.classList.toggle('nav-slide-active')

    // Animate individual link to enter on Burger Menu
    eachLink.forEach((link, index) => {
      if(link.style.animation) {
        link.style.animation = ``
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 4 + .3}s`
      }
    })
  }


  return (
    <nav className="navigation">
      <div className="navigationLogo-box">
        <img src={logo} className="navigationLogo"/>
      </div>
      <div className='navigationLinks-box'>

      <ul className="navigationLinks">
        <li>
          <NavLink
            className="navLink"
            activeClassName="navLinkActive"
            exact
            to="/"
            >
            Why Illustrated JS?
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Content"
            activeClassName="navLinkActive"
            className="navLink"
            >
            Curriculum
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Purchase"
            activeClassName="navLinkActive"
            className="navLink"
            >
            Purchase
          </NavLink>
        </li>
        <li>
          <Button text="Log In" />
        </li>

      </ul>
      </div>
      <div className="burger" onClick={handleSlide}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>

  );
};

export default Navigation;
