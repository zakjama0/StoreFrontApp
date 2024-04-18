import React, { useContext, useEffect, useState } from 'react';
import { userState } from './StoreContainer';

const YourOrder = ({ orders }) => {

    const { activeCustomer } = useContext(userState);

    const filteredOrders = orders.filter(order => order.customer.id === activeCustomer.id);

    console.log(filteredOrders);

    return (
        <div>
            <h1>Your orders:</h1>
            {filteredOrders.length > 0 ? (
                filteredOrders.map(order => (
                    <div key={order.id}>
                        <h3>Ordered Items:</h3>
                        <ul>
                            {order.orderedItems.map(orderedItem => (
                                <li key={orderedItem.id}>
                                    {orderedItem.item.name} - Quantity: {orderedItem.orderedQuantity}
                                </li>
                            ))}
                        </ul>
                        <p>Address: {order.address}</p>
                        {/* <p>Total Order Cost: £{}</p> */}
                    </div>
                ))
            ) : (
                <p>No orders found for the active customer.</p>
            )}
        </div>
    );
};

export default YourOrder;
