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

  // const getCategory = (items,event)=>{

  //  
  // }



//
  return (
    <>
    <div className="slider-container">
     
      <div className="button-container">
        <button className="slide-button left" onClick={() => handleSlide('left')}> <i class="fa-solid fa-arrow-left"></i></button>
        <h1>Category: {items[0].category.charAt(0) + items[0].category.slice(1).toLowerCase()} </h1>
        <div className="slider" ref={sliderRef}>
        {items.map((item, index) => (
          <Link to={`/items/${item.id}`} key={index}>
            <div className="card">
              <ItemThumbnail item={item} />
            </div>
          </Link>
        ))}
      </div>
        <button className="slide-button right" onClick={() => handleSlide('right')}> <i class="fa-solid fa-arrow-right"></i></button>
      </div>
    </div>
    </>
  );
};

export default DraggableCardSlider;
