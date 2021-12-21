const BlogList = ( { blogs, title, strMsg } ) => {  // direct-destructure

// const BlogList = ( props ) => {

//     const blogs    = props.blogs;
//     const title    = props.title;
//     const strTitle = props.strTitle;

    console.log(title, strMsg, blogs);

    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            <small>{strMsg}</small>
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
 
export default BlogList;