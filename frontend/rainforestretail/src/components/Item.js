import { useLoaderData } from 'react-router-dom';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';


const Item = ({deleteReview, patchReview}) => {

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
                    
                </div>
            ) :
            <></>
            }

        </>
    );
}
 
export default Item;