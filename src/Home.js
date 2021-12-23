import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    const [title, setTitle] = useState('All Blogs');

    let url = `http://localhost:8000/blogs`; 

    const { data:blogs, isPending, error } = useFetch(url);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter( (blog) => blog.id !==id )
        console.log(newBlogs);
        // setData(newBlogs);                         // how to use useFetch to perform a state update ?
    } 
    
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