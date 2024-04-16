import { useState } from "react";

const ReviewForm = ({onSubmit, postReview}) => {

    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        postReview({rating, comment});
    }


    return (
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="rating">Rating:</label>
            <input
            type="number"
            id="rating"
            value={rating}
            onChange= {(event)=> setRating(parseInt(event.target.value))}
            min={1}
            max={5}
            required
        />
    </div>
    <div>
        <label htmlFor="comment">Comment:</label>
        <textarea
            id="comment"
            value={comment}
            onChange={(event) => setComment(event.target.value)}
            required
        />
    </div>
    <button type="submit">Submit Review</button>
</form>
);
};
 
export default ReviewForm;