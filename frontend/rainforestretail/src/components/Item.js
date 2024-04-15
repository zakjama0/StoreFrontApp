import { useLoaderData } from 'react-router-dom';

const Item = () => {

    const item = useLoaderData();

    return (
        <>
            {item ? 
            (<h1>{item.name}</h1>) :
            <></>
            }
        </>
    );
}
 
export default Item;