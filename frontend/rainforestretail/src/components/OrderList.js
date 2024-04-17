import Order from "./Order";

const OrderList = ({ basketList }) => {

    const basketComponents = basketList.map(basketItem => {
        return <Order key={basketItem.itemId}/>
    })

    return (
        <>
        
        </>
    );
}

export default OrderList;