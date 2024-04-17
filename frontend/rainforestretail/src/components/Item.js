import React, { useState } from 'react';
import DraggableCardSlider from './DraggableCardSlider'; 
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';
import { useLoaderData } from 'react-router-dom';

const Item = ({ deleteReview, patchReview, postReview, addToBasket }) => { 
    const item = useLoaderData();
    const [quantity, setQuantity] = useState(0);

    const handleSubmit = (event) =>{
        event.preventDefault();

        addToBasket({
            item: item,
            orderQuantity: quantity
        });
    }
    
    return (
        <>
            {item ? (
                <div className='item-container'>

                    <div className='item-image'>
                        <img src={item.picture} />
                    </div>

                    <div className='item-details'>

                        <div className='item-text'>
                            <h2>{item.name}</h2>
                            <p>{item.description}</p>
                            <p>Price: £{(item.unitPrice / 100).toFixed(2)}</p>

                        </div>

                        <div className='review-list'>
                            <ReviewList reviews={item.reviews} deleteReview={deleteReview} patchReview={patchReview} />
                        </div>

                        <div className='review-form'>
                            <h3>Submit a review</h3>
                            <ReviewForm itemId = {item.id} postReview={postReview} />
                        </div>

                        <form className='add-basket' onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="rating">Quantity:</label>
                                <input
                                type="number"
                                id="rating"
                                value={quantity}
                                onChange= {(event)=> setQuantity(parseInt(event.target.value))}
                                min={0}
                                max={5}
                                required
                                />
                            </div>
                            <button type="submit">Add to Basket</button>
                        </form>

                    </div>

                </div>
            ) : (<></>)
            }
        </>
    );
}
 
export default Item;
