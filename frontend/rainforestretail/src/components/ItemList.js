import { Link } from "react-router-dom";
import ItemThumbnail from "./ItemThumbnail";

const ItemList = ({items, category}) => {

    const filteredItems = items.filter(item => item.category === category);

    const itemComponents = filteredItems.map(item => {
        return <Link to={`/items/${item.id}`}> <ItemThumbnail key={item.id} item={item} /> </Link>
    })

    return (
        <>
            <ul>
                {itemComponents}
            </ul>
        </>
    );
}
 
export default ItemList;