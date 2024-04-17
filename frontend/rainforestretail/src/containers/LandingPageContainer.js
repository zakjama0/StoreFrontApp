import React from 'react';
import DraggableCardSlider from '../components/DraggableCardSlider'; // Import the DraggableCardSlider component

const LandingPageContainer = ({ items }) => {
    // Dummy data for cards (adjust this according to your requirements)
    const fashionItems = items.filter(item => item.category === 'FASHION');
    const electronicsItems = items.filter(item => item.category === 'ELECTRONICS');

    return (
        <>
            <div className='handleLists'>
                
                <DraggableCardSlider items={fashionItems} category="Fashion" />

                {/* Render DraggableCardSlider for Electronics category */}
                <DraggableCardSlider items={electronicsItems} category="Electronics" />
            </div>
        </>
    );
}

export default LandingPageContainer;
