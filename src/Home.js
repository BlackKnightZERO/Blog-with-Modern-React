import { useState, useEffect } from "react";

import BlogList from "./BlogList";
// import useFetch from "./useFetch";

const Home = () => {

    const title = 'All Blogs';

    let url = `http://localhost:8000/blogs`; 

    // const { data:blogs, isPending, error } = useFetch(url);    

    const [success, setSuccess] = useState(false)
    const [deleteError, setDeleteError] = useState(null)

    const [blogs, setBlogs] =  useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortConst = new AbortController();

        fetch(url, { signal: abortConst.signal })   
            .then(res => {             
                if( !res.ok ){
                    throw Error(`${res.url} - ${res.status} ${res.statusText}`);    
                }
                return res.json();                          
            })    
            .then((data) => {                               
                setBlogs(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                if( err.name === 'AbortError' ) {           
                    console.log('fetch aborted');
                } else {
                    setError(err.message);
                    setIsPending(false);
                }
            })

            return () => {                                           
                console.log('clean up function called');           
                abortConst.abort();                                 
            }
    }, [url])

    const handleDelete = (id) => {

        const newBlogs = blogs.filter( (blog) => blog.id !==id )
        console.log(newBlogs);
        setBlogs(newBlogs); 

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