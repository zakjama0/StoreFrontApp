import ItemList from "../components/ItemList";

const LandingPageContainer = ({items}) => {

    return (
    <>
        <div> 
        <ItemList items={items} category={"FASHION"} className="home_kitchen"/>
        <ItemList items={items} category={"ELECTRONICS"} className="home_kitchen"/>  

        
        </ div>
       

        {/* className="home_kitchen" */}
        
    </>  
    );
}
 
export default LandingPageContainer;