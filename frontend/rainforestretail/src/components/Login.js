import { useState, useContext } from "react";
import { userState } from "../containers/StoreContainer";
import { Link, Outlet, useNavigate } from "react-router-dom";
const Login = ({ customers }) => {
    const [loggedUsername, setLoggedUsername] = useState("")
    const context = useContext(userState)
    const { setActiveCustomer } = context;
    const navigate = useNavigate();

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const filteredCustomer = customers.find((customer) =>
            customer.username.toLowerCase() === loggedUsername.toLowerCase(),     
        );

        if (!filteredCustomer) {
            alert("Please Sign Up")
            event.target.reset();
            return;
        } 

        if (filteredCustomer.email !== event.target.email.value.toLowerCase()) {
            alert("Incorrect login details");
            event.target.reset();
            return;
        }

        setActiveCustomer(filteredCustomer);
        event.target.reset();
        navigate("/home");
    }

    return (
        <>
            <div className="login">
            <div className="main-login">
            <h1>Welcome back! Please login</h1>
                <div className="wrapper">
                    <div className="wrap">
                        <form onSubmit={handleFormSubmit}>
                            
                            <div className="input-box">
                            <label htmlFor="login-name">Username:</label>
                            <input
                                    id="username"
                                    name="username"
                                    type="text"
                                    value={loggedUsername}
                                    onInput={(e) => setLoggedUsername(e.target.value)}
                                    placeholder="Enter username.."
                                />
                            </div>
                            
                            <div className="input-box">
                            <label htmlfor="login-email">Email:</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Enter email.."
                                />
                            </div>
                            <div className="remember-forgot">
                                <label for="">
                                    <input type="checkbox" name="" id=""/> Remember Me</label>
                            </div>
                            <div className="register-link">
                                <p> Dont have an account? <Link to="/register" className="register">Register</Link></p>
                            </div>
                            
                            <input className="btn" type="submit" value="Login" />
                        </form>
                    </div>
                </div>
            </div>
            
                <Outlet />
            </div>
        </>
    )
}

export default Login;