import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [title, setTitle] = useState('All Blogs');

    const [blogs, setBlogs] =  useState([
        {id:1, title:'Learing Javascript', body: 'story of article...', author:'Arif'},
        {id:2, title:'Time Management', body: 'story of article...', author:'Ayon'},
        {id:3, title:'Mental Health', body: 'story of article...', author:'Faysal'},
        {id:4, title:'React is Fun', body: 'story of article...', author:'Arif'},
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter( (blog) => blog.id !==id )
        console.log(newBlogs);
        setBlogs(newBlogs);
    }
    
    return ( 
        <div className="home">
            <BlogList blogs={blogs} title={title} strMsg="list-view" handleDelete={handleDelete} />  
            {/* passing as propsName={propsValue} */}
        </div>
     );
}
 
export default Home;