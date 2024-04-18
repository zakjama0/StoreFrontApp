import React, { useContext, useEffect, useState } from 'react';
import { userState } from './StoreContainer';

const YourOrder = ({ orders }) => {

    const { activeCustomer } = useContext(userState);

    const filteredOrders = orders.filter(order => order.customer.id === activeCustomer.id);

    const [orderCosts, setOrderCosts] = useState({});

    const getOrderCost = async (order) => {
        const response = await fetch(`http://localhost:8080/orders/order-cost/${order.id}`);
        const data = await response.json();
        return data;
    }
    
    useEffect(() => {
        const fetchOrderCosts = async () => {
            const orderCostPromises = filteredOrders.map(getOrderCost);
            const orderCosts = await Promise.all(orderCostPromises);
            setOrderCosts(orderCosts);
        }
        fetchOrderCosts();
    }, []);

    console.log(orderCosts);

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
                        <p>Total Order Cost: £{orderCosts[order.id - 1]}</p>
                    </div>
                ))
            ) : (
                <p>No orders found for the active customer.</p>
            )}
        </div>
    );
};

export default YourOrder;
