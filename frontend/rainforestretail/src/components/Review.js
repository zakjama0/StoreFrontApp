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
    
    
    
    
    </> );
}
 
export default Review;