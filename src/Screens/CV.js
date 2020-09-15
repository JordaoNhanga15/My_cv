import React from 'react';

import '../Screens/style/CV.css';
import Cv from '../components/Cv'
import  Asi from '../components/Asi' 

function Screens() { 
  return (
      <div className='containere'>
          <Cv className='Cv'/>
          <Asi className='Asi'/>
      </div>
  );
}

export default Screens;