import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {

    const { id } = useParams();

    let url = `http://localhost:8000/blogs/${id}`;

    const { data:blog, isPending, error } = useFetch(url);

    return ( 
        <div className="blog-details">
            {
                error && <div className="error">{error}</div>
            }
            {
                isPending && <div className="loading">Loading...</div>
            }
            {
                blog && (
                    <article>
                        <h2>{ blog.title }</h2>
                        <p>Author: { blog.author }</p>
                        <div className="blog-body">{ blog.body }</div>
                    </article>
                )
            }
        </div>
     );
}
 
export default BlogDetails;