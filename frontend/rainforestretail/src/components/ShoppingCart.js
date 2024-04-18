import OrderList from "./OrderList";
import { userState } from "../containers/StoreContainer";
import { useContext, useState } from "react";

const ShoppingCart = ({ basketList, completeOrder }) => {

    const { activeCustomer } = useContext(userState);
    const [address, setAddress] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        completeOrder(basketList, activeCustomer.id, address);
        alert ("Order Complete. Thank you for Shopping at Rainforest Retail!");
    }

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
        </>
    );
}

export default ShoppingCart;