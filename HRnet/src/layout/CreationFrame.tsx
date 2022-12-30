import React from 'react';
import Capsule from './Capsule';
import Creation from '../features/Creation';


const CreationFrame : React.FC = () => {

  return (
    <>
      <Capsule child={<Creation />}/>
    </>
  )
}

export default CreationFrame;