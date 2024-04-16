import React from "react";
import { Link } from "react-router-dom";
import ItemThumbnail from "./ItemThumbnail";

const ItemList = ({ items, category }) => {
  const filteredItems = category ? items.filter((item) => item.category === category) : items;

  const itemComponents = filteredItems.map(item => (
    <Link to={`/items/${item.id}`} key={item.id}>
      <ItemThumbnail item={item} />
    </Link>
  ));

  return (
    <div>
      <div className="itemLists">
        <div className="items">
          {itemComponents}
        </div>
      </div>
    </div>
  );
};

export default ItemList;



// import { Link } from "react-router-dom";
// import { useState } from "react";
// import { Carousel } from "react-responsive-carousel";
// import ItemThumbnail from "./ItemThumbnail";

// const ItemList = ({items, category}) => {
//     const [currentIndex, setCurrentIndex] = useState(0);

//     const filteredItems = items.filter(item => item.category === category);


//     const itemComponents = filteredItems.map(item => {
//         return (<Link to={`/items/${item.id}`} > <ItemThumbnail key={item.id} item={item} /> </Link>)
//     });

//     const loadItemComponents = () => {
//       if(category == null){
//         return items.map(item => {
//           return <Link to={`/items/${item.id}`} > <ItemThumbnail key={item.id} item={item} /> </Link>;
//         })
//       }
//       return filteredItems.map(item => {
//         return <Link to={`/items/${item.id}`} > <ItemThumbnail key={item.id} item={item} /> </Link>;
//       })
//     }

//     const scrollItems = (direction) => {
//         const noItems = items.length;
//         let newIndex = currentIndex;
    
//         if (direction === 'next') {
//           newIndex = (currentIndex + 1) % (Math.ceil(noItems/5));
//         } else if (direction === 'prev') {
//           newIndex = (currentIndex - 1 + noItems) % (Math.ceil(noItems/5));
//         }
//         setCurrentIndex(newIndex);
//       };

    

//     // function handleClick(direction) {
//     //     // Based on the direction we call `scrollBy` with the item width we got earlier
//     //     if(direction === "previous") {
//     //       list.scrollBy({ left: -itemWidth, behavior: "smooth" });
//     //     } else {
//     //       list.scrollBy({ left: itemWidth, behavior: "smooth" });
//     //     }
//     //   }

//     return (
//         <>

//         <div>
        
//             <div className="itemLists" >
            
               
//             <button className=" scroll-button prev" onClick={() => scrollItems('prev')}>Prev</button>

//                <div className="items" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
//                 {loadItemComponents()}
//                </div>
            
//                <button className="scroll-button next" onClick={() => scrollItems('next')}>Next</button>

            

            
//             </div>


//         </div>
//         </>
//     );
// }
 
// export default ItemList;