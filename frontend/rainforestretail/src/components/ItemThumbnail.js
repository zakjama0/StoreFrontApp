import { Link } from "react-router-dom";

const ItemThumbnail = ({item}) => {

    return (
        <>
        <div className="thumbnail">
            <img className="item-picture" src = {item.picture} />
            <h4> {item.name}</h4>
        </div>
        </>
    );
}
 
export default ItemThumbnail;