import React from 'react';
import DraggableCardSlider from './DraggableCardSlider'; 
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';
import { useLoaderData } from 'react-router-dom';

const Item = ({ deleteReview, patchReview, postReview }) => { 
    
    const item = useLoaderData();
    
    return (
        <>
            {item ? (
                <div>
                   
                

                    <div className='item-image'>
                    <img src = {item.picture} />
                    </div>
                    <div className='item-text'>
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                    </div>
                    <div className='review-list'>
                        <ReviewList reviews={item.reviews} deleteReview={deleteReview} patchReview={patchReview}/>
                    </div>

                    
                    <div className='review-form'>
                        <h3>Submit a review</h3>
                        <ReviewForm postReview={postReview} />
                    </div>

                </div>
            ) : (
                <></>
            )}
        </>
    );
}
 
export default Item;
