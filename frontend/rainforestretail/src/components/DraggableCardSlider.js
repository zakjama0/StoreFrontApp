import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import ItemThumbnail from './ItemThumbnail';
import './DraggableCardSlider.css';

const DraggableCardSlider = ({ items }) => {
  const sliderRef = useRef(null);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleSlide = (direction) => {
    const step = 200; 
    const newScrollLeft = direction === 'left' ? scrollLeft - step : scrollLeft + step;
    sliderRef.current.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth'
    });
    setScrollLeft(newScrollLeft);
  };

  return (
    <div className="slider-container">
     
     
      


      <div className="button-container">
        <button className="slide-button left" onClick={() => handleSlide('left')}>{'<'}</button>
        <div className="slider" ref={sliderRef}>
        {items.map((item, index) => (
          <Link to={`/items/${item.id}`} key={index}>
            <div className="card">
              <ItemThumbnail item={item} />
            </div>
          </Link>
        ))}
      </div>
        <button className="slide-button right" onClick={() => handleSlide('right')}>{'>'}</button>
      </div>
    </div>
  );
};

export default DraggableCardSlider;