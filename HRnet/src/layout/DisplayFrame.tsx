import React from 'react';
import Capsule from './Capsule';
import Display from '../features/display/Display';


const DisplayFrame : React.FC = () => {

  return (
    <>
      <Capsule child={<Display />}/>
    </>
  )
}

export default DisplayFrame;