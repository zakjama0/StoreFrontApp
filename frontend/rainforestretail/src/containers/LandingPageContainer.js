import ItemList from "../components/ItemList";

import React, { useState } from "react";

const LandingPageContainer = ({items}) => {
   
  


    return (
    <>
        <div> 


        


        <ItemList items={items}  category={"FASHION"} className="fashion"/>


        <ItemList items={items} category={"ELECTRONICS"} className="home_kitchen"/>  

        
        </ div>
       

        
    </>  
    );
}
 
export default LandingPageContainer;