import { Link } from "react-router-dom";
import ItemThumbnail from "./ItemThumbnail";

const ItemList = ({items, category, currentIndex, setCurrentIndex}) => {

    const filteredItems = items.filter(item => item.category === category);

    const itemComponents = filteredItems.map(item => {
        return <Link to={`/items/${item.id}`} > <ItemThumbnail key={item.id} item={item} /> </Link>
    })

    const scrollItems = (direction) => {
        const noItems = items.length;
        let newIndex = currentIndex;
    
        if (direction === 'next') {
          newIndex = (currentIndex + 1) % noItems;
        } else if (direction === 'prev') {
          newIndex = (currentIndex - 1 + noItems) % noItems;
        }
        setCurrentIndex(newIndex);
      };

    return (
        <>

        <div>
        
            <div className="itemLists" >
            <button className=" scroll-button prev" onClick={() => scrollItems('prev')}>Prev</button>
               <div className="items" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {itemComponents}
               </div>
            <button className="scroll-button next" onClick={() => scrollItems('next')}>Next</button>
            </div>


        </div>
        </>
    );
}
 
export default ItemList;