import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './capsule.scss';


interface ComponentsProps {
  child: any
}

const Capsule : React.FC<ComponentsProps> = ({child}) => {

  return (
    <div className='capsule'>
      <Header />
      {child}
      <Footer />
    </div>
  )
}

export default Capsule;