import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './capsule.scss';


const Header : React.FC = () => {
  const navigate = useNavigate();
 
 
  return (
    <div className='header'>
      <div className='header__left'>
        logo
      </div>

      <nav>
        <button> View Current Employees </button>
        <button> Sign Out </button>
      </nav>
    </div>
  )
}

export default Header;