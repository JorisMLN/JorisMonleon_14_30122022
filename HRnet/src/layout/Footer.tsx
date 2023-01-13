import React from 'react';
import './capsule.scss';
import logo from '../assets/wealthHealthLogo.jpg';
import Paper from '@mui/material/Paper';

const Footer : React.FC = () => {

  return (
    <Paper elevation={10} className='footer'>
      <img alt='logo' src={logo}></img>
    </Paper>
  )
}

export default Footer;