import { useLoaderData } from 'react-router-dom';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';
import { useState } from "react";


const Item = ({deleteReview, patchReview, postReview}) => {

    const item = useLoaderData();
    const[showAlert, setShowAlert] = useState(false);

    const handleReviewSubmission = (reviewData) => {
        console.log("Submitting review:", reviewData)
        setShowAlert(true);
    }

    return (
        <>
            {item ? 
            (
                <div>
                    {item.name}
                    <div className='review-list'>
                        <ReviewList reviews={item.reviews} deleteReview={deleteReview} patchReview={patchReview}/>
                    </div>
                    <div className='review-form'>
                        <h3>Submit a review</h3>
                        <ReviewForm onSubmit={handleReviewSubmission} />
                    </div>
                    {showAlert && (
                        <div className='alert'>
                            Review submitted successfully
                        </div>
                    )}
                </div>
            ) :
            <></>
            }

        </>
    );
}
 
export default Item;