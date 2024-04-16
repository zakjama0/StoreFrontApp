import { Link } from "react-router-dom";
import { useState } from "react";
import ItemThumbnail from "./ItemThumbnail";
import Slider from "react-slick";

const ItemList = ({items, category}) => {


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

    const filteredItems = items.filter(item => item.category === category);


    const itemComponents = filteredItems.map(item => {
        return (<Link to={`/items/${item.id}`} > <ItemThumbnail key={item.id} item={item} /> </Link>)
    });

    const loadItemComponents = () => {
      if(category == null){
        return items.map(item => {
          return <Link to={`/items/${item.id}`} > <ItemThumbnail key={item.id} item={item} /> </Link>;
        })
      }
      return filteredItems.map(item => {
        return <Link to={`/items/${item.id}`} > <ItemThumbnail key={item.id} item={item} /> </Link>;
      })
    }



    return (
        <>

        <div>
        
            <div className="itemLists" >
            
            
               <Slider {...settings}>
                
                {loadItemComponents()}

                
                
                
                </Slider>
  

            

            
            </div>


        </div>
        </>
    );
}
 
export default ItemList;