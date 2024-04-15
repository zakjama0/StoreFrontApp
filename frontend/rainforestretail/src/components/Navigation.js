const Navigation = () => {




    return ( <>
    <header>
            <nav>

                    <ul className="home">
                        <li><Link to="/"> <img src=""/> </Link></li>
                    </ul>

                     {activeUser.id ? 

                     <div className="navLinks">
                     <li><Link to="/chatrooms">Chatrooms</Link></li>
                     <li><Link to="/register" onClick={refreshActiveUser}>Sign Out {activeUser.username}</Link></li>
                    
                     </div>
                     :
                     <div className="navLinks">
                     <li><Link to="/login" >Login</Link></li>
                     <li><Link to="/register">Sign Up</Link></li>
                     </div>
                     }
                        

                 
                   
                </nav>
                <Outlet />
            </header>
    
    </> );
}
 
export default Navigation;