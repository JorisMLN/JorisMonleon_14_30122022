import React from 'react';
import Header from './Header';
// import './capsule.scss';


interface ComponentsProps {
  child: any
}

const Capsule : React.FC<ComponentsProps> = ({child}) => {

  return (
    <div className='capsule'>
      <Header />
      {child}
    </div>
  )
}

export default Capsule;