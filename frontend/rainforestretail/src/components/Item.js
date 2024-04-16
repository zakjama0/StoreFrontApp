import React from 'react';
import DraggableCardSlider from './DraggableCardSlider'; 
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';

const Item = ({ item, deleteReview, patchReview, postReview }) => { 
    return (
        <>
            {item ? (
                <div>
                   
                    <DraggableCardSlider items={item.reviews} />

                    
                    <div className='review-list'>
                        <ReviewList reviews={item.reviews} deleteReview={deleteReview} patchReview={patchReview}/>
                    </div>

                    
                    <div className='review-form'>
                        <h3>Submit a review</h3>
                        <ReviewForm onSubmit={postReview} />
                    </div>

                </div>
            ) : (
                <></>
            )}
        </>
    );
}
 
export default Item;
