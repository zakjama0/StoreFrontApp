import ItemList from "../components/ItemList";

const LandingPageContainer = ({items}) => {

    return (
    <>
        <ItemList items={items} category={"HOME_AND_KITCHEN"}/>
        <ItemList items={items} category={"ELECTRONICS"}/>
    </>  
    );
}
 
export default LandingPageContainer;