import { Link, Outlet } from "react-router-dom";
import { useContext } from "react";
import { userState } from "../containers/StoreContainer";

const Navigation = () => {

    const {activeCustomer, setActiveCustomer}  = useContext(userState);

    const refreshActiveCustomer = () =>{
        setActiveCustomer({})
    }

    return (<>
        <header>
            <div className="navbar">
                <nav>

                    <ul className="home">
                        <li><Link to="/"> <img src='../src/images/image-8.png' /> </Link></li>
                    </ul>

                    {activeCustomer.id ?

                        <div className="navLinks">
                            <li><Link to="/items">Browse</Link></li>
                            <li><Link to="/orders">Your Orders </Link></li>
                            <li><Link to="/register" onClick={refreshActiveCustomer}>Sign Out {activeCustomer.name}</Link></li>
                        </div>

                        :

                        <div className="navLinks">
                            <li><Link to="/items" >Browse</Link></li>
                            <li><Link to="/login">Log in</Link></li>
                            <li><Link to="/register">Sign Up</Link></li>
                        </div>
                    }

                </nav>
            </div>
            <Outlet />
        </header>

    </>);
}

export default Navigation;