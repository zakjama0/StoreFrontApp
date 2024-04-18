import Order from "./Order";
import React from 'react';

const OrderList = ({ basketList, removeFromBasket }) => {

    const handleRemoveItem = (itemId) => {
        removeFromBasket(itemId);
    };

    return (
        <>
            <ul>
                {basketList.map(basketItem => (
                    <li key={basketItem.item.id}>
                        <Order item={basketItem.item} orderQuantity={basketItem.orderQuantity} />
                        <button onClick={() => handleRemoveItem(basketItem.item.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default OrderList;
