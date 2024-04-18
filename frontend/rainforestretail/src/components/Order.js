
const Order = ({item, orderQuantity}) => {
    return (
        <>
            <div className="thumbnail">
            <img src = {item.picture} />
            <h4> {item.name}</h4>
            <p>Quantity: {orderQuantity}</p>
        </div>
        </>
    );
}
 
export default Order;