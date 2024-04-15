import { Link, Outlet } from "react-router-dom";
import { useContext } from "react";
import { userState } from "../containers/StoreContainer";
const Navigation = () => {
    const { activeUser, setActiveUser } = useContext(userState)

    const refreshActiveUser = () => {
        setActiveUser({})
    }

    return (<>
        <header>
            <div className="navbar">
                <nav>

                    <ul className="home">
                        <li><Link to="/"> <img src="" /> </Link></li>
                    </ul>

                    {activeUser.id ?

                        <div className="navLinks">
                            <li><Link to="/items">Browse</Link></li>
                            <li><Link to="/orders">Your Orders </Link></li>
                            <li><Link to="/register" onClick={refreshActiveUser}>Sign Out {activeUser.username}</Link></li>
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