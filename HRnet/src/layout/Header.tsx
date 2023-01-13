import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import './capsule.scss';
import Paper from '@mui/material/Paper';



const Header : React.FC = () => {
  const [isCreation, setIsCreation] = useState<boolean>(true);
  const navigate = useNavigate();

  const toView = () => {
    navigate('/display');
  }

  const toCreate = () => {
    navigate('/');
  }
 
  useEffect(() => {
    const actualPath : string = document.location.href;

    if(actualPath === 'http://127.0.0.1:5173/' || actualPath === 'http://127.0.0.1:5174/'){
      setIsCreation(true);
    } else {
      setIsCreation(false);
    }
  }, [])
 
  return (
    <Paper elevation={10} className='header'>
  
      <div className='header__left'>
        <h1>HRnet</h1>
      </div>

      <nav>
        {
          isCreation === true ? 
            <Button className='btn' variant="contained" onClick={() => toView()}> View Current Employees </Button> 
            : 
          <Button className='btn' variant="contained" onClick={() => toCreate()}> Back to Creation page </Button>
        }
        <Button className='btn' variant="contained"> Sign Out </Button>
      </nav>

    </Paper>
  )
}

export default Header;