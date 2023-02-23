import React from 'react';
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import img4 from './img4.jpg';
import img5 from './img5.jpg';
import img6 from './img6.jpg';

export default function Gallery() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-12 asif'>
          <img src={img1} alt='logo'/>
          <img src={img2} alt='logo'/>
          <img src={img3} alt='logo'/>
        </div>
        <div className='col-md-12 asif'>
          <img src={img4} alt='logo'/>
          <img src={img5} alt='logo'/>
          <img src={img6} alt='logo'/>
        </div>
        <div className='col-md-12 asif'>
          <img src={img1} alt='logo'/>
          <img src={img2} alt='logo'/>
          <img src={img3} alt='logo'/>
        </div>
      </div>  
    </div>
  )
}
