import React from 'react';
import DraggableCardSlider from '../components/DraggableCardSlider'; // Import the DraggableCardSlider component
import Slideshow from '../components/SlideShow';

const LandingPageContainer = ({ items }) => {
    // Dummy data for cards (adjust this according to your requirements)
    const fashionItems = items.filter(item => item.category === 'FASHION');
    const electronicsItems = items.filter(item => item.category === 'ELECTRONICS');

    return (
        <>
            <div className='handleLists'>
                <DraggableCardSlider items={fashionItems} category="Fashion" />
            </div>

            <Slideshow />

            <div className='handleLists'>
                <DraggableCardSlider items={electronicsItems} category="Electronics" />
            </div>
        </>
    );
}

export default LandingPageContainer;
