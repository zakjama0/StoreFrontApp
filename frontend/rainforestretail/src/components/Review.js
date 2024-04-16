import { useState } from "react";

const Review = ({review, deleteReview, patchReview}) => {


    const [expandStatus, setExpandStatus] = useState(false);


const handleDeleteButton = () => {
    deleteReview(review.id);
}

const toggleExpandStatus = () => {
    setExpandStatus((expandStatus) => !expandStatus);
}

const toggleButtonLabel = () => {
    if(!expandStatus){
        return "More"
    }
    return "Less"
}


    return ( 
    <>
    <div className="reviews">
    <h3>{review.customer.name}</h3>
    <p>Rating: {review.rating}</p>
    {expandStatus && <p>Comment: {review.comment}</p>}
                <button onClick={toggleExpandStatus}>
                    {toggleButtonLabel()}
                </button>
                <button onClick={handleDeleteButton}>Delete</button>
            </div>
    </> );
}
 
export default Review;