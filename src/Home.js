import { useState } from "react";

import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    const title = 'All Blogs';

    let url = `http://localhost:8000/blogs`; 

    const { data:blogs, isPending, error } = useFetch(url);

    const [success, setSuccess] = useState(false)
    const [deleteError, setDeleteError] = useState(null)

    const handleDelete = (id) => {
        const newBlogs = blogs.filter( (blog) => blog.id !==id )
        console.log(newBlogs);
        // setData(newBlogs);                         // how to use useFetch to perform a state update ?

        // newBlogs only needs to be rendered on DOM // mo need for refetch


        let deleteUrl = `http://localhost:8000/blogs/${id}`;

        fetch(deleteUrl, {
            method: 'DELETE'
        })
        .then((res) => {
            if( !res.ok ) {
                throw Error(`${res.url} - ${res.status} ${res.statusText}`)
            } else {
                setSuccess(true)
            }
        })
        .catch(err => {
            setDeleteError(err.message)
        })

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
                deleteError && <div className="error">{deleteError}</div>
            }
            {
                success && <div className="success">Blog deleted successfully<br></br></div>
            }
            {
               blogs && <BlogList blogs={blogs} title={title} strMsg="list-view" handleDelete={handleDelete} />  
            }
            {/* passing as propsName={propsValue} */}
        </div>
     );
}
 
export default Home;