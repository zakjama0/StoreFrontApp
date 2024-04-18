import Order from "./Order";

const OrderList = ({ basketList }) => {

    const basketComponents = basketList.map(basketItem => {
        return <li> <Order key={basketItem.item.id} item={basketItem.item} orderQuantity={basketItem.orderQuantity} /></li>
    })

    return (
        <>
            <div className="basketList">
                <ul>
                {basketComponents} 
                </ul>
                </div>
        </>
    );
}

export default OrderList;