import { useState } from "react";

const Home = () => {

    const [blogs, setBlogs] =  useState([
        {id:1, title:'Learing Javascript', body: 'story of article...', author:'Arif'},
        {id:2, title:'Time Management', body: 'story of article...', author:'Ayon'},
        {id:3, title:'Mental Health', body: 'story of article...', author:'Faysal'},
    ]);
    
    return ( 
        <div className="home">
            {
                blogs.map((blog) => (
                    <div className="blog-preview" key={blog.id}>
                        <h2>{ blog.title }</h2>
                        <p>Author: { blog.author }</p>
                    </div>
                ))
            }
        </div>
     );
}
 
export default Home;