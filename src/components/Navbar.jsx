import React, {useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import {styles} from '../style';
import {navLinks} from '../constants';
import {logo, menu, close} from '../assets';

const Navbar = () => {
  return (
    <nav className={`${styles.paddingX}`}></nav>
  )
}

export default Navbar