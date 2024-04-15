import ItemList from "../components/ItemList";

const BrowseItemsContainer = ({items}) => {


    return ( 
        <>
            <ItemList items={items} />
        </>
     );
}
 
export default BrowseItemsContainer;