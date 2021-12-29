import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";

const Navbar = () => {

    // let history = useHistory()

    const logoutHandler = () => {
        localStorage.removeItem('isAuthenticated')
        console.log(localStorage)
        window.location.pathname = '/'
        // history.push('/')
    }

    return ( 
        <nav className="nav-bar">
            <h1>The Zero Blog</h1>
            <div className="links">
                <Link to="/home">Home</Link>
                <Link to="/create" style={{color:'white', backgroundColor:'#f1356d', borderRadius:'8px'}}>New Blog</Link>
                {
                localStorage.getItem("isAuthenticated") && <Link to="/logout" style={{color:'white', backgroundColor:'grey', borderRadius:'8px'}} onClick={logoutHandler}>Logout</Link>
                }
            </div>
        </nav>
     );
}
 
export default Navbar;