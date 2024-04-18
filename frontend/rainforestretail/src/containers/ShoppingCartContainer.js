import OrderList from "../components/OrderList";
import { userState } from "./StoreContainer";
import { useContext, useState } from "react";

const ShoppingCartContainer = ({ basketList, completeOrder }) => {

    const { activeCustomer } = useContext(userState);
    const [address, setAddress] = useState("");

    const totalCost = basketList.reduce((currentCost, basketListItem) => {
        return currentCost + (basketListItem.item.unitPrice * basketListItem.orderQuantity);
    }, 0);

    const handleSubmit = (event) => {
        event.preventDefault();
        completeOrder(basketList, activeCustomer.id, address, totalCost);
        alert("Order Complete. Thank you for Shopping at Rainforest Retail!");
    }

    console.log(totalCost);

    return (
        <>
            <div>
                <h2>Order: </h2>
                <OrderList basketList={basketList} />
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
        </>
    );
}

export default ShoppingCartContainer;