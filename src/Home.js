import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [title, setTitle] = useState('All Blogs');

    const [blogs, setBlogs] =  useState(null);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter( (blog) => blog.id !==id )
        console.log(newBlogs);
        setBlogs(newBlogs);
    }

    useEffect(() => {

        // open up json-live server to fetch resporces // npx json-server --watch DB/db.json --port 8000
        let url = `http://localhost:8000/blogs`; 

        fetch(url)                  // async await not required if used fetch-then-then
        .then(res => res.json())    // json obj
        .then((data) => {           // data holds array of objs of the resource(blogs)
            console.log(data);
            setBlogs(data);
        })

    }, []) 
    
    return ( 
        <div className="home">
            {
               blogs && <BlogList blogs={blogs} title={title} strMsg="list-view" handleDelete={handleDelete} />  
            }
            {/* passing as propsName={propsValue} */}
        </div>
     );
}
 
export default Home;