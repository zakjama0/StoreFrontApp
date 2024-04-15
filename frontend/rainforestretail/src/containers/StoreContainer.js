import Navigation from "../components/Navigation";
import Registration from "../components/Registration";
import Login from "../components/Login"

import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import LandingPageContainer from "./LandingPageContainer";
import Item from "../components/Item";

export const userState = React.createContext();



const StoreContainer = () => {
    const [customers, setCustomers] = useState([]);
    const [items, setItems] = useState([]);
    const [orders , setOrders] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [purchaseList, setPurchaseList] = useState([]);
    const [basketList, setBasketList] = useState([]);
    const [orderedItems, setOrderedItems] = useState ([]);
    const [activeUser, setActiveUser] = useState({});
    const [registerUser, setRegister] = useState({});

    const fetchCustomers = async() =>{
        const response = await fetch('http://localhost:8080/customers')
        const data = await response.json()
        setCustomers(data)
    }


    const fetchItems = async() =>{
        const response = await fetch('http://localhost:8080/items')
        const data = await response.json()
        setItems(data)
    }

    const fetchOrders = async() =>{
        const response = await fetch('http://localhost:8080/items')
        const data = await response.json()
        setOrders(data)
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

    useEffect(() =>{
        fetchCustomers()
        fetchItems()
        fetchOrders()
    }, [])



    const itemLoader = ({params}) => {
        return items.find(item => {
            return items.id === parseInt(params.id);
        });
    }

    const userNames = customers.map((customer)=>{
        <li>{customer.name}</li>
    })

    



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
                    path: "/login",
                    element: <Login customers = {customers}
                     />
                },
                {
                    path: `/item`,
                    element: <Item  />
                },

                {
                    path: "/register",
                    element: <Registration customers = {customers} registerUser={registerUser} />
                }
            ]
        }
    ])
    return ( <>
     <div className="container">
                <userState.Provider value={{ activeUser:activeUser, setActiveUser:setActiveUser }}>
                    <RouterProvider router={retailRouter} />
                </userState.Provider>

                <h2>Hello i am store container</h2>
     </div>
        <ul>
            {userNames}
        </ul>
    
    
    </> );
}
 
export default StoreContainer;