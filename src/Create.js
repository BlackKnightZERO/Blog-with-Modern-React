import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

    const [title, setTitle]     = useState('')
    const [body, setBody]       = useState('')
    const [author, setAuthor]   = useState('mario')
    const [error, setError]     = useState(null)
    const [success, setSuccess] = useState(false)
    const [pending, setPending] = useState(false)

    const history = useHistory();

    // const clearForm = () => {
    //     setTitle('')
    //     setBody('')
    //     setAuthor('mario')
    //     setError(null)
    //     setPending(false)
    // }
    
    const handleSubmit = (e) => {
        e.preventDefault()

        setPending(true)

        const blog = {
            title,
            body,
            author
        }
        // console.log(blog)

        let url = `http://localhost:8000/blogs`;

        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(blog)
        })
        .then((res) => {
            if( !res.ok ) {
                setSuccess(false)
                throw Error(`${res.url} - ${res.status} ${res.statusText}`)
            } else {
                // clearForm()
                setSuccess(true)
                setPending(false)
                setTimeout(() => {
                    history.push('/home')
                }, 800 )
            }
        })
        .catch(err => {
            setError(err.message)
        })

        setPending(false)

    }

    return ( 
        <div className="create">

            {
                error && <div className="error">{error}<br></br></div>
            }
            {
                success && <div className="success">Blog added successfully<br></br></div>
            }

            <h2>Add a New Blog</h2>

            <form onSubmit={ handleSubmit }>

                <label>Blog Title:</label>
                <input 
                    type="text" 
                    required 
                    value={ title }
                    onChange={ (e) => setTitle(e.target.value) }
                />

                <label>Blog Body:</label>
                <textarea cols="30" rows="10" required onChange={ (e) => setBody(e.target.value) } defaultValue={body}></textarea> {/* defaultValue for textarea */}
                
                <select onChange={ (e) => setAuthor(e.target.value) } >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                {
                    !pending && <button >Create</button>
                }
                {
                    pending && <button disabled>Adding..</button>
                }

                <p>{title} - {body} - {author}</p>
            </form>
        </div>
     );
}
 
export default Create;