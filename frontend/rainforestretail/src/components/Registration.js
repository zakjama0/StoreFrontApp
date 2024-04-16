import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userState } from "../containers/StoreContainer";

const Registration = ({ users, registerUser }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    const context = useContext(userState)
    const { setActiveUser } = context;
   
    const handleSubmit = (event) => {
      event.preventDefault();
      if (handleValidation()) {
        const newUser = {
          name,
          email,
        }
        setActiveUser(newUser);
        registerUser(newUser);
        navigate("/login");
        return;
      }
    }
  
    const handleValidation = () => {
      let validation = true;
  
      if (users.find(user => user.name === name)) {
        alert("User already exists");
        validation = false;
      }
  
      if (users.find(user => user.email === email)) {
        alert("Email already exists");
        validation = false;
      }
  
      if (name === "" || email === "") {
        alert("Please fill in all fields")
        validation = false;
      }
      return validation;
    }
  
    return (
      <>
        <div className="register">
     
         <div className="main-login">
          <h2></h2>
          <div className="wrapper">
              <div className="wrap">
              <form onSubmit={handleSubmit}>
              <h1> Sign Up!</h1>
                <div className="input-box">
                <label htmlFor="login-name">Name:</label>
                <input className="name"
                  type="text"
                  name="name"
                  placeholder="Enter name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
                </div>
                <div className="input-box">
                <label htmlFor="login-email">Email:</label>
                <input className="email"
                  type="email"
                  name="email"
                  placeholder="Enter email address"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
                </div>
                <div class="register-link">
                     <p> Already have an account? <Link to="/login" className="register">Log in!</Link></p>
                 </div>
               
                <input className="btn" type="submit" value="Sign Up" />
          </form>
              </div>
          </div>  
         </div>  
        </div>
      </>
    );
  };
  
 
export default Registration;