import { useState, useContext, useEffect } from "react";
import { userState } from "../containers/StoreContainer";
import { Link, Outlet, useNavigate } from "react-router-dom";

const Login = ({ customers }) => {

    const [loggedEmail, setLoggedEmail] = useState("");
    const [loginToken, setLoginToken] = useState(false);
    const context = useContext(userState);
    const { setActiveCustomer } = context;
    const navigate = useNavigate();

    const getToken = async (customerId, passwordAttempt) => {
        const response = await fetch(`http://localhost:8080/customers/${customerId}/${passwordAttempt}`);
        const data = await response.json();
        setLoginToken();
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const filteredCustomer = customers.find((customer) => {
            return customer.email.toLowerCase() === loggedEmail.toLowerCase()
        });

        if (!filteredCustomer) {
            alert("Please Sign Up")
            event.target.reset();
            return;
        } 

        getToken(filteredCustomer.id, event.target.password.value);
        console.log(loginToken);

        // STAMP

        if (!loginToken) {
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
                            <label htmlFor="login-name">Email:</label>
                            <input
                                    id="email"
                                    name="email"
                                    type="text"
                                    value={loggedEmail}
                                    onInput={(e) => setLoggedEmail(e.target.value)}
                                    placeholder="Enter email.."
                                />
                            </div>
                            
                            <div className="input-box">
                            <label htmlfor="login-email">Password:</label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    placeholder="Enter password.."
                                />
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