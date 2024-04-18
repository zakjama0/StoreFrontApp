import OrderList from "../components/OrderList";
import { userState } from "./StoreContainer";
import { useContext, useState } from "react";

const ShoppingCartContainer = ({ basketList, completeOrder, removeFromBasket }) => {

    const { activeCustomer } = useContext(userState);
    const [address, setAddress] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        completeOrder(basketList, activeCustomer.id, address);
        alert("Order Complete. Thank you for Shopping at Rainforest Retail!");
    }

    const totalCost = basketList.reduce((currentCost, basketListItem) => {
        return currentCost + (basketListItem.item.unitPrice * basketListItem.orderQuantity);
    }, 0);

    console.log(totalCost);

    return (
        <>

            {  basketList.length === 0 ? 
            <div className="cartContainer">
                    <h1 className="emptyCart">Explore our page and add items to your basket!</h1>

            <div className="order-container">
                <h2>Order: </h2>
                <OrderList basketList={basketList} removeFromBasket={removeFromBasket} />
                <form onSubmit={handleSubmit}>
                    <div className="order-address">
                        <label htmlFor="address">Address:</label>
                        <textarea
                            id="address"
                            value={address}
                            onChange={(event) => setAddress(event.target.value)}
                            required
                        />
                    </div>
                    <div className="order-discount">
                        <label htmlFor="Discount Code">Discount Code:</label>
                        <textarea
                            id="discount-code"
                        />
                    </div>
                    <button type="submit">Complete Order</button>
                </form>
                <div className = "total-cost">
                <h1>Total Cost: £{(totalCost / 100).toFixed(2)}</h1>
                </div>

            </div>
            
             :
             
             <div className="cartContainer"> 
             <div>
             <h2>Order: </h2>
             <OrderList basketList={basketList} removeFromBasket={removeFromBasket} />
             <form onSubmit={handleSubmit}>
                 <div>
                     <label htmlFor="address">Address:</label>
                     <textarea
                         id="address"
                         value={address}
                         onChange={(event) => setAddress(event.target.value)}
                         required
                     />
                 </div>
                 <button type="submit">Complete Order</button>
             </form>
         </div>
         <div>
             <h1>Total Cost: £{(totalCost / 100).toFixed(2)}</h1>
         </div> 
        </div> 
             }
        </>
    );
}

export default ShoppingCartContainer;