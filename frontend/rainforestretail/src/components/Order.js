
const Order = ({item, orderQuantity}) => {
    return (
        <>
            <h3>{item.name}</h3>
            <p>Quantity: {orderQuantity}</p>
        </>
    );
}
 
export default Order;