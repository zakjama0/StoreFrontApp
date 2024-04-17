import OrderList from "./OrderList";
import { userState } from "../containers/StoreContainer";
import { useContext } from "react";

const ShoppingCart = ({ basketList, completeOrder }) => {

    const {activeCustomer, setActiveCustomer}  = useContext(userState);

    const handleClick = (event) => {
        event.preventDefault();
        completeOrder(basketList, activeCustomer.id);
    }
    
    return (
        <>
            <div>
                <h2>Order: </h2>
                <OrderList basketList={basketList}/>
                <button onClick={handleClick}>Complete Order</button>
            </div>
        </>
    );
}
 
export default ShoppingCart;