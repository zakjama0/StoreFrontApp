import { Link } from "react-router-dom";
import ItemThumbnail from "./ItemThumbnail";

const ItemList = ({items}) => {
    const itemComponents = items.map(item => {
        return <Link > <ItemThumbnail key={item.id} item={item} /> </Link> 
    });

    return (
        <>
            <ul>
                {itemComponents}
            </ul>
        </>
    );
}
 
export default ItemList;