import { useContext, useState } from "react";
import { userState } from "../containers/StoreContainer";


const Review = ({ review, deleteReview, editReview }) => {


    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    const [expandStatus, setExpandStatus] = useState(false);
    const [expandEdit, setExpandEdit] = useState(false);
    const { activeCustomer } = useContext(userState);

    const handleDeleteButton = () => {
        deleteReview(review.id);
    }

    const handleEditSubmit = (event) => {
        event.preventDefault();
        editReview({
            rating: rating,
            comment: comment
        });
    }

    const expandEditForm = () => {
            return <form onSubmit={handleEditSubmit}>
                <div className="reviews-form">
                    <label htmlFor="rating">Rating:</label>
                    <input
                        type="number"
                        id="rating"
                        value={rating}
                        onChange={(event) => setRating(parseInt(event.target.value))}
                        min={1}
                        max={5}
                        required
                    />
                </div>
                <div className="review-comment">
                    <label htmlFor="comment">Comment:</label>
                    <textarea
                        id="comment"
                        value={comment}
                        rows="4" cols="50"
                        onChange={(event) => setComment(event.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="review-btn">Submit Review</button>
            </form>
    }

    const toggleExpandEdit = () => {
        setExpandEdit((expandEdit) => !expandEdit);
    }

    const toggleExpandStatus = () => {
        setExpandStatus((expandStatus) => !expandStatus);
    }

    const toggleButtonLabel = () => {
        if (!expandStatus) {
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
                {activeCustomer.id === review.customer.id ?
                    <button onClick={handleDeleteButton}>Delete</button> :
                    <></>}
                {activeCustomer.id === review.customer.id ?
                    <button onClick={expandEditForm}>
                        EDIT
                    </button> :
                    <></>}
            </div>
        </>);
}

export default Review;