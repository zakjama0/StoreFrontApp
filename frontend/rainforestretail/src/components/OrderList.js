import Order from "./Order";

const OrderList = ({ basketList }) => {

    const basketComponents = basketList.map(basketItem => {
        return <Order key={basketItem.item.id} item={basketItem.item} orderQuantity={basketItem.orderQuantity} />
    })

    return (
        <>
            <ul>{basketComponents}</ul>
        </>
    );
}

export default OrderList;