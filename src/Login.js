import { useState } from "react";
// import { useHistory } from "react-router-dom";

const Login = () => {

    // let history = useHistory()

    const [userData, setUserData] = useState({username:'admin', password:'1234',});
    const [error, setError] = useState({value:''});

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setUserData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()

        setError( prevState => ({
            ...prevState,
            value: '',
        }))

        // check
        if( userData.username==='' || userData.password==='' ) {
            setError( prevState => ({
                ...prevState,
                value: 'UserName & Password Required',
            }))
        } 

        // redirect
        if( userData.username==='admin' && userData.password==='1234' ) {
            localStorage.setItem("isAuthenticated", "true")
            window.location.pathname = "/home"
            // history.push('/home')
        } else {
            setError( prevState => ({
                ...prevState,
                value: 'Invalid UserName or Password',
            }))
        }
    }
    
    return ( 
        <div className="login">
        {
            error.value !== '' && <div className="error">{error.value}</div>
        }

        <h2>Welcome {userData.username}</h2>

        <form onSubmit={ handleSubmit }>

            <label>UserName:</label>
            <input 
                type="text" 
                name="username"
                required 
                value={ userData.username }
                onChange={ handleInputChange }
            />
            <label>Password:</label>
            <input 
                type="password" 
                name="password"
                required 
                value={ userData.password }
                onChange={ handleInputChange }
            />


            <button className="btn-login">Login</button>

        </form>

        </div>
     );
}
 
export default Login;