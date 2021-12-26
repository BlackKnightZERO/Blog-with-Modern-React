import { Link } from "react-router-dom";

const BlogList = ( { blogs, title, strMsg, handleDelete } ) => {  // direct-destructure

// const BlogList = ( props ) => {

//     const blogs    = props.blogs;
//     const title    = props.title;
//     const strTitle = props.strTitle;

    // console.log(title, strMsg, blogs);

    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            <small>{strMsg}</small>
            {
                blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={ `/blogs/${blog.id}` }>
                        <h2>{ blog.title }</h2>
                        <p>Author: { blog.author }</p>
                    </Link>
                    <button className="btn-dlt-blog" onClick={ () => handleDelete(blog.id)}>x</button>
                    
                </div>
                ))
            }
        </div>
     );
}
 
export default BlogList;