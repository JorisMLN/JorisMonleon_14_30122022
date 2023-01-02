import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './modalManager.scss';

const ModalManager = ({toHandle} : any) => {
  const navigate = useNavigate();

  const toDisplay = () => {
    navigate('/display');
  }

  return (
    <>
      {
        toHandle ===  true ?
        <div className='modalManager'>
          <div className='modalManager__bloc'> 
            <p>Employee Created!</p>
            <button onClick={() => toDisplay()}> To employee display page</button>
          </div>
        </div>
        :
        'test'
      }
    </>
  )
}

export default ModalManager;