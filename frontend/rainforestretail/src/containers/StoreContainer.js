import Navigation from "../components/Navigation";
import Registration from "../components/Registration";
import Login from "../components/Login"
import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import LandingPageContainer from "./LandingPageContainer";
import Item from "../components/Item";
import BrowseItemsContainer from "./BrowseItemsContainer";

export const userState = React.createContext();



const StoreContainer = () => {
    const [customers, setCustomers] = useState([]);
    const [items, setItems] = useState([]);
    const [orders , setOrders] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [purchaseList, setPurchaseList] = useState([]);
    const [basketList, setBasketList] = useState([]);
    const [orderedItems, setOrderedItems] = useState ([]);


    const [activeCustomer, setActiveCustomer] = useState({});
    const [registerCustomer, setRegisterCustomer] = useState({});

    const fetchCustomers = async () => {
        const response = await fetch('http://localhost:8080/customers')
        const data = await response.json()
        setCustomers(data)
    }


    const fetchItems = async () => {
        const response = await fetch('http://localhost:8080/items')
        const data = await response.json()
        setItems(data)
    }

    const fetchOrders = async () => {
        const response = await fetch('http://localhost:8080/orders')
        const data = await response.json()
        setOrders(data)
    }

    const fetchReviews = async () => {
        const response = await fetch('http://localhost:8080/reviews')
        const data = await response.json()
        setReviews(data)
    }

    const postCustomer = async (newCustomer) => {
        const response = await fetch("http://localhost:8080/customers", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newCustomer)
        });
        fetchCustomers();
    }

    const postOrderedItems = async (newOrderedItem) => {

        const response = await fetch("http://localhost:8080/ordered-items", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newOrderedItem)
        })
        const savedNewOrderedItem = await response.json();
        setOrderedItems([...orderedItems, savedNewOrderedItem]);
    }

    const patchOrderedItems = async (newOrderedItem) => {

        const response = await fetch("http://localhost:8080/ordered-items", {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newOrderedItem)
        })
        const savedNewOrderedItem = await response.json();
        setOrderedItems([...orderedItems, savedNewOrderedItem]);
    }

    const postReview = async (newReview) => {
        const response = await fetch("http://localhost:8080/items", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newReview)
        });
        fetchItems();
    }

    const deleteReview = async (reviewId) => {
        const response = await fetch(`http://localhost:8080/reviews/${reviewId}`, {
            method: "DELETE",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(reviewId)
        });
        fetchItems();
    }

    const patchReview = async (amendedReview, reviewId) => {
        const response = await fetch(`http://localhost:8080/reviews/${reviewId}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(amendedReview)
        });
        fetchItems();
    }

    useEffect(() =>{
        fetchCustomers();
        fetchItems();
        fetchOrders();
        fetchReviews();
    }, [])

    const itemLoader = ({params}) => {
        return items.find(item => {
            return item.id === parseInt(params.itemId);
        });
    }

    const userNames = customers.map((customer)=>{
        <li>{customer.name}</li>
    });

    const retailRouter = createBrowserRouter([
        {
            path: "/",
            element: <Navigation />,
            children: [
                {
                    path: "/",
                    element: <Navigate to="/home" />
                },
                {
                    path: "/home",
                    element: <LandingPageContainer items={items}/>
                },
                {
                    path: "/items",
                    element: <BrowseItemsContainer items={items}/>
                },
                {
                    path: "/items/:itemId",
                    loader: itemLoader,
                    element: <Item  
                              postReview={postReview}
                              deleteReview={deleteReview}
                              patchReview={patchReview}
                              />
                },
                {
                    path: "/login",
                    element: <Login customers = {customers} />
                },
                {
                    path: "/register",

                    element: <Registration customers = {customers} postCustomer={postCustomer} />

                }
            ]
        }
    ]);

    return ( <>
     <div className="container">
                <userState.Provider value={{ activeCustomer:activeCustomer, setActiveCustomer:setActiveCustomer}}>
                    <RouterProvider router={retailRouter} />
                </userState.Provider>
     </div>
        <ul>
            {userNames}
        </ul>
    
    
    </> );
}
 
export default StoreContainer;