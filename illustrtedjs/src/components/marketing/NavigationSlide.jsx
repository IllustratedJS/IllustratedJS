import React from 'react';
import "./Navigation";

const NavSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.navigationLinks');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
  });
}

export default NavSlide;