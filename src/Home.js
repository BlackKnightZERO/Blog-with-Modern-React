import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [title, setTitle] = useState('All Blogs');

    const [blogs, setBlogs] =  useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter( (blog) => blog.id !==id )
        console.log(newBlogs);
        setBlogs(newBlogs);
    }

    useEffect(() => {

        // open up json-live server to fetch resporces  // npx json-server --watch DB/db.json --port 8000

        let url = `http://localhost:8000/blogs`; 

        fetch(url)                                      // async await not required if used fetch-then-then
        .then(res => {    
            // console.log(res);          
            if( !res.ok ){
                throw Error(`${res.url} - ${res.status} ${res.statusText}`);        // custom error throw
            }
            return res.json();                          // json obj
        })    
        .then((data) => {                               // data holds array of objs of the resource(blogs)
            // console.log(data);
            setBlogs(data);
            setIsPending(false);
            setError(null);
        })
        .catch(err => {
            // console.log(err.message);                   // server or network connection error
            setError(err.message);
            setIsPending(false);
        })

    }, []) 
    
    return ( 
        <div className="home">
            {
                error && <div className="error">{error}</div>
            }
            {
                isPending && <div className="loading">Loading...</div>
            }
            {
               blogs && <BlogList blogs={blogs} title={title} strMsg="list-view" handleDelete={handleDelete} />  
            }
            {/* passing as propsName={propsValue} */}
        </div>
     );
}
 
export default Home;