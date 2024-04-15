import Review from "./Review";

const ReviewList = ({reviews, deleteReview, patchReview}) => {

    const reviewComponents = reviews.map(review => {
        return <Review key={review.id}
                            review={review}
                            deleteReview={deleteReview}
                            patchReview={patchReview} 
                />
    })
    return (
        <>
            <div className="review-list">
                <ul>{reviewComponents}</ul>
            </div>
        </>
    );
};
 
export default ReviewList;