import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {

    const { id } = useParams();

    let url = `http://localhost:8000/blogs/${id}`;

    const { data:blog, isPending, error } = useFetch(url)

    const history = useHistory();

    const [success, setSuccess] = useState(false)
    const [deleting, setDeleting] = useState(false)
    const [deleteError, setDeleteError] = useState(null)

    const handleDelete = (id) => {

        setDeleting(true)

        fetch(url, {
            method: 'DELETE'
        })
        .then((res) => {
            if( !res.ok ) {
                throw Error(`${res.url} - ${res.status} ${res.statusText}`)
            } else {
                setSuccess(true)
                setDeleting(false)
                setTimeout(() => {
                    history.push('/home')
                }, 800 )
            }
        })
        .catch(err => {
            setDeleteError(err.message)
        })

        setDeleting(false)

    }

    return ( 
        <div className="blog-details">
            {
                error && <div className="error">{error}</div>
            }
            {
                deleteError && <div className="error">{deleteError}</div>
            }
            {
                success && <div className="success">Blog deleted successfully<br></br></div>
            }
            {
                isPending && <div className="loading">Loading...</div>
            }
            {
                blog && (
                    <article>
                        <h2>{ blog.title }</h2>
                        <p>Author: { blog.author }</p>
                        {
                            !deleting && <button className="btn-dlt-blog" onClick={ () => handleDelete(blog.id)}>x</button>
                        }
                        {
                            deleting && <button className="btn-dlt-blog-disabled">x</button>
                        }
                        <div className="blog-body">{ blog.body }</div>
                    </article>
                )
            }
        </div>
     );
}
 
export default BlogDetails;