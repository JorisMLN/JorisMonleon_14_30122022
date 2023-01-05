import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './modalManager.scss';

interface ModalProps {
  toHandle: boolean;
  message: string;
  routing: string;
}

const ModalManager = ({toHandle, message, routing} : ModalProps) => {
  const navigate = useNavigate();

  const toDisplay = () => {
    navigate(routing);
  }

  return (
    <>
      {
        toHandle ===  true ?
        <div className='modalManager'>
          <div className='modalManager__bloc'> 
            <p>{message}</p>
            <button onClick={() => toDisplay()}> To employee display page </button>
          </div>
        </div>
        :
        null
      }
    </>
  )
}

export default ModalManager;