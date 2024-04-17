import OrderList from "./OrderList";

const ShoppingCart = ({ basketList }) => {

    
    return (
        <>
            <div>
                <h2>Order: </h2>
                <OrderList basketList={basketList}/>
            </div>
        </>
    );
}
 
export default ShoppingCart;