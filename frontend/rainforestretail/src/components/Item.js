import React, { useState } from 'react';
import DraggableCardSlider from './DraggableCardSlider'; 
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';
import { useLoaderData } from 'react-router-dom';
import Popup from 'reactjs-popup';

const Item = ({ deleteReview, patchReview, postReview, addToBasket }) => { 
    const item = useLoaderData();
    const [quantity, setQuantity] = useState(0);

    const handleSubmit = (event) =>{
        event.preventDefault();

        addToBasket({
            item: item,
            orderQuantity: quantity
        });
        alert ("Item has been added to basket.");
    }
    
    return (
        <>
            {item ? (
                <div className='item-container'>

                    <div className='item-image'>
                        <img src={item.picture} />

                        {
                            item.reviews.length === 0 ?
                            <></>
                            :
                                {item.quantity > 0 ?
                                      <form className='add-basket'  onSubmit={handleSubmit}>
                                          <div>
                                              <label htmlFor="rating">Quantity:</label>
                                              <input
                                              type="number"
                                              id="rating"
                                              value={quantity}
                                              onChange= {(event)=> setQuantity(parseInt(event.target.value))}
                                              min={1}
                                              max={item.quantity}
                                              required
                                              />
                                          </div>
                                          <button type="submit" className='btn'>Add to Basket</button>
                                      </form> :
                                  <h1>SOLD OUT</h1>
                                 }
                        }
              
                    </div>

                    <div className='item-details'>

                        <div className='item-text'>
                            <h2>{item.name}</h2>
                            <p>{item.description}</p>
                            <p>Price: £{(item.unitPrice / 100).toFixed(2)}</p>

                        </div>
                    <Popup trigger=
                    {<button className='btn'> Create a review </button>} 
                    modal nested>
                    {
                    close => (
                        <div className='modal'>
                            <div className='review-form'>
                            <h3>Submit a review</h3>
                            <ReviewForm itemId = {item.id} postReview={postReview} />
                            </div>
                            <div>
                                <button className="btn" onClick=
                                    {() => close()}>
                                        Close Review
                                </button>
                            </div>
                        </div>
                         )
                     }
                     </Popup>


                        {
                            item.reviews.length === 0 ?
                            <div>
                            <h1> Be the first to review! </h1>
                            <form className='add-basket'  onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="rating">Quantity:</label>
                                    <input
                                    type="number"
                                    id="rating"
                                    value={quantity}
                                    onChange= {(event)=> setQuantity(parseInt(event.target.value))}
                                    min={1}
                                    required
                                    />
                                </div>
                                 <button type="submit" className='btn'>Add to Basket</button>
                             </form>
                            </div>
                            :
                            <div>
                                <h1>Reviews:</h1>                      
                                <div className='review-list'>
                                    <ReviewList reviews={item.reviews} deleteReview={deleteReview} patchReview={patchReview} />
                                </div>

                             </div>
                        }

                       
                        

                        
                
                    </div>

                </div>
            ) : (<></>)
            }
        </>
    );
}
 
export default Item;
