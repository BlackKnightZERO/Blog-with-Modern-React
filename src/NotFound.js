import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {

    const [localTime, setLocalTime] = useState('')

    useEffect(() => {
        setInterval(() => {
            setLocalTime(new Date().toLocaleTimeString())
        }, 1000)
    }, [])

    return ( 
        <div className="not-found">
            <h2>404</h2>
            <p>The page that are looking for is Not Found</p>
            <Link to="/"> {'<'} go back</Link>
            <h1>{ localTime }</h1>
        </div>
     );
}
 
export default NotFound;