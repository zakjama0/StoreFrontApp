import React from 'react';
import DraggableCardSlider from '../components/DraggableCardSlider'; 

const LandingPageContainer = ({ items }) => {
    
    const fashionItems = items.filter(item => item.category === 'FASHION');
    const electronicsItems = items.filter(item => item.category === 'ELECTRONICS');

    return (
        <>
            <div className='handleLists'>
                <DraggableCardSlider items={fashionItems} category="Fashion" />

               
                <DraggableCardSlider items={electronicsItems} category="Electronics" />
            </div>
        </>
    );
}

export default LandingPageContainer;
