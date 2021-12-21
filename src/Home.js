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
    
    return ( 
        <div className="home">
            <BlogList blogs={blogs} title={title} strMsg="list-view" />  
            {/* passing as propsName={propsValue} */}
            <BlogList blogs={blogs.filter((blog) => blog.author === 'Arif')} title="Arif's Blogs" strMsg="list-view" />  
        </div>
     );
}
 
export default Home;