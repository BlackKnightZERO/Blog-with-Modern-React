import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>404</h2>
            <p>The page that are looking for is Not Found</p>
            <Link to="/"> {'<'} go back</Link>
        </div>
     );
}
 
export default NotFound;