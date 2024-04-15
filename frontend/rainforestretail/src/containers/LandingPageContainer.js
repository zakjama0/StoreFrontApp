import ItemList from "../components/ItemList";

import React, { useState } from "react";

const LandingPageContainer = ({items}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
    <>
        <div> 
        <ItemList items={items} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} category={"FASHION"} className="home_kitchen"/>
        <ItemList items={items} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} category={"ELECTRONICS"} className="home_kitchen"/>  

        
        </ div>
       

        {/* className="home_kitchen" */}
        
    </>  
    );
}
 
export default LandingPageContainer;